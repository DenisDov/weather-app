import BottomSheet from "@gorhom/bottom-sheet";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import ForecastSheetBackground from "./ForecastSheetBackground";
import ForecastControl from "./elements/ForecastControl";
import Separator from "./elements/Separator";
import ForecastScroll from "../forecast/ForecastScroll";
import AirQualityWidget from "../forecast/widgets/AirQualityWidget";
import FeelsLikeWidget from "../forecast/widgets/FeelsLikeWidget";
import HumidityWidget from "../forecast/widgets/HumidityWidget";
import PressureWidget from "../forecast/widgets/PressureWidget";
import RainFallWidget from "../forecast/widgets/RainFallWidget";
import SunriseWidget from "../forecast/widgets/SunriseWidget";
import UvIndexWidget from "../forecast/widgets/UvIndexWidget";
import VisibilityWidget from "../forecast/widgets/VisibilityWidget";
import WindWidget from "../forecast/widgets/WindWidget";

import { useForecastSheetPosition } from "@/context/ForecastSheetContext";
import { useWeatherData } from "@/context/WeatherDataContext";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import { ForecastType } from "@/models/Weather";

export default function ForecastSheet() {
  const { width, height } = useApplicationDimensions();
  const {
    weatherData: { hourlyForecast, weeklyForecast },
  } = useWeatherData();
  const smalLWidgetSize = width / 2 - 20;
  const snapPoints = ["38.5%", "83%"];
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100);
  const secondSnapPoint = height * (parseFloat(snapPoints[1]) / 100);
  const minY = height - secondSnapPoint;
  const maxY = height - firstSnapPoint;
  const cornerRadius = 44;
  const capsuleRadius = 30;
  const capsuleHeight = height * 0.17;
  const capsuleWidth = width * 0.15;
  const [selectedForecastType, setSelectedForecastType] = useState<ForecastType>(
    ForecastType.Hourly,
  );
  const currentPosition = useSharedValue(0);
  const animatedPosition = useForecastSheetPosition();

  const translateXHourly = useSharedValue(0);
  const translateXWeekly = useSharedValue(width);
  const animatedHourlyStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateXHourly.value }],
    };
  });
  const animatedWeeklyStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateXWeekly.value }],
    };
  });

  useEffect(() => {
    if (selectedForecastType === ForecastType.Weekly) {
      translateXHourly.value = withTiming(-width);
      translateXWeekly.value = withTiming(-width);
    } else {
      translateXHourly.value = withTiming(0);
      translateXWeekly.value = withTiming(width);
    }
  }, [selectedForecastType]);

  const normalizePosition = (position: number) => {
    "worklet";
    return ((position - maxY) / (maxY - minY)) * -1;
  };

  useAnimatedReaction(
    () => {
      return currentPosition.value;
    },
    (currentValue, previousValue) => {
      // ...
      animatedPosition.value = normalizePosition(currentValue);
    },
  );

  return (
    <BottomSheet
      snapPoints={snapPoints}
      animateOnMount={false}
      animatedPosition={currentPosition}
      handleIndicatorStyle={{
        width: 48,
        height: 5,
        backgroundColor: "rgba(0,0,0,.3)",
      }}
      backgroundComponent={() => (
        <ForecastSheetBackground
          width={width}
          height={firstSnapPoint}
          cornerRadius={cornerRadius}
        />
      )}>
      <ForecastControl onPress={(type) => setSelectedForecastType(type)} />
      <Separator width={width} height={1} />
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <Animated.View style={animatedHourlyStyles}>
            <ForecastScroll
              capsuleWidth={capsuleWidth}
              capsuleHeight={capsuleHeight}
              capsuleRadius={capsuleRadius}
              forecasts={hourlyForecast}
            />
          </Animated.View>
          <Animated.View style={animatedWeeklyStyles}>
            <ForecastScroll
              capsuleWidth={capsuleWidth}
              capsuleHeight={capsuleHeight}
              capsuleRadius={capsuleRadius}
              forecasts={weeklyForecast}
            />
          </Animated.View>
        </View>
        <View style={{ flex: 1, paddingTop: 30 }}>
          <AirQualityWidget width={width - 30} height={150} />

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: 15,
              gap: 10,
            }}>
            <UvIndexWidget width={smalLWidgetSize} height={smalLWidgetSize} />
            <WindWidget width={smalLWidgetSize} height={smalLWidgetSize} />
            <SunriseWidget width={smalLWidgetSize} height={smalLWidgetSize} />
            <RainFallWidget width={smalLWidgetSize} height={smalLWidgetSize} />
            <FeelsLikeWidget width={smalLWidgetSize} height={smalLWidgetSize} />
            <HumidityWidget width={smalLWidgetSize} height={smalLWidgetSize} />
            <VisibilityWidget width={smalLWidgetSize} height={smalLWidgetSize} />
            <PressureWidget width={smalLWidgetSize} height={smalLWidgetSize} />
          </View>
        </View>
      </ScrollView>
    </BottomSheet>
  );
}

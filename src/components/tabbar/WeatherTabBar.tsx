import { BlurView } from "expo-blur";
import { Text, View, StyleSheet } from "react-native";
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from "react-native-reanimated";

import ArcComponent from "./elements/ArcComponent";
import TabbarItems from "./elements/TabbarItems";

import { useForecastSheetPosition } from "@/context/ForecastSheetContext";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";

export default function WeatherTabBar() {
  const TabbarHeight = 88;
  const { width, height } = useApplicationDimensions();
  const animatedPosition = useForecastSheetPosition();

  const animatedViewStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedPosition.value,
            [0, 1],
            [0, TabbarHeight + 20],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        { ...StyleSheet.absoluteFillObject, top: height - TabbarHeight },
        animatedViewStyles,
      ]}>
      <ArcComponent height={TabbarHeight} width={width} />
      <TabbarItems />
    </Animated.View>
  );
}

const styles = StyleSheet.create({});

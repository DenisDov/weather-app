import { Text, View, StyleSheet } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useForecastSheetPosition } from "@/context/ForecastSheetContext";
import { useWeatherData } from "@/context/WeatherDataContext";
import { DEGREE_SYMBOL } from "@/lib/Constants";

export default function WeatherInfo() {
  const { weatherData } = useWeatherData();
  const {
    currentWeather: { city, temperature, condition, high, low },
  } = weatherData;
  const { top } = useSafeAreaInsets();
  const topMargin = 51;
  const weatherInfoMargin = top + topMargin;
  const animatedPosition = useForecastSheetPosition();
  const animatedViewStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedPosition.value,
            [0, 1],
            [0, -topMargin],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });
  const animatedTempTxtStyles = useAnimatedStyle(() => {
    const fontFamily = animatedPosition.value > 0.5 ? "SF-Semibold" : "SF-Thin";
    return {
      fontFamily,
      opacity: interpolate(animatedPosition.value, [0, 0.5, 1], [1, 0, 1]),
      fontSize: interpolate(animatedPosition.value, [0, 1], [96, 20]),
      lineHeight: interpolate(animatedPosition.value, [0, 1], [96, 20]),
      color: interpolateColor(animatedPosition.value, [0, 1], ["white", "rgba(235, 235,245,0.6)"]),
    };
  });
  const animatedMinMaxTxtStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animatedPosition.value, [0, 0.5], [1, 0]),
    };
  });
  const animatedSeparatorTxtStyle = useAnimatedStyle(() => {
    const display = animatedPosition.value > 0.5 ? "flex" : "none";
    return {
      display,
      opacity: interpolate(animatedPosition.value, [0, 0.5, 1], [0, 0, 1]),
    };
  });
  const animatedTempConditionStyles = useAnimatedStyle(() => {
    const flexDirection = animatedPosition.value > 0.5 ? "row" : "column";
    return {
      flexDirection,
    };
  });
  const animatedConditionTxtStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedPosition.value,
            [0, 0.5, 1],
            [0, -20, 0],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[{ alignItems: "center", marginTop: weatherInfoMargin }, animatedViewStyle]}>
      <Animated.Text style={styles.cityText}>{city}</Animated.Text>
      <Animated.View style={[{ alignItems: "center" }, animatedTempConditionStyles]}>
        <Animated.View style={[{ flexDirection: "row" }]}>
          <Animated.Text style={[styles.temperatureText, animatedTempTxtStyles]}>
            {temperature}
            {DEGREE_SYMBOL}
          </Animated.Text>
          <Animated.Text style={[styles.separatorText, animatedSeparatorTxtStyle]}>|</Animated.Text>
        </Animated.View>

        <Animated.Text style={[styles.conditionText, animatedConditionTxtStyle]}>
          {condition}
        </Animated.Text>
      </Animated.View>
      <Animated.Text style={[styles.minMaxText, animatedMinMaxTxtStyles]}>
        H:{high}
        {DEGREE_SYMBOL} L:{low}
        {DEGREE_SYMBOL}
      </Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cityText: {
    fontFamily: "SF-Regular",
    color: "white",
    fontSize: 34,
    lineHeight: 41,
  },
  temperatureText: {
    fontFamily: "SF-Thin",
    fontSize: 96,
    color: "white",
    lineHeight: 96,
  },
  separatorText: {
    fontFamily: "SF-Semibold",
    fontSize: 20,
    color: '"rgba(235,235,245,0.6)"',
    lineHeight: 20,
    marginHorizontal: 2,
    display: "none",
  },
  conditionText: {
    fontFamily: "SF-Semibold",
    fontSize: 20,
    color: "rgba(235,235,245,0.6)",
    lineHeight: 20,
  },
  minMaxText: {
    fontFamily: "SF-Semibold",
    fontSize: 20,
    color: "white",
    lineHeight: 20,
  },
});

import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import { Image, ImageBackground } from "expo-image";
import { StyleSheet, ScaledSize, View, Platform } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

import BackgroundGradient from "./BackgroundGradient";

import { useForecastSheetPosition } from "@/context/ForecastSheetContext";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";

export default function HomeBackground() {
  const dimensions = useApplicationDimensions();
  const { width, height } = dimensions;
  const myStyles = styles(dimensions);

  const smokeHeight = height * 0.6;
  const smokeOffsetY = height * 0.4;

  const animatedPosition = useForecastSheetPosition();
  const AnimatedImgBkg = Animated.createAnimatedComponent(ImageBackground);
  const AnimatedCanvas = Animated.createAnimatedComponent(Canvas);
  const leftBkgColor = useSharedValue("#2E335A");
  const rightBkgColor = useSharedValue("#1C1B33");
  const bkgColors = useDerivedValue(() => {
    if (Platform.OS === "ios") {
      leftBkgColor.value = interpolateColor(animatedPosition.value, [0, 1], ["#2E335A", "#422E5A"]);
    } else {
      leftBkgColor.value = animatedPosition.value > 0.5 ? "#422E5A" : "#2E335A";
    }

    return [leftBkgColor.value, rightBkgColor.value];
  });
  const animatedImgBkgStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedPosition.value,
            [0, 1],
            [0, -height],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });
  const animatedCanvasSmoketyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animatedPosition.value, [0, 0.1], [1, 0], Extrapolation.CLAMP),
    };
  });
  return (
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <BackgroundGradient colors={bkgColors} />
      <AnimatedImgBkg
        source={require("@/assets/home/Background.png")}
        contentFit="cover"
        style={[{ ...StyleSheet.absoluteFillObject }, animatedImgBkgStyles]}>
        <AnimatedCanvas
          style={[
            { height: smokeHeight, ...StyleSheet.absoluteFillObject, top: smokeOffsetY },
            animatedCanvasSmoketyles,
          ]}>
          <Rect x={0} y={0} width={width} height={smokeHeight}>
            <LinearGradient
              start={vec(width / 2, 0)}
              end={vec(width / 2, smokeHeight)}
              colors={["rgba(58,63,84,0)", "rgba(58,63,84,1)"]}
              positions={[-0.02, 0.54]}
            />
          </Rect>
        </AnimatedCanvas>
        <Image
          source={require("@/assets/home/House.png")}
          contentFit="cover"
          style={myStyles.image}
        />
      </AnimatedImgBkg>
    </View>
  );
}

const styles = ({ width, height }: ScaledSize) => {
  const imageY = (304 / height) * 100;
  return StyleSheet.create({
    image: {
      ...StyleSheet.absoluteFillObject,
      width,
      height: width,
      top: `${imageY}%`,
    },
  });
};

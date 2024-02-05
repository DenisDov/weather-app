import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import { ImageBackground } from "expo-image";
import { StyleSheet, useWindowDimensions } from "react-native";

export default function HomeBackground() {
  const { width, height } = useWindowDimensions();
  return (
    <>
      <Canvas style={styles.canvas}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={["#2E335A", "#1C1B33"]}
          />
        </Rect>
      </Canvas>
      <ImageBackground
        source={require("@/assets/home/Background.png")}
        contentFit="cover"
        style={styles.image}
      />
    </>
  );
}

const styles = StyleSheet.create({
  canvas: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    flex: 1,
  },
});

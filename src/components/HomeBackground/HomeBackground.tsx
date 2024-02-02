import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";

export default function HomeBackground() {
  const { width, height } = useWindowDimensions();
  return (
    <Canvas style={{ width, height }}>
      <Rect x={0} y={0} width={width} height={height}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(width, height)}
          colors={["blue", "yellow"]}
        />
      </Rect>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { Canvas, Line, Shadow, vec } from "@shopify/react-native-skia";
import { Text, View, StyleSheet } from "react-native";

interface SeparatorProps {
  width: number;
  height: number;
}

export default function Separator({ width, height }: SeparatorProps) {
  return (
    <Canvas style={{ width, height }}>
      <Line p1={vec(0, 0)} p2={vec(width, 0)} color="rgba(255,255,255,0.3)" strokeWidth={height} />
      <Shadow dx={0} dy={1} blur={0} color="rgba(0,0,0,0.2)" />
    </Canvas>
  );
}

const styles = StyleSheet.create({});

import { Canvas, Path } from "@shopify/react-native-skia";
import { Text, View, StyleSheet } from "react-native";

interface ArcComponentProps {
  height: number;
  width: number;
}

export default function ArcComponent({ height, width }: ArcComponentProps) {
  const arcPath = `M 0 0 Q ${width / 2} ${height / 2} ${width} 0 L ${width} ${height} L 0 ${height} Z`;
  return (
    <Canvas style={{ height }}>
      <Path path={arcPath} />
    </Canvas>
  );
}

const styles = StyleSheet.create({});

import { View } from "react-native";

import TrapezoidBackground from "./TrapezoidBackground";
import ListIcon from "../icons/ListIcon";
import MapIcon from "../icons/MapIcon";

import useApplicationDimensions from "@/hooks/useApplicationDimensions";

export default function TabbarItems() {
  const { width, height } = useApplicationDimensions();
  const trapezoidWidth = width * 0.709;
  const trapezoidHeight = height * 0.123;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 32,
      }}>
      <MapIcon />
      <TrapezoidBackground width={trapezoidWidth} height={trapezoidHeight} />
      <ListIcon />
    </View>
  );
}

import { Text, View, StyleSheet } from "react-native";

import ArcComponent from "./elements/ArcComponent";
import TabbarItems from "./elements/TabbarItems";

import useApplicationDimensions from "@/hooks/useApplicationDimensions";

export default function WeatherTabBar() {
  const TabbarHeight = 88;
  const { width, height } = useApplicationDimensions();
  return (
    <View
      style={{
        height: TabbarHeight,
        ...StyleSheet.absoluteFillObject,
        top: height - TabbarHeight,
      }}>
      <ArcComponent height={TabbarHeight} width={width} />
      <TabbarItems />
    </View>
  );
}

const styles = StyleSheet.create({});

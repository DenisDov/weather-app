import { BlurView } from "expo-blur";
import { Text, View, StyleSheet } from "react-native";

import ArcComponent from "./elements/ArcComponent";
import TabbarItems from "./elements/TabbarItems";

import useApplicationDimensions from "@/hooks/useApplicationDimensions";

export default function WeatherTabBar() {
  const TabbarHeight = 88;
  const { width, height } = useApplicationDimensions();
  return (
    <BlurView
      experimentalBlurMethod="dimezisBlurView"
      intensity={50}
      tint="dark"
      style={{
        height: TabbarHeight,
        ...StyleSheet.absoluteFillObject,
        top: height - TabbarHeight,
      }}>
      <ArcComponent height={TabbarHeight} width={width} />
      <TabbarItems />
    </BlurView>
  );
}

const styles = StyleSheet.create({});

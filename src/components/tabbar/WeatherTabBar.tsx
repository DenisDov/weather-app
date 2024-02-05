import { Text, View, StyleSheet } from "react-native";

import ArcComponent from "./elements/ArcComponent";

import useApplicationDimensions from "@/hooks/useApplicationDimensions";

export default function WeatherTabBar() {
  const TabBarHeight = 88;
  const { width, height } = useApplicationDimensions();
  return (
    <View
      style={{
        height: TabBarHeight,
        ...StyleSheet.absoluteFillObject,
        top: height - TabBarHeight,
      }}>
      <ArcComponent height={TabBarHeight} width={width} />
    </View>
  );
}

const styles = StyleSheet.create({});

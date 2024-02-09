import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ForecastCapsule from "./ForecastCapsule";

import { Forecast } from "@/models/Weather";

interface ForecastScrollProps {
  forecasts: Forecast[];
  capsuleWidth: number;
  capsuleHeight: number;
  capsuleRadius: number;
}

export default function ForecastScroll({
  forecasts,
  capsuleWidth,
  capsuleHeight,
  capsuleRadius,
}: ForecastScrollProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 12, paddingHorizontal: 20, paddingTop: 20, paddingBottom: 10 }}
      style={
        {
          // paddingLeft: 20,
          // backgroundColor: "red",
          // paddingRight: 60,
        }
      }>
      {/* <View style={{ flex: 1, flexDirection: "row", gap: 12 }}> */}
      {forecasts.map((forecast, i) => {
        return (
          <ForecastCapsule
            key={i}
            forecast={forecast}
            width={capsuleWidth}
            height={capsuleHeight}
            radius={capsuleRadius}
          />
        );
      })}
      {/* </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

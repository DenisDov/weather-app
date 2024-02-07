import BottomSheet from "@gorhom/bottom-sheet";
import { useState } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

import ForecastSheetBackground from "./ForecastSheetBackground";
import ForecastControl from "./elements/ForecastControl";
import Separator from "./elements/Separator";
import ForecastScroll from "../forecast/ForecastScroll";

import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import { hourly, weekly } from "@/lib/data/ForecastData";
import { ForecastType } from "@/models/Weather";

export default function ForecastSheet() {
  const { width, height } = useApplicationDimensions();
  const snapPoints = ["38.5%", "83%"];
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100);
  const cornerRadius = 44;
  const capsuleRadius = 30;
  const capsuleHeight = height * 0.17;
  const capsuleWidth = width * 0.15;
  const [selectedForecastType, setSelectedForecastType] = useState(ForecastType.Hourly);
  return (
    <BottomSheet
      snapPoints={snapPoints}
      handleIndicatorStyle={{
        width: 48,
        height: 5,
        backgroundColor: "rgba(0,0,0,.3)",
      }}
      backgroundComponent={() => (
        <ForecastSheetBackground
          width={width}
          height={firstSnapPoint}
          cornerRadius={cornerRadius}
        />
      )}>
      <ForecastControl onPress={(type) => setSelectedForecastType(type)} />
      <Separator width={width} height={1} />
      <ForecastScroll
        capsuleWidth={capsuleWidth}
        capsuleHeight={capsuleHeight}
        capsuleRadius={capsuleRadius}
        forecasts={selectedForecastType === ForecastType.Hourly ? hourly : weekly}
      />
    </BottomSheet>
  );
}

const styles = StyleSheet.create({});

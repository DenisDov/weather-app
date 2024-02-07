import BottomSheet from "@gorhom/bottom-sheet";
import { Text, View, StyleSheet, Platform } from "react-native";

import ForecastSheetBackground from "./ForecastSheetBackground";
import ForecastControl from "./elements/ForecastControl";
import Separator from "./elements/Separator";
import ForecastCapsule from "../forecast/ForecastCapsule";

import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import { hourly } from "@/lib/data/ForecastData";

export default function ForecastSheet() {
  const { width, height } = useApplicationDimensions();
  const snapPoints = ["38%", "83%"];
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100);
  const cornerRadius = 44;
  const capsuleRadius = 30;
  const capsuleHeight = height * 0.17;
  const capsuleWidth = width * 0.15;
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
      <ForecastControl />
      <Separator width={width} height={1} />
      <ForecastCapsule
        width={capsuleWidth}
        height={capsuleHeight}
        radius={capsuleRadius}
        forecast={hourly[0]}
      />
    </BottomSheet>
  );
}

const styles = StyleSheet.create({});

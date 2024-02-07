import BottomSheet from "@gorhom/bottom-sheet";
import { Text, View, StyleSheet } from "react-native";

import ForecastSheetBackground from "./ForecastSheetBackground";

import useApplicationDimensions from "@/hooks/useApplicationDimensions";

export default function ForecastSheet() {
  const { width, height } = useApplicationDimensions();
  const snapPoints = ["39%", "84%"];
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100);
  const cornerRadius = 44;
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
      )}
    />
  );
}

const styles = StyleSheet.create({});

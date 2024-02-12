import { Text, View, StyleSheet } from "react-native";

import BackgroundGradient from "@/components/BackgroundGradient";

export default function WeatherList() {
  return <BackgroundGradient />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

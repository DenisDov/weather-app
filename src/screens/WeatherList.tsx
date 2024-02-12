import { Text, View, StyleSheet } from "react-native";

export default function WeatherList() {
  return (
    <View style={styles.container}>
      <Text>WeatherList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { Text, View, StyleSheet } from "react-native";

import ListIcon from "../icons/ListIcon";
import MapIcon from "../icons/MapIcon";

export default function TabbarItems() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "red",
        paddingHorizontal: 32,
      }}>
      <MapIcon />
      <ListIcon />
    </View>
  );
}

const styles = StyleSheet.create({});

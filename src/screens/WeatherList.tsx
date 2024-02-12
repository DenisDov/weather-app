import { Ionicons } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import BackgroundGradient from "@/components/BackgroundGradient";

export default function WeatherList() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <>
      <BackgroundGradient />
      {/* Header */}
      <View style={{ paddingTop: top + 2, flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingBottom: 8,
          }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-sharp" size={34} color="rgba(235,235,245,.6)" />
            </Pressable>
            <Text style={styles.titleText}>Weather</Text>
          </View>
          <Ionicons name="ellipsis-horizontal-circle" size={34} color="white" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: "white",
    fontFamily: "SF-Semibold",
    fontSize: 28,
  },
});

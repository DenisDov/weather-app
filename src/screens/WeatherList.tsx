import { Ionicons, Feather } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Canvas, LinearGradient, RoundedRect, Shadow, vec } from "@shopify/react-native-skia";
import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import BackgroundGradient from "@/components/BackgroundGradient";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";

export default function WeatherList() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { width, height } = useApplicationDimensions();
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
        {/* Searchbar */}
        <View style={{ marginHorizontal: 16, borderRadius: 10, height: 36 }}>
          <Canvas style={{ ...StyleSheet.absoluteFillObject }}>
            <RoundedRect x={0} y={0} width={width - 32} height={36} r={10}>
              <LinearGradient
                start={vec(0, 0)}
                end={vec(width - 32, 36)}
                colors={["rgba(46,51,90,0.26)", "rgba(28,27,51, 0.26)"]}
              />
              <Shadow dx={0} dy={4} blur={4} color="rgba(0,0,0,1)" inner />
            </RoundedRect>
          </Canvas>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 8,
            }}>
            <Feather name="search" size={17} color="rgba(235,235,246,0.6)" />
            <TextInput
              placeholder="Search for a city or airport"
              placeholderTextColor="rgba(235,235,246,0.6)"
              style={styles.searchInput}
            />
          </View>
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
  searchInput: {
    color: "rgba(235,235,246,0.5)",
    fontFamily: "SF-Regular",
    fontSize: 17,
    // lineHeight: 22,
    paddingLeft: 10,
  },
});

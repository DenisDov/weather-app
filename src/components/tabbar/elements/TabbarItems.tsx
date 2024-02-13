import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, View, StyleSheet } from "react-native";

import CircleButton from "./CircleButton";
import TrapezoidBackground from "./TrapezoidBackground";
import ListIcon from "../icons/ListIcon";
import MapIcon from "../icons/MapIcon";

import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import { eventEmitter } from "@/lib/EventEmitter";

export default function TabbarItems() {
  const { width, height } = useApplicationDimensions();
  const trapezoidWidth = width * 0.709;
  const trapezoidHeight = height * 0.123;
  const circleRadius = Math.round((trapezoidHeight * 0.48) / 2);
  const buttonCenterX = width / 2 - circleRadius;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 32,
      }}>
      <Pressable onPress={() => eventEmitter.emit("locationEvent")}>
        <MapIcon />
      </Pressable>

      <TrapezoidBackground width={trapezoidWidth} height={trapezoidHeight} />
      <Pressable
        style={{
          ...StyleSheet.absoluteFillObject,
          left: buttonCenterX,
          top: 12,
          width: circleRadius * 2,
          height: circleRadius * 2,
        }}>
        {({ pressed }) => <CircleButton radius={circleRadius} pressed={pressed} />}
      </Pressable>
      <Pressable onPress={() => navigation.navigate("list")}>
        <ListIcon />
      </Pressable>
    </View>
  );
}

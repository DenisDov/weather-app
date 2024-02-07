import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeBackground from "@/components/HomeBackground";
import WeatherInfo from "@/components/section/WeatherInfo";
import ForecastSheet from "@/components/sheet/ForecastSheet";
import WeatherTabBar from "@/components/tabbar/WeatherTabBar";
import { currentWeather } from "@/lib/data/CurrentWeather";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "SF-Thin": require("@/assets/fonts/SF-Pro-Display-Thin.otf"),
    "SF-Regular": require("@/assets/fonts/SF-Pro-Display-Regular.otf"),
    "SF-Semibold": require("@/assets/fonts/SF-Pro-Display-Semibold.otf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="light" />
        <HomeBackground />
        <WeatherInfo weather={currentWeather} />
        <ForecastSheet />
        <WeatherTabBar />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

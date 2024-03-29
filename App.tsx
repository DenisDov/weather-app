import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { WeatherDataProvider } from "@/context/WeatherDataContext";
import RootNavigator from "@/navigators/RootNavigator";

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
        <WeatherDataProvider>
          <NavigationContainer theme={DarkTheme}>
            <RootNavigator />
          </NavigationContainer>
          <StatusBar style="light" />
        </WeatherDataProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

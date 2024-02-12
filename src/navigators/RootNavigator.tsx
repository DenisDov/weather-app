import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@/screens/Home";
import WeatherList from "@/screens/WeatherList";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="list" component={WeatherList} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}

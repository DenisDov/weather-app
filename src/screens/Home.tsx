import HomeBackground from "@/components/HomeBackground";
import WeatherInfo from "@/components/section/WeatherInfo";
import ForecastSheet from "@/components/sheet/ForecastSheet";
import WeatherTabBar from "@/components/tabbar/WeatherTabBar";
import { ForecastSheetProvider } from "@/context/ForecastSheetContext";
import { currentWeather } from "@/lib/data/CurrentWeather";

export default function Home() {
  return (
    <ForecastSheetProvider>
      <HomeBackground />
      <WeatherInfo weather={currentWeather} />
      <ForecastSheet />
      <WeatherTabBar />
    </ForecastSheetProvider>
  );
}

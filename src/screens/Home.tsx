import HomeBackground from "@/components/HomeBackground";
import WeatherInfo from "@/components/section/WeatherInfo";
import ForecastSheet from "@/components/sheet/ForecastSheet";
import WeatherTabBar from "@/components/tabbar/WeatherTabBar";
import { currentWeather } from "@/lib/data/CurrentWeather";

export default function Home() {
  return (
    <>
      <HomeBackground />
      <WeatherInfo weather={currentWeather} />
      <ForecastSheet />
      <WeatherTabBar />
    </>
  );
}

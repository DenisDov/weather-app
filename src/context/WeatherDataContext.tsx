import { ReactNode, createContext, useContext, useState } from "react";

import { WeatherData } from "../models/Weather";

import { currentWeather } from "@/lib/data/CurrentWeather";
import { hourly, weekly } from "@/lib/data/ForecastData";

interface WeatherDataProviderProps {
  children: ReactNode;
}
interface WeatherContextType {
  weatherData: WeatherData;
  setWeatherData: (data: WeatherData) => void;
}
const defaultWeatherData = {
  currentWeather,
  hourlyForecast: hourly,
  weeklyForecast: weekly,
};

export const WeatherDataContext = createContext<WeatherContextType>({
  weatherData: defaultWeatherData,
  setWeatherData: () => {},
});

export const WeatherDataProvider = ({ children }: WeatherDataProviderProps) => {
  const [weatherData, setWeatherData] = useState<WeatherData>(defaultWeatherData);
  return (
    <WeatherDataContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherDataContext.Provider>
  );
};
export const useWeatherData = (): WeatherContextType => {
  const context = useContext(WeatherDataContext);
  if (context === null) {
    throw new Error("useWeatherData must be used within a Weather Data Provider");
  }
  return context;
};

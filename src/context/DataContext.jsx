import { createContext, useState } from "react";

export let DataContext = createContext();

export function AppDataProvider({ children }) {
  const [showUnits, setShowUnits] = useState(false);
  const [units, setUnits] = useState("C");
  const [namePlace, setNamePlace] = useState("");
  const [searchName, setSearchName] = useState(() => {
    const cities = JSON.parse(localStorage.getItem("city")) || [];
    return cities.length > 0 ? cities[cities.length - 1] : "London";
  });
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [modeSwitch, setModeSwitch] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("city")) || [],
  );
  const [showCities, setShowCities] = useState(false);

  const selectedWeather = {
    date: weatherData?.daily?.time?.[selectedDay],
    Temp: weatherData?.daily?.temperature_2m?.[selectedDay],
    weatherCode: weatherData?.daily?.weather_code?.[selectedDay],
  };

  const selectedDate = weatherData?.daily?.time[selectedDay];

  // فیلتر کردن ساعات
  const hourlyIndices = weatherData?.hourly?.time
    ?.map((time, index) => {
      if (time.startsWith(selectedDate)) {
        return index;
      }
      return null;
    })
    .filter((index) => index !== null);

  const formatTemperature = (temp, unit) => {
    let TempUnitsC = Number(temp);
    let TempUnitsF = (TempUnitsC * 9) / 5 + 32;

    if (unit === "C") {
      return TempUnitsC;
    }

    return TempUnitsF.toFixed(1);
  };

  return (
    <DataContext.Provider
      value={{
        showUnits,
        setShowUnits,
        namePlace,
        setNamePlace,
        searchName,
        setSearchName,
        weatherData,
        setWeatherData,
        setLocationData,
        locationData,
        modeSwitch,
        setModeSwitch,
        selectedDay,
        setSelectedDay,
        selectedWeather,
        hourlyIndices,
        units,
        setUnits,
        formatTemperature,
        loading,
        setLoading,
        cities,
        setCities,
        showCities,
        setShowCities,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

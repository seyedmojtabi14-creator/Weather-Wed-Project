import { createContext, use, useState } from "react";

export let DataContext = createContext();

export function AppDataProvider({ children }) {
  const [showUnits, setShowUnits] = useState(false);
  const [units, setUnits] = useState("C");
  const [namePlace, setNamePlace] = useState("");
  const [searchName, setSearchName] = useState(() => {
    try {
      const values = JSON.parse(localStorage.getItem("city") || "[]");
      return Array.isArray(values) && values.length > 0
        ? values[values.length - 1]
        : "London";
    } catch {
      return "London";
    }
  });
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [modeSwitch, setModeSwitch] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState(() => {
    return JSON.parse(localStorage.getItem("city") || "[]");
  });

  const selectedWeather = {
    date: weatherData?.daily?.time?.[selectedDay],
    Temp: weatherData?.daily?.temperature_2m?.[selectedDay],
    weatherCode: weatherData?.daily?.weather_code?.[selectedDay],
  };

  const selectedDate = weatherData?.daily?.time[selectedDay];

  // فیلتر کردن ساعات
  const hourlyIndices = weatherData?.hourly?.time
    ?.map((time, index) => {
      // اگر تاریخ این ساعت با تاریخ روز انتخاب شده یکی بود، ایندکس رو برگردون
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

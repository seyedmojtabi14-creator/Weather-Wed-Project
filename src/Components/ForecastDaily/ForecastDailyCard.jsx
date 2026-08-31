import { useContext } from "react";
import { DataContext } from "../DataContext";
import WeatherIcon from "../WeatherIcon";

export default function ForecastDailyCard({ index, data }) {
  const { weatherData, modeSwitch, formatTemperature, units } = useContext(DataContext);
  return (
    <div
      className={`flex min-h-[155px]  min-w-25 flex-col items-center justify-between rounded-xl ${modeSwitch ? "rounded-2xl border border-[#D8EBDD] bg-[#EEF6EF] p-5 shadow-sm" : "bg-[#292944]"} px-2 py-4`}
    >
      <p className="font-medium">
        {new Date(data).toLocaleDateString("en-US", {
          weekday: "short",
        })}
      </p>

      <WeatherIcon
        code={weatherData.daily.weather_code[index]}
        size={55}
        switch={modeSwitch}
        className={modeSwitch ? "drop-shadow-[0_0_2px_#1F5A32]" : ""}
      />

      <div className="flex w-full justify-between text-1xl font-bold">
        <span>{formatTemperature(weatherData.daily.temperature_2m_max[index],units)}°</span>

        <span className="text-gray-400 font-bold">
          {formatTemperature(weatherData.daily.temperature_2m_min[index],units)}°
        </span>
      </div>
    </div>
  );
}

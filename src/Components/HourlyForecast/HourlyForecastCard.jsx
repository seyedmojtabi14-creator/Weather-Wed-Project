import { useContext } from "react";
import { DataContext } from "../DataContext";
import WeatherIcon from "../WeatherIcon";

export default function HourlyForecastCard({ index }) {
  const { weatherData, modeSwitch, formatTemperature, units } = useContext(DataContext);

  const time = weatherData?.hourly?.time?.[index];
  const temperature = weatherData?.hourly?.temperature_2m?.[index];
  const weatherCode = weatherData?.hourly?.weather_code?.[index];

  return (
    <div
      className={`flex items-center justify-between rounded-xl border text-xl ${
        modeSwitch
          ? "rounded-2xl border-[#D8EBDD] bg-[#EEF6EF] p-5 shadow-sm"
          : "border-white/10 bg-[#34344f] p-5"
      }`}
    >
      <div className="flex items-center gap-4">
        <WeatherIcon
          code={weatherCode}
          size={45}
          className={modeSwitch ? "drop-shadow-[0_0_2px_#1F5A32]" : ""}
        />

        <span className="font-medium">
          {time &&
            new Date(time).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
        </span>
      </div>

      <span className="text-xl font-bold">{formatTemperature(temperature,units)}°</span>
    </div>
  );
}

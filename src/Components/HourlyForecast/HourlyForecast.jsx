import { useContext } from "react";
import HourlyForecastCard from "./HourlyForecastCard";
import SelectedDay from "./SelectedDay";
import { DataContext } from "../DataContext";


export default function HourlyForecast() {
  const { weatherData, modeSwitch, selectedDay } = useContext(DataContext);

  const getHourlyData = () => {
    if (!weatherData?.hourly?.time) return [];

    const selectedDate = weatherData.daily.time?.[selectedDay];
    const result = [];

    for (let i = 0; i < weatherData.hourly.time.length; i++) {
      if (weatherData.hourly.time[i].startsWith(selectedDate)) {
        result.push(i);
      }
    }
    return result;
  };

  const hourlyIndices = getHourlyData();
  return (
    <aside
      className={`rounded-2xl ${modeSwitch ? "rounded-3xl border border-[#C8DEC9] bg-[#E7F3E9] p-6 shadow-sm" : "bg-[#292944]"}  p-6`}
    >
      {/* <!-- Header --> */}

      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Hourly forecast</h3>

        <SelectedDay />
      </div>

      {/* <!-- Hourly Items --> */}

      <div
        className={`max-h-[560px] space-y-3 overflow-y-auto pr-2
    scrollbar-thin
    scrollbar-track-transparent
    ${
      modeSwitch
        ? "scrollbar-thumb-[#B8D6BE] hover:scrollbar-thumb-[#8FBF9A]"
        : "scrollbar-thumb-[#4A4A65] hover:scrollbar-thumb-[#666682]"
    }
  `}
      >
        {hourlyIndices.map((hourIndex) => (
          <HourlyForecastCard key={hourIndex} index={hourIndex} />
        ))}
      </div>
    </aside>
  );
}

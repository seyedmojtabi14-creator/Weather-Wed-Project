import { useContext } from "react";

import CurrentWeather from "./CurrentWeather/CurrentWeather";
import ForecastDetails from "./ForecastDaily/ForecastDaily";
import HourlyForecast from "./HourlyForecast/HourlyForecast";
import WeatherDetails from "./WeatherDetails/WeatherDetails";

import { helix } from "ldrs";
import { DataContext } from "../context/DataContext";
import { CloudOff } from "lucide-react";

helix.register();

export default function WeatherDashboard() {
  const { loading, modeSwitch, isValid } = useContext(DataContext);

  return (
    <div>
      {/* ================= MAIN CONTENT ================= */}
      <main className="mt-12 grid gap-6 lg:grid-cols-[1fr_368px]">
        {/* ================= LOADING ================= */}
        {loading ? (
          <div className="col-span-full flex h-[400px] w-full items-center justify-center">
            <l-helix
              size="45"
              speed="1.2"
              color={modeSwitch ? "#2F7D46" : "#40358F"}
              className="translate-y-4"
            />
          </div>
        ) : !isValid ? (
          /* ================= 404 ================= */
          <div
            className={
              modeSwitch
                ? "col-span-full flex min-h-[400px] items-center justify-center rounded-3xl bg-[#F4F8F3] px-6 text-[#17251B]"
                : "col-span-full flex min-h-[400px] items-center justify-center rounded-3xl  px-6 text-white"
            }
          >
            <div className="w-full max-w-lg text-center">
              {/* Icon */}
              <div
                className={
                  modeSwitch
                    ? "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#E7F3E9] text-[#2F7D46] shadow-sm"
                    : "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-white shadow-lg backdrop-blur-sm"
                }
              >
                <CloudOff
                  size={42}
                  strokeWidth={1.7}
                  className="animate-pulse"
                />
              </div>

              {/* 404 */}
              <h1
                className={
                  modeSwitch
                    ? "text-7xl font-black tracking-tight text-[#2F7D46]"
                    : "text-7xl font-black tracking-tight text-white"
                }
              >
                404
              </h1>

              {/* Title */}
              <h2
                className={
                  modeSwitch
                    ? "mt-3 text-2xl font-bold text-[#17251B]"
                    : "mt-3 text-2xl font-bold text-white"
                }
              >
                Weather not found
              </h2>

              {/* Description */}
              <p
                className={
                  modeSwitch
                    ? "mx-auto mt-3 max-w-md text-sm leading-6 text-[#17251B]/60"
                    : "mx-auto mt-3 max-w-md text-sm leading-6 text-white/70"
                }
              >
                We couldn't find the location you're looking for. Please check
                the city name and try again.
              </p>
            </div>
          </div>
        ) : (
          /* ================= WEATHER CONTENT ================= */
          <>
            {/* ================= LEFT SIDE ================= */}
            <div>
              {/* Current Weather */}
              <CurrentWeather />

              {/* Weather Details */}
              <WeatherDetails />

              {/* Daily Forecast */}
              <ForecastDetails />
            </div>

            {/* ================= HOURLY FORECAST ================= */}
            <HourlyForecast />
          </>
        )}
      </main>
    </div>
  );
}

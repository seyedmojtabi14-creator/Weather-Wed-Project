import { useContext } from "react";
import WeatherIcon from "../WeatherIcon";
import { DataContext } from "../../context/DataContext";

export default function CurrentWeather() {
  const {
    weatherData,
    locationData,
    searchName,
    modeSwitch,
    formatTemperature,
    units,
  } = useContext(DataContext);

  const time = weatherData?.current?.time;

  const dataTime = new Date(time);

  const formattedDate = dataTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section
      className={`relative h-[270px] overflow-hidden rounded-3xl ${modeSwitch ? "relative h-[270px] overflow-hidden rounded-3xl border border-[#C8DEC9] bg-gradient-to-br from-[#2F7D46] via-[#286B3C] to-[#1F5A32] p-7 shadow-sm" : "bg-gradient-to-br from-[#5146A8] via-[#40358F] to-[#2D255F] p-7"} `}
    >
      <div
        className={
          modeSwitch
            ? "absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-white/5"
            : "absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-white/5"
        }
      ></div>
      <div
        className={
          modeSwitch
            ? "absolute -bottom-36 -right-20 h-80 w-80 rounded-full bg-white/5"
            : "absolute -bottom-36 -right-20 h-80 w-80 rounded-full bg-white/5"
        }
      ></div>

      <div className=""></div>

      <span
        className={
          modeSwitch
            ? "absolute left-12 top-10 text-[#B9DDBF]/40"
            : "absolute left-12 top-10 text-blue-200/40"
        }
      >
        ✦
      </span>

      <span
        className={
          modeSwitch
            ? "absolute left-1/2 top-8 text-[#D8EBDD]/50"
            : "absolute left-1/2 top-8 text-orange-400"
        }
      >
        •
      </span>

      <span
        className={
          modeSwitch
            ? "absolute bottom-10 left-1/2 text-[#D8EBDD]/50"
            : "absolute bottom-10 left-1/2 text-orange-400"
        }
      >
        ✦
      </span>

      <span
        className={
          modeSwitch
            ? "absolute right-1/4 top-20 text-[#B9DDBF]/30"
            : "absolute right-1/4 top-20 text-blue-200/30"
        }
      >
        ✦
      </span>

      {/* <!-- Weather Information --> */}

      <div
        className={
          modeSwitch
            ? "relative z-10 flex h-full items-center justify-between"
            : "relative z-10 flex h-full items-center justify-between"
        }
      >
        {/* <!-- Location --> */}

        <div>
          <h3
            className={
              modeSwitch
                ? "text-2xl font-bold text-white md:text-3xl"
                : "text-2xl font-bold md:text-3xl"
            }
          >
            {locationData?.results?.[0]?.country === searchName
              ? searchName
              : `${locationData?.results?.[0]?.country} , ${searchName}`}
            {/* {locationData?.results?.[0]?.country} , {searchName} */}
          </h3>

          <p
            className={`mt-2 ${modeSwitch ? "text-[#D8EBDD]" : "text-gray-200"}`}
          >
            {formattedDate}
          </p>
        </div>

        {/* <!-- Temperature --> */}

        <div className="flex items-center gap-5">
          <WeatherIcon
            code={weatherData?.current?.weather_code}
            isDay={weatherData?.current?.is_day}
            size={100}
          />

          <div
            className={`text-7xl font-semibold ${modeSwitch && "text-white"}`}
          >
            {formatTemperature(weatherData?.current?.temperature_2m, units)}
            {units === "C" ? "°" : "°ᶠ"}
          </div>
        </div>
      </div>
    </section>
  );
}

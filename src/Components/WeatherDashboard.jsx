import { useContext } from "react";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import ForecastDetails from "./ForecastDaily/ForecastDaily";
import HourlyForecast from "./HourlyForecast/HourlyForecast";
import WeatherDetails from "./WeatherDetails/WeatherDetails";
import { helix } from "ldrs";
import { DataContext } from  "../context/DataContext";

helix.register();

export default function WeatherDashboard() {
  const { loading, modeSwitch } = useContext(DataContext);

  return (
    <div>
      {/* <!-- ================= MAIN CONTENT ================= --> */}
      <main className="mt-12 grid gap-6 lg:grid-cols-[1fr_368px]">
        {loading ? (
          <div className="fixed inset-0 flex items-center justify-center  ">
            <l-helix
              size="45"
              speed="1.2"
              color={modeSwitch ? "#2F7D46" : "#40358F"}
              className={"translate-y-4"}
            />
          </div>
        ) : (
          <>
            {/* <!-- ================= LEFT SIDE ================= --> */}

            <div>
              {/* <!-- ================= CURRENT WEATHER ================= --> */}

              <CurrentWeather />

              {/* <!-- ================= WEATHER DETAILS ================= --> */}

              <WeatherDetails />

              {/* <!-- ================= DAILY FORECAST ================= --> */}

              <ForecastDetails />
            </div>

            {/* <!-- ================= HOURLY FORECAST ================= --> */}

            <HourlyForecast />
          </>
        )}
      </main>
    </div>
  );
}

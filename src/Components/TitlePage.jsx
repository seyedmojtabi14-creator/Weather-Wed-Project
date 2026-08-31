import { useContext, useEffect } from "react";
import WeatherDashboard from "./WeatherDashboard";
import { DataContext } from "./DataContext";
import useFetch from "./useFetch";
import { MapPin } from "lucide-react";

export default function TitlePage() {
  let {
    namePlace,
    setNamePlace,
    searchName,
    setSearchName,
    setWeatherData,
    setLocationData,
    weatherData,
    locationData,
    modeSwitch,
    cities,
  } = useContext(DataContext);
  const { data, location } = useFetch(searchName);

  useEffect(() => {
    console.log(data);
    console.log(location);
  }, [data]);

  useEffect(() => {
    if (data && location) {
      setWeatherData(data);
      setLocationData(location);
    }
  }, [data, location]);

  return (
    <div>
      {/* <!-- ================= PAGE TITLE ================= --> */}

      <section className="mt-16 text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          How’s the sky looking today?
        </h2>

        {/* <!-- Search --> */}

        <div className="mx-auto mt-12 flex max-w-[630px] gap-4">
          <div className="relative flex-1">
            <MapPin
              size={21}
              strokeWidth={2}
              className={`absolute left-5 top-1/2 -translate-y-1/2 ${modeSwitch ? "text-black" : "text-gray-300"} `}
            />

            <input
              value={namePlace}
              onChange={(e) => setNamePlace(e.target.value)}
              type="text"
              placeholder="Search for a place..."
              className={
                modeSwitch
                  ? "h-14 w-full rounded-xl border border-[#D8EBDD] bg-white pl-14 pr-5 text-[#17251B] outline-none placeholder:text-[#6B7D6E] focus:ring-2 focus:ring-[#2F7D46]"
                  : "h-14 w-full rounded-xl bg-[#292944] pl-14 pr-5 text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-500"
              }
            />
            {cities.map((city, index) => {
              <button
                key={index}
                className="rounded-lg px-4 py-2 text-sm transition"
              >
                {city}
              </button>;
            })}
          </div>

          <button
            className={
              modeSwitch
                ? "h-14 rounded-xl bg-[#2F7D46] px-7 font-medium text-white shadow-sm transition hover:bg-[#1F5A32]"
                : "h-14 rounded-xl bg-[#4d5edb] px-7 font-medium transition hover:bg-[#5b6ce8]"
            }
            onClick={() => {
              namePlace.trim() && setSearchName(namePlace);

              if (namePlace.trim() !== "") {
                const values = JSON.parse(localStorage.getItem("city") || "[]");

                if (!values.includes(namePlace)) {
                  values.push(namePlace);

                  localStorage.setItem("city", JSON.stringify(values));
                }
              }
            }}
          >
            Search
          </button>
        </div>
      </section>

      {weatherData && locationData && <WeatherDashboard />}
    </div>
  );
}

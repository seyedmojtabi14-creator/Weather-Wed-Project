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
    showCities,
    setShowCities,
  } = useContext(DataContext);
  const { data, location } = useFetch(searchName);

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(namePlace.trim().toLowerCase()),
  );

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
              onFocus={() => setShowCities(true)}
              onBlur={() => setShowCities(false)}
              onChange={(e) => setNamePlace(e.target.value)}
              type="text"
              placeholder="Search for a place..."
              className={
                modeSwitch
                  ? "h-14 w-full rounded-xl border border-[#D8EBDD] bg-white pl-14 pr-5 text-[#17251B] outline-none placeholder:text-[#6B7D6E] focus:ring-2 focus:ring-[#2F7D46]"
                  : "h-14 w-full rounded-xl bg-[#292944] pl-14 pr-5 text-white outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-500"
              }
            />

            {showCities && filteredCities.length > 0 && (
              <div
                className={
                  modeSwitch
                    ? "absolute left-0 right-0 top-[62px] z-50 overflow-hidden rounded-xl border border-[#D8EBDD] bg-white shadow-lg"
                    : "absolute left-0 right-0 top-[62px] z-50 overflow-hidden rounded-xl bg-[#292944] shadow-lg"
                }
              >
                {filteredCities.map((city, index) => (
                  <div
                    key={index}
                    onMouseDown={() => {
                      setNamePlace(city);
                      setSearchName(city);
                      setShowCities(false);
                    }}
                    className={
                      modeSwitch
                        ? "text-1xl cursor-pointer px-5 py-3 text-[#17251B] hover:bg-[#E7F3E9]"
                        : "cursor-pointer px-5 py-3 text-white hover:bg-[#34344f]"
                    }
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div></div>

          <button
            className={
              modeSwitch
                ? "h-14 rounded-xl bg-[#2F7D46] px-7 font-medium text-white shadow-sm transition hover:bg-[#1F5A32]"
                : "h-14 rounded-xl bg-[#4d5edb] px-7 font-medium transition hover:bg-[#5b6ce8]"
            }
            onClick={() => {
              if (namePlace.trim()) {
                setSearchName(namePlace);

                const indexNamePlace = cities.indexOf(namePlace);

                if (indexNamePlace !== -1) {
                  cities.splice(indexNamePlace, 1);
                }

                if (cities.length > 4) {
                  cities.splice(0, 1);
                }

                cities.push(namePlace);

                localStorage.setItem("city", JSON.stringify(cities));

                setNamePlace("");
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

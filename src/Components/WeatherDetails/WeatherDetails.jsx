import { useContext } from "react";
import WeatherDetailsCard from "./WeatherDetailsCard";
import { DataContext } from "../../context/DataContext";

export default function WeatherDetails() {

   const {weatherData,formatTemperature,units} = useContext(DataContext);

  return (
    <section className="mt-7 grid grid-cols-2 gap-5 md:grid-cols-4">
      {/* <!-- Feels Like --> */}

      <WeatherDetailsCard 
      data={formatTemperature(weatherData.current.apparent_temperature,units)}
      title="Fless Like"
      unit="C°"
      />

      {/* <!-- Humidity --> */}

      <WeatherDetailsCard 
      data={weatherData.current.relative_humidity_2m}
      title="Humidity"
      unit="%"
      />

      {/* <!-- Wind --> */}

      <WeatherDetailsCard 
      data={weatherData.current.wind_speed_10m}
      title="Wind"
      unit="km/h"
      />

      {/* <!-- Precipitation --> */}

      <WeatherDetailsCard 
      data={weatherData.current.precipitation}
      title="Precipitation"
      unit="mm"
      />
    </section>
  );
}

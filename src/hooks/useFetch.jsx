import { useContext, useEffect, useState } from "react";
import { DataContext } from  "../context/DataContext";

export default function useFetch(namePlace) {
  const { setWeatherData, setLocationData } = useContext(DataContext);
  const { loading,  setLoading } = useContext(DataContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!namePlace) return;
    async function getLocation() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${namePlace}&count=1`,
        );

        const locationData = await response.json();

        setLocationData(locationData);

        console.log("NAME:", namePlace);
        console.log("LOCATION DATA:", locationData);
        console.log("RESULTS:", locationData.results);

        const latitude = locationData.results[0].latitude;
        const longitude = locationData.results[0].longitude;

        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation_probability,precipitation,rain,showers,snowfall,weather_code,cloud_cover,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m,uv_index&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,sunshine_duration,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,uv_index_max&timezone=auto&forecast_days=7`,
        );

        const weatherData = await weatherResponse.json();

        setWeatherData(weatherData);
        console.log(weatherData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getLocation();
  }, [namePlace]);

  return {
    loading,
    location,
    error,
  };
}

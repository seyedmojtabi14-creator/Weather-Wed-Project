import clearDay from "@meteocons/svg/flat/clear-day.svg";
import partlyCloudyDay from "@meteocons/svg/fill/partly-cloudy-day.svg";
import cloudy from "@meteocons/svg/fill/overcast.svg";
import fog from "@meteocons/svg/fill/fog-day.svg";
import rain from "@meteocons/svg/fill/rain.svg";
import snow from "@meteocons/svg/fill/snow.svg";
import thunderstorm from "@meteocons/svg/fill/thunderstorms-day-rain.svg";

export default function WeatherIcon({ code, size = 90, className = "" }) {
  let icon = cloudy;
  let alt = "Cloudy";

  if (code === 0) {
    icon = clearDay;
    alt = "Clear sky";
  } else if (code === 1 || code === 2) {
    icon = partlyCloudyDay;
    alt = "Partly cloudy";
  } else if (code === 3) {
    icon = cloudy;
    alt = "Cloudy";
  } else if (code === 45 || code === 48) {
    icon = fog;
    alt = "Fog";
  } else if (code >= 51 && code <= 67) {
    icon = rain;
    alt = "Rain";
  } else if (code >= 71 && code <= 77) {
    icon = snow;
    alt = "Snow";
  } else if (code >= 80 && code <= 82) {
    icon = rain;
    alt = "Rain showers";
  } else if (code >= 95) {
    icon = thunderstorm;
    alt = "Thunderstorm";
  }

  return (
    <img
      src={icon}
      alt={alt}
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
    />
  );
}

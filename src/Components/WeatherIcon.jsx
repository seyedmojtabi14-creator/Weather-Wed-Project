import clearDay from "@meteocons/svg/flat/clear-day.svg";
import clearNight from "@meteocons/svg/flat/clear-night.svg";

import partlyCloudyDay from "@meteocons/svg/fill/partly-cloudy-day.svg";
import partlyCloudyNight from "@meteocons/svg/fill/partly-cloudy-night.svg";

import cloudy from "@meteocons/svg/fill/overcast.svg";

import fogDay from "@meteocons/svg/fill/fog-day.svg";
import fogNight from "@meteocons/svg/fill/fog-night.svg";

import rain from "@meteocons/svg/fill/rain.svg";
import snow from "@meteocons/svg/fill/snow.svg";

import thunderstormDay from "@meteocons/svg/fill/thunderstorms-day-rain.svg";
import thunderstormNight from "@meteocons/svg/fill/thunderstorms-night-rain.svg";

export default function WeatherIcon({
  code,
  isDay = 1,
  size = 90,
  className = "",
}) {
  let icon = cloudy;
  let alt = "Cloudy";

  const day = Number(isDay) === 1;

  if (code === 0) {
    icon = day ? clearDay : clearNight;
    alt = day ? "Clear sky" : "Clear sky at night";
  } else if (code === 1 || code === 2) {
    icon = day ? partlyCloudyDay : partlyCloudyNight;
    alt = day ? "Partly cloudy" : "Partly cloudy at night";
  } else if (code === 3) {
    icon = cloudy;
    alt = "Overcast";
  } else if (code === 45 || code === 48) {
    icon = day ? fogDay : fogNight;
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
  } else if (code >= 95 && code <= 99) {
    icon = day ? thunderstormDay : thunderstormNight;
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
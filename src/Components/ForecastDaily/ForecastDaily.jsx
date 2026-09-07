import { useContext } from "react";
import ForecastDetailsCard from "./ForecastDailyCard";
import { DataContext } from "../../context/DataContext";


export default function ForecastDaily() {
  const { weatherData} = useContext(DataContext);

  return (
    <section className="mt-11">
      <h3 className="mb-5 text-lg font-semibold">Daily forecast</h3>

      {/* <!-- Forecast Cards --> */}

      <div className="grid grid-cols-4 gap-5 sm:grid-cols-7">

        {weatherData.daily.time.map((data, index) => {
          return (
           <ForecastDetailsCard key={index} index={index} data={data}/>
          );
        })}

      </div>
    </section>
  );
}

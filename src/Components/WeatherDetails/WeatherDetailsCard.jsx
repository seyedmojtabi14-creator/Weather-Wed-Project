import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function WeatherDetailsCard({data,title,unit}) {

  const {modeSwitch} = useContext(DataContext);

  return (
    <div className={`rounded-xl ${modeSwitch ? 'rounded-2xl border border-[#D8EBDD] bg-[#EEF6EF] p-5 shadow-sm' : 'rounded-xl bg-[#292944] p-5'}`}>
      <p className={`text-1xl font-light ${modeSwitch && ' text-stone-900 '}`}>{title}</p>

      <p className={`mt-5 text-3xl font-light ${modeSwitch && 'text-stone-900'}`}>{data} {unit}</p>
    </div>
  );
}

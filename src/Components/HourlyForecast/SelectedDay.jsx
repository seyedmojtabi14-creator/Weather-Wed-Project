import { useContext } from "react";
import { DataContext } from "../DataContext";


export default function SelectedDay() {
  const { weatherData, modeSwitch, selectedDay, setSelectedDay , } =
    useContext(DataContext);
    
  return (
    <select
      value={selectedDay}
      onChange={(e)=>setSelectedDay(Number(e.target.value))}
      className={`rounded-lg px-4 py-2.5 text-xl outline-none ${
        modeSwitch
          ? "border border-[#D8EBDD] bg-[#EEF6EF] text-[#17251B]"
          : "border border-white/10 bg-[#3a3a59] text-white"
      }`}
    >
      {weatherData?.daily?.time?.map((date,index) => (
        <option key={date} value={index}>
          {new Date(date).toLocaleDateString("en-US", {
            weekday: "long",
          })}
        </option>
      ))}
    </select>
  );
}

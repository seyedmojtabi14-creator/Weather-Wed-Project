import { useContext } from "react";
import TitlePage from "./TitlePage";
import { Sun, Moon } from "lucide-react";
import { DataContext } from  "../context/DataContext";

export default function Header() {
  let { showUnits, setShowUnits, modeSwitch, setModeSwitch, units, setUnits } =
    useContext(DataContext);

  return (
    <div>
      {/* <!-- ================= HEADER ================= --> */}

      <header className="flex items-center justify-between">
        {/* <!-- Logo --> */}

        <div className="flex items-center gap-3">
          <div className="text-4xl text-orange-400">☀</div>

          <h1 className="text-xl font-bold">Weather Now</h1>
        </div>

        {/* <!-- Units Button --> */}

        <div className="relative flex items-center gap-3">
          <button
            onClick={() => setModeSwitch(!modeSwitch)}
            className={` flex h-11 w-11 items-center justify-center rounded-lg transition ${
              modeSwitch
                ? " text-[#1F5A32] hover:bg-[#D8EBDD]"
                : " text-white hover:bg-[#343452]"
            }`}
            aria-label="Toggle theme"
          >
            {modeSwitch ? (
              <Moon className="h-7 w-7 animate-[spin_0.5s_ease-in-out]" />
            ) : (
              <Sun className="h-7 w-7 animate-[spin_0.5s_ease-in-out]" />
            )}
          </button>

          <button
            onClick={() => {
              setShowUnits(!showUnits);
            }}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
              modeSwitch
                ? "bg-[#E7F3E9] text-[#1F5A32] hover:bg-[#D8EBDD]"
                : "bg-[#292944] text-white hover:bg-[#343452]"
            }`}
          >
            <span>⚙</span>
            <span>Units</span>
            <span>⌄</span>
          </button>

          {showUnits && (
            <div
              className={`absolute right-0 top-full z-50 mt-2 flex items-center gap-4 rounded-xl border p-3 shadow-lg ${
                modeSwitch
                  ? "border-[#D8EBDD] bg-white"
                  : "border-white/10 bg-[#292944]"
              }`}
            >
              <span
                className={`text-sm font-medium ${
                  modeSwitch ? "text-[#17251B]" : "text-white"
                }`}
              >
                Units
              </span>

              <select
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                className={`rounded-md px-3 py-2 text-sm outline-none ${
                  modeSwitch
                    ? "bg-[#EEF6EF] text-[#17251B] border border-[#D8EBDD]"
                    : "bg-[#3a3a59] text-white"
                }`}
              >
                <option value="C">C°</option>
                <option value="F">F°</option>
              </select>
            </div>
          )}
        </div>
      </header>

      <TitlePage />
    </div>
  );
}

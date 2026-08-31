import { useContext } from "react";
import "./App.css";
import { DataContext } from "./Components/DataContext";
import Header from "./Components/Header";

function App() {
  const { modeSwitch } = useContext(DataContext);

  return (
    <div
      className={`fixed inset-0 w-full h-full overflow-auto   ${
        modeSwitch ? "bg-[#F4F8F3] text-[#17251B]" : "bg-[#020024] text-white"
      }`}
    >
      <div className="mx-auto max-w-[1160px] px-6 py-8">
        <Header />
      </div>
    </div>
  );
}

export default App;

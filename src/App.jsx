import { useContext, useEffect } from "react";
import "./App.css";
import { DataContext } from "./context/DataContext";
import Header from "./Components/Header";
import TitlePage from "./Components/TitlePage";

function App() {

  useEffect(() => {
    const hour = new Date().getHours();
    
    if(hour >= 6 && hour < 18){
      setModeSwitch(true)
    }else{
      setModeSwitch(false)
    }

  },[])

  const { modeSwitch , setModeSwitch } = useContext(DataContext);

  return (
    <div
      className={`fixed inset-0 w-full h-full overflow-auto   ${
        modeSwitch ? "bg-[#F4F8F3] text-[#17251B]" : "bg-[#020024] text-white"
      }`}
    >
      <div className="mx-auto max-w-[1160px] px-6 py-8 ">
        <div className="">
          <Header />
        </div>
        
        <TitlePage />

      </div>
    </div>
  );
}

export default App;

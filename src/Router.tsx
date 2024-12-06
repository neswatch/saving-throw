import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import { useEffect } from "react";
import Minijeu from "./pages/count/Minijeu/Minijeu.tsx";
import Temperature from "./pages/temperature/Temperature.tsx";
import Poumon from "./pages/play/poumon.tsx";

export default function Router() {
  useEffect(() => {
    document.title = "Saving throw";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/mj"} element={<Minijeu />} />
        <Route path={"/temperature"} element={<Temperature />} />
        <Route path={"/poumon"} element={<Poumon />} />
      </Routes>
    </BrowserRouter>
  );
}

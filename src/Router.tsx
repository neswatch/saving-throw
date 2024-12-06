import { BrowserRouter, Route, Routes } from "react-router-dom";
import Count from "./pages/count/Count.tsx";
import Minijeu from "./pages/count/Minijeu/Minijeu.tsx";
import Temperature from "./pages/temperature/Temperature.tsx";
import Poumon from "./pages/play/poumon.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Count />} />
        <Route path={"/mj"} element={<Minijeu />} />
        <Route path={"/temperature"} element={<Temperature />} />
        <Route path={"/poumon"} element={<Poumon />} />
      </Routes>
    </BrowserRouter>
  );
}

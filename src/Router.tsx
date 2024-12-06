import { BrowserRouter, Route, Routes } from "react-router-dom";
import Count from "./pages/count/Count.tsx";
import Minijeu from "./pages/count/Minijeu/Minijeu.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Count />} />
        <Route path={"/mj"} element={<Minijeu />} />
      </Routes>
    </BrowserRouter>
  );
}

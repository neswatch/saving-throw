import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import {useEffect} from "react";
import Poumon from "./pages/play/poumon.tsx";
import Temperature from "./pages/temperature/Temperature.tsx";

export default function Router() {

    useEffect(() => {
        document.title = "Saving throw"
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>} />
                <Route path={"/poumon"} element={<Poumon/>} />
                <Route path={"/temperature"} element={<Temperature/>} />
            </Routes>
        </BrowserRouter>
    )
}
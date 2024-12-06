import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import {useEffect} from "react";
import Poumon from "./pages/play/poumon.tsx";

export default function Router() {

    useEffect(() => {
        document.title = "Saving throw"
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>} />
                <Route path={"/poumon"} element={<Poumon/>} />
            </Routes>
        </BrowserRouter>
    )
}
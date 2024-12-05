import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import {useEffect} from "react";

export default function Router() {

    useEffect(() => {
        document.title = "Saving throw"
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Count from "./pages/count/Count.tsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Count/>} />
            </Routes>
        </BrowserRouter>
    )
}
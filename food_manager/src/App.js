import "./App.css";
import HomePage from "./components/HomePage";
import Restaurant from "./components/Restaurant";
import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header key="header"></Header>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/Restaurant" element={<Restaurant />}></Route>
            </Routes>
        </div>
    );
}

export default App;

import React from "react"
import { Routes, Route } from "react-router-dom"
// import Home from "./pages/Home";
import Home from "./components/home/Home"
// import Rentals from "./pages/Rentals";
import Rentals from "./components/rentals/Rentals"

import "./App.css"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rentals" element={<Rentals />} />
        </Routes>
    )
}

export default App

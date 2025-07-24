"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import MainBoard from "./components/MainBoard"
import Categories from "./components/Categories"
import "./App.css"

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true) // Start with light theme

  return (
    <div className={`App ${isLightTheme ? "light" : ""}`}>
      <Navbar isLightTheme={isLightTheme} />
      <MainBoard isLightTheme={isLightTheme} />
      <Categories isLightTheme={isLightTheme} />

      {/* Theme toggle button for testing */}
      <button className="theme-toggle" onClick={() => setIsLightTheme(!isLightTheme)}>
        {isLightTheme ? "🌙" : "☀️"}
      </button>
    </div>
  )
}

export default App

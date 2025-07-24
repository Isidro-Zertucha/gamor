"use client"

import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import MainBoard from "./components/MainBoard"
import Categories from "./components/Categories"
import "./App.css"
import "./themes.css"

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true) // Start with light theme

  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.add("light")
    } else {
      document.body.classList.remove("light")
    }
  }, [isLightTheme])

  return (
    <div className="App">
      <Navbar />
      <MainBoard />
      <Categories />

      {/* Theme toggle button for testing */}
      <button className="theme-toggle" onClick={() => setIsLightTheme(!isLightTheme)}>
        {isLightTheme ? "🌙" : "☀️"}
      </button>
    </div>
  )
}

export default App

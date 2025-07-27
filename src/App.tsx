"use client"

import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import MainBoard from "./components/MainBoard"
import Categories from "./components/Categories"
import "./App.css"
import "./themes.css"
import GamesPage from "./components/GamesPage"

function App() {
  const [isLightTheme, setIsLightTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "light" : true;
  });

  useEffect(() => {
    const theme = isLightTheme ? "light" : "dark";
    document.body.classList.toggle("light", isLightTheme);
    localStorage.setItem("theme", theme);
    window.dispatchEvent(new CustomEvent("theme-change", { detail: { theme } }));
  }, [isLightTheme]);

  return (
    <div className="App">
      <Navbar />
      <MainBoard />
      <Categories />
      <GamesPage/>

      {/* Theme toggle button for testing */}
      <button className="theme-toggle" onClick={() => setIsLightTheme(!isLightTheme)}>
        {isLightTheme ? "🌙" : "☀️"}
      </button>
    </div>
  )
}

export default App

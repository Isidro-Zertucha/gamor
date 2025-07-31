import { SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react";
import "./MainBoard.css"
import { useState, useEffect } from 'react';
import fortniteCharacter from '../assets/images/fortnite-character-1.png';
import fortniteCharacterDark from '../assets/images/fortnite-character-2.png';
import type { Team } from "../interfaces/types";

const MainBoard = () => {
  const [isLightTheme, setIsLightTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "light" : true;
  });

  useEffect(() => {
    const handleThemeChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ theme: string }>;
      setIsLightTheme(customEvent.detail.theme === "light");
    };

    window.addEventListener("theme-change", handleThemeChange);

    return () => {
      window.removeEventListener("theme-change", handleThemeChange);
    };
  }, []);
  const teams: Team[] = [
    {
      id: 1,
      players: [
        { id: 1, name: "Dr Team", avatar: "👨‍⚕️", status: "online", character: "fortnite-character-1.png", backgroundColor: "#ff6b6b" },
        { id: 2, name: "Mia Plays", avatar: "👩", status: "online", character: "fortnite-character-2.png", backgroundColor: "#4ecdc4" },
      ],
    },
    {
      id: 2,
      players: [
        { id: 3, name: "Keover", avatar: "👨", status: "online", character: "fortnite-character-3.png", backgroundColor: "#45b7d1" },
      ],
    },
    {
      id: 3,
      players: [
        { id: 4, name: "Nickmore", avatar: "🧑", status: "offline", character: "fortnite-character-4.png", backgroundColor: "#17848bff" },
        { id: 5, name: "Sarah", avatar: "👩‍🦰", status: "online", character: "fortnite-character-5.png", backgroundColor: "#ff9ff3" },
        { id: 6, name: "John", avatar: "👨‍🦱", status: "in-game", character: "fortnite-character-6.png", backgroundColor: "#74b9ff" },
      ],
    },
    {
      id: 4,
      players: [
        { id: 7, name: "Alex", avatar: "🧑‍🎤", status: "online", character: "fortnite-character-7.png", backgroundColor: "#fd79a8" },
        { id: 8, name: "Emily", avatar: "👩‍🎤", status: "offline", character: "fortnite-character-8.png", backgroundColor: "#18b420ff" },
        { id: 9, name: "Chris", avatar: "👨‍🎤", status: "in-game", character: "fortnite-character-9.png", backgroundColor: "#a29bfe" },
        { id: 10, name: "Jessica", avatar: "👩‍🦳", status: "online", character: "fortnite-character-10.png", backgroundColor: "#ffeaa7" },
      ],
    },
  ];

  return (
    <div className="mainboard">
      {/* Left Widget with Gray Background */}
      <div className="left-widget">
        <div className="hero-text">
          <div className="hero-text-container">
            <h1>
              start
              <br />
              <span className="streaming-text">streaming</span>
              <br />
              games
              <br />
              differently
            </h1>
            {/* Decorative shapes around the text */}
            <svg className="hero-decoration" width="400" height="300" viewBox="0 0 400 300">
              <path
                d="M50,150 Q100,100 150,150 T250,150"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.1"
              />
              <circle cx="300" cy="80" r="4" fill="currentColor" opacity="0.15" />
              <circle cx="320" cy="200" r="3" fill="currentColor" opacity="0.1" />
              <path d="M280,120 Q320,140 350,120" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.1" />
            </svg>
          </div>
          <p className="subtitle">
            gamor now has <span className="highlight">stream party</span> platform
          </p>
          <SignedOut>
            <div className="action-buttons">
              <SignUpButton>
                <button className="create-account-main">Create account</button>
              </SignUpButton>
              <SignInButton>
                <button className="sign-in-main">Sign in</button>
              </SignInButton>
            </div>
          </SignedOut>
        </div>
      </div>

      {/* Center Widget - Just the Fortnite Card */}
      <div className="center-widget">
        <div className="fortnite-card">
          <div className="card-header">
            <h2>Fortnite New Season</h2>
            <p>Join live stream</p>
          </div>
          <div className="timer-wrapper">
            <div className="timer">
              <span>11 : 45</span>
            </div>
            <button className="add-friend-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="17" y1="11" x2="23" y2="11"></line></svg>
            </button>
          </div>
          <div className="character-container">
            <img
              src={isLightTheme ? fortniteCharacter : fortniteCharacterDark}
              alt="Fortnite Character"
              className="character-image"
            />
          </div>
        </div>
      </div>

      {/* Right Widget with Gray Background */}
      <div className="right-widget">
        <div className="platform-section">
          <h3>
            <span className="step-number">01.</span> Choose Platform
          </h3>
          <div className="platform-tabs-container">
            <div className="platform-tabs">
              <button className="tab active">
                <span className="tab-emoji">🎉</span>
                Party
              </button>
              <button className="tab">Matches</button>
              <button className="tab">Streams</button>
            </div>
          </div>
        </div>

        <div className="game-section">
          <h3>
            <span className="step-number">02.</span> Searching Game
          </h3>
          <div className="game-content-container">
            <div className="game-info">
              <span className="game-name">COD Warzone</span>
              <span className="player-count"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sliders">
                <line x1="3" y1="8" x2="21" y2="8"></line>
                <circle cx="9" cy="8" r="3"></circle>
                <line x1="3" y1="16" x2="21" y2="16"></line>
                <circle cx="15" cy="16" r="3"></circle>
              </svg></span>
            </div>

            <div className="game-separator"></div>

            <div className="players-list">
              {teams.map((team, index) => (
                <div key={team.id} className="player-item">
                  <span className="player-number">{index + 1}</span>
                  <div className="player-avatars">
                    {team.players.map((player) => (
                      <div
                        key={player.id}
                        className={`avatar-circle ${player.status === "offline" ? "inactive" : ""}`}
                        style={{ backgroundColor: player.backgroundColor }}
                      >
                        <span className="avatar-initial">{player.avatar}</span>
                      </div>
                    ))}
                  </div>
                  <span className="player-name">{team.players.map(p => p.name).join(", ")}</span>
                  <button className="add-player">+</button>
                </div>
              ))}
            </div>

            <button className="search-now-btn">Search Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBoard
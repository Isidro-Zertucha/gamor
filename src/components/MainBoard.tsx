import "./MainBoard.css"

const MainBoard = ({ isLightTheme }: { isLightTheme: boolean }) => {
  const players = [
    { id: 1, name: "Dr Team", avatar: "👨‍⚕️", status: "online" },
    { id: 2, name: "Mia Plays", avatar: "👩", status: "online" },
    { id: 3, name: "Keover", avatar: "👨", status: "online" },
    { id: 4, name: "Nickmore", avatar: "🧑", status: "offline" },
  ]

  return (
    <div className={`mainboard ${isLightTheme ? "light" : ""}`}>
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
          <div className="action-buttons">
            <button className="create-account-main">Create account</button>
            <button className="sign-in-main">Sign in</button>
          </div>
        </div>
      </div>

      {/* Center Widget - Just the Fortnite Card */}
      <div className="center-widget">
        <div className="fortnite-card">
          <div className="card-header">
            <h2>Fortnite New Season</h2>
            <p>Join live stream</p>
          </div>
          <div className="timer">
            <span>11 : 45</span>
          </div>
          <div className="character-container">
            <img
              src={isLightTheme ? "/fortnite-character-light.png" : "/fortnite-character.png"}
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
              <span className="player-count">25</span>
            </div>

            <div className="game-separator"></div>

            <div className="players-list">
              {players.map((player, index) => (
                <div key={player.id} className={`player-item ${player.status === "offline" ? "inactive" : ""}`}>
                  <span className="player-number">{index + 1}</span>
                  <div className="player-avatars">
                    <div
                      className={`avatar-circle ${player.status === "offline" ? "inactive" : ""}`}
                      style={{
                        backgroundColor:
                          index === 0 ? "#ff6b6b" : index === 1 ? "#4ecdc4" : index === 2 ? "#45b7d1" : "#95a5a6",
                      }}
                    >
                      <span className="avatar-initial">{player.name.charAt(0)}</span>
                    </div>
                    <div
                      className={`avatar-circle secondary ${player.status === "offline" ? "inactive" : ""}`}
                      style={{
                        backgroundColor:
                          index === 0 ? "#ff9ff3" : index === 1 ? "#74b9ff" : index === 2 ? "#fd79a8" : "#b2bec3",
                      }}
                    >
                      <span className="avatar-initial">{player.name.split(" ")[1]?.charAt(0) || "U"}</span>
                    </div>
                  </div>
                  <span className="player-name">{player.name}</span>
                  <button className={`add-player ${player.status === "offline" ? "inactive" : ""}`}>+</button>
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

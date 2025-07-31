
import React, { useState } from 'react';
import './FilterPopup.css';

const games = [
  { name: 'The Witcher 3: Wild Hunt', genre: 'RPG' },
  { name: 'Cyberpunk 2077', genre: 'RPG' },
  { name: 'Elden Ring', genre: 'RPG' },
  { name: 'Grand Theft Auto V', genre: 'Action' },
  { name: 'Red Dead Redemption 2', genre: 'Action' },
  { name: 'The Legend of Zelda: Breath of the Wild', genre: 'Adventure' },
  { name: 'Super Mario Odyssey', genre: 'Platformer' },
  { name: 'Celeste', genre: 'Platformer' },
  { name: 'Hades', genre: 'Roguelike' },
  { name: 'Stardew Valley', genre: 'Simulation' },
  { name: 'Animal Crossing: New Horizons', genre: 'Simulation' },
  { name: 'COD Warzone', genre: 'Shooter' },
  { name: 'Fortnite', genre: 'Shooter' },
  { name: 'Valorant', genre: 'Shooter' },
  { name: 'Overwatch 2', genre: 'Shooter' },
];

// Get unique genres and add an 'All' option
const genres = ['All Genres', ...new Set(games.map(game => game.genre))];

interface FilterPopupProps {
  onSelectGame: (gameName: string) => void;
  onClose: () => void;
}

const FilterPopup: React.FC<FilterPopupProps> = ({ onSelectGame, onClose }) => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const filteredGames = games.filter(game =>
    selectedGenre === 'All Genres' || game.genre === selectedGenre
  );

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <select
          className="filter-select"
          value={selectedGenre}
          onChange={e => setSelectedGenre(e.target.value)}
        >
          {genres.map(genre => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <ul className="games-list">
          {filteredGames.map(game => (
            <li key={game.name} onClick={() => onSelectGame(game.name)}>
              {game.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterPopup;

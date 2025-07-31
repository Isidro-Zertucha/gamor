
import type { Team, Player } from '../interfaces/types';

const randomNames = [
  'ShadowStrike', 'Nova', 'Blaze', 'Vortex', 'Serpent', 'Raptor', 'Ghost', 'Phoenix', 'Cyclone', 'Reaper', 'Specter', 'Warlock'
];

const randomAvatars = [
  '👩‍🚀', '👨‍🎤', '🥷', '🦸‍♀️', '🧛', '🧙‍♂️', '🧟', '🧞', '🧑‍🎨', '🧑‍✈️', '🧑‍🔬', '🧑‍💻'
];

const randomCharacters = [
  'fortnite-character-1.png', 'fortnite-character-2.png', 'fortnite-character-3.png', 'fortnite-character-4.png',
  'fortnite-character-5.png', 'fortnite-character-6.png', 'fortnite-character-7.png', 'fortnite-character-8.png',
  'fortnite-character-9.png', 'fortnite-character-10.png', 'fortnite-character-11.png', 'fortnite-character-12.png'
];

const getRandomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const generateRandomPlayer = (id: number): Player => ({
  id,
  name: getRandomItem(randomNames),
  avatar: getRandomItem(randomAvatars),
  status: Math.random() > 0.5 ? 'online' : 'offline',
  character: getRandomItem(randomCharacters),
  backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
});

export const generateRandomTeams = (count: number): Team[] => {
  const teams: Team[] = [];
  let playerId = 1;
  for (let i = 1; i <= count; i++) {
    const teamSize = Math.floor(Math.random() * 4) + 1; // Teams of 1 to 4
    const players: Player[] = [];
    for (let j = 0; j < teamSize; j++) {
      players.push(generateRandomPlayer(playerId++));
    }
    teams.push({ id: i, players });
  }
  return teams;
};

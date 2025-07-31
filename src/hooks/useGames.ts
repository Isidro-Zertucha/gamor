/*import { useState, useEffect, useCallback } from 'react';
import { getGenres, getGamesByGenre } from '../services/igdbService';
import type { Game, Genre } from '../interfaces/types';

export const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        setLoading(true);
        const genresData = await getGenres();
        setGenres(genresData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };
    fetchGenres();
  }, []);

  return { genres, loading, error };
};

export const useGamesByGenre = (genreSlug: string) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchGames = useCallback(async (slug: string) => {
    if (!slug) {
      setGames([]);
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const gamesData = await getGamesByGenre(slug);
      setGames(gamesData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error desconocido'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGames(genreSlug);
  }, [genreSlug, fetchGames]);

  return { games, loading, error };
};*/
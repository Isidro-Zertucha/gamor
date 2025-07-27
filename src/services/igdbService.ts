import type { Game, Genre } from '../interfaces/types';

const VITE_IGDB_CLIENT_ID = import.meta.env.VITE_IGDB_CLIENT_ID as string;
const VITE_TWITCH_CLIENT_SECRET = import.meta.env.VITE_TWITCH_CLIENT_SECRET as string;

const authUrl = 'https://id.twitch.tv/oauth2/token';
const igdbApiUrl = 'https://api.igdb.com/v4';

let accessToken: string | null = null;

const getAccessToken = async (): Promise<string> => {
  if (accessToken) {
    return accessToken;
  }
  const params = new URLSearchParams({
    client_id: VITE_IGDB_CLIENT_ID,
    client_secret: VITE_TWITCH_CLIENT_SECRET,
    grant_type: 'client_credentials',
  });
  const response = await fetch(`${authUrl}?${params.toString()}`, { method: 'POST' });
  if (!response.ok) {
    throw new Error(`Error de autenticación: ${response.statusText}`);
  }
  const data = await response.json();
  accessToken = data.access_token;
  return accessToken as string;
};

// Usamos un genérico <T> para que esta función pueda devolver cualquier tipo de dato
const apiFetch = async <T>(endpoint: string, body: string): Promise<T> => {
  const token = await getAccessToken();
  const headers = {
    'Client-ID': VITE_IGDB_CLIENT_ID,
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'text/plain',
  };
  const response = await fetch(igdbApiUrl + endpoint, {
    method: 'POST',
    headers,
    body,
  });
  if (!response.ok) {
    throw new Error(`Error en la petición a IGDB: ${response.statusText}`);
  }
  return response.json() as Promise<T>;
};

const processImageUrls = (data: Game[]): Game[] => {
  return data.map(item => {
    if (item.cover?.url) {
      item.cover.url = item.cover.url.replace('t_thumb', 't_cover_big');
    }
    return item;
  });
};

export const getGenres = async (): Promise<Genre[]> => {
  try {
    const data = await apiFetch<Genre[]>('/genres', 'fields name, slug; limit 500;');
    return data;
  } catch (error) {
    console.error('Error al obtener géneros:', error);
    return [];
  }
};

export const getGamesByGenre = async (genreSlug: string): Promise<Game[]> => {
  if (!genreSlug) return [];
  try {
    const query = `
      fields name, summary, cover.url, genres.name, aggregated_rating;
      where genres.slug = "${genreSlug}" & aggregated_rating != null;
      sort aggregated_rating desc;
      limit 20;
    `;
    const data = await apiFetch<Game[]>('/games', query);
    return processImageUrls(data);
  } catch (error) {
    console.error(`Error al obtener juegos para el género ${genreSlug}:`, error);
    return [];
  }
};
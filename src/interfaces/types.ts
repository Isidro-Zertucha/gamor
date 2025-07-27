export interface Cover {
  id: number;
  url: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  summary?: string;
  cover?: Cover;
  genres?: Genre[];
  aggregated_rating?: number;
}
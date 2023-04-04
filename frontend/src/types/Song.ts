export interface Song {
  id: string;
  acousticness: number;
  danceability: number;
  energy: number;
  instrumentalness: number;
  valence: number;
  title: string[];
  artist: string[];
  lyrics: string[];
  images: string;
  explicit: boolean;
  popularity: number;
  mood: string;
  version: number;
}

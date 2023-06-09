import axios from "axios";

export async function fetchSongs(
  searchText: string,
  page: number,
  size: number
) {
  const url = "http://localhost:8000/search";
  const params = {
    q: `${searchText}`,
    start: size * page,
    rows: size,
  };

  const response = await axios.get(url, {
    params: params,
  });

  return response.data;
}

export async function fetchWordCloud(searchText: string) {
  const url = "http://localhost:8000/wordcloud";
  const params = {
    q: `lyrics:${searchText}`,
  };

  const response = await axios.get(url, {
    params: params,
  });

  return response.data;
}

export async function fetchSongsByMood(
  searchText: string,
  page: number,
  size: number
) {
  const url = "http://localhost:8000/mood/list";
  const params = {
    q: searchText,
    start: size * page,
    rows: size,
  };

  const response = await axios.get(url, {
    params: params,
  });

  return response.data;
}

export async function fetchWordCloudByMood(searchText: string) {
  const url = "http://localhost:8000/wordcloud";
  const params = {
    q: `mood:${searchText}`,
  };

  const response = await axios.get(url, {
    params: params,
  });

  return response.data;
}
import axios from "axios";

export async function getMood(
  lyrics: string,
) {
  const url = "http://localhost:8000/mood";
  const params = {
    q: lyrics
  };

  const response = await axios.get(url, {
    params: params,
  });

  return response.data;
}

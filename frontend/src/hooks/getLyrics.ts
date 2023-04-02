import axios from "axios";

export async function getLyrics(
  id: string,
) {
  const url = "http://localhost:8000/lyrics";
  const params = {
    id: id
  };

  const response = await axios.get(url, {
    params: params,
  });

  return response.data.lyrics.split("\n");
}

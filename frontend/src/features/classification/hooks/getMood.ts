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


export function getMoodColor(mood:string) {
  switch (mood.toLowerCase()) {
      case "happy":
          return "text-green-500";
      case "sad":
          return "text-blue-500";
      case "angry":
          return "text-red-500";
      case "relaxed":
          return "text-yellow-500";
      default:
          return ""
  }
}

export function getMoodBackgroundColor(mood:string) {
  switch (mood.toLowerCase()) {
      case "happy":
          return "bg-green-500";
      case "sad":
          return "bg-blue-500";
      case "angry":
          return "bg-red-500";
      case "relaxed":
          return "bg-yellow-500";
      default:
          return ""
  }
}
import { useState, useEffect } from "react";
import { getMood } from "../hooks";
import Link from "next/link";

interface MoodLabelProps {
  lyrics: string;
}

function getMoodColor(mood:string) {
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

export function MoodLabel({ lyrics }: MoodLabelProps) {
  const [mood, setMood] = useState<string>("");

  useEffect(() => {
    getMood(lyrics)
      .catch(console.error)
      .then((resp) => {
        setMood(resp.mood);
      });
  }, [lyrics, mood]);

  return (
    <div className="container w-5/6 mx-auto my-4 text-center bg-neutral-50 py-4 rounded-lg">
      <h1 className="text-4xl font-semibold leading-none tracking-tight text-gray-700">
        Your search &quot;<span className="text-ellipsis">{lyrics}</span>&quot; has a mood of <Link href={`/mood/${mood}`}><span className={`font-bold ${getMoodColor(mood)}`}>{mood}</span></Link>
      </h1>
    </div>
  );
}

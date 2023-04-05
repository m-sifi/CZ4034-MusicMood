import { useState, useEffect } from "react";
import { getMood } from "../hooks";
import Link from "next/link";
import { useRouter } from "next/router";

interface SpellCheck {
  suggestion: string, word: string; freq: number 
}
interface MoodLabelProps {
  lyrics: string;
  spellCheck: SpellCheck;
}

function getMoodColor(mood: string) {
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
      return "";
  }
}

function autocorrectLyrics(lyrics: string, spellcheck: SpellCheck) {
  
  if(lyrics.includes(spellcheck.suggestion))
    return lyrics.replace(spellcheck.suggestion, spellcheck.word);

  return spellcheck.word;
}

export function MoodLabel({ lyrics, spellCheck }: MoodLabelProps) {
  const [mood, setMood] = useState<string>("");
  const router = useRouter();

  console.log(spellCheck)

  useEffect(() => {
    getMood(lyrics)
      .catch(console.error)
      .then((resp) => {

        setMood(resp.mood);
      });
  }, [lyrics, mood]);

  const corrected =autocorrectLyrics(lyrics, spellCheck);

  const onClick = (e : any) => {
    e.preventDefault()
    router.push({ pathname: "/", query: {"search": corrected}})
    router.reload();
  }

  return (
    <div className="container w-5/6 mx-auto my-4 text-center bg-neutral-50 py-4 rounded-lg">
      {Object.keys(spellCheck).length == 0 ? (
        <h1 className="text-4xl font-semibold leading-none tracking-tight text-gray-700">
          Your search &quot;<span className="text-ellipsis">{lyrics}</span>
          &quot; has a mood of{" "}
          <Link href={`/mood/${mood}`}>
            <span className={`font-bold ${getMoodColor(mood)}`}>{mood}</span>
          </Link>
        </h1>
      ) : (
        <h1 className="text-4xl font-semibold leading-none tracking-tight text-gray-700">
          Your search &quot;<span className="text-ellipsis">{lyrics}</span>
          &quot; yielded 0 results. <br/>Did you mean <Link href={{ pathname: "/", query: {"search": corrected}}}>&quot;{corrected}&quot;</Link>
          with {spellCheck.freq} results?
        </h1>
      )}
    </div>
  );
}

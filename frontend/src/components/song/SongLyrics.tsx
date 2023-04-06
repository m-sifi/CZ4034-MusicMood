import { createElement, useEffect, useState } from "react";
import { getLyrics } from "../../hooks";
import Highlighter from "react-highlight-words";

interface SongLyricsProps {
  id: string;
  searchText: string;
}

function Highlight(text: string) {
  return `<span class=\"text-yellow-500\>${text}</span>`;
}

export function SongLyrics({ id, searchText }: SongLyricsProps) {
  const [lyrics, setLyrics] = useState<string[]>([]);

  useEffect(() => {
    getLyrics(id)
      .catch(console.error)
      .then((resp) => {
        setLyrics(resp);
      });
  }, [id]);

  return (
    <div className="px-8 space-y-2">
      {lyrics.map((line, index) => {
        return (
            <p key={index}>
            <Highlighter
              highlightClassName="background-yellow-500"
              searchWords={[searchText]}
              autoEscape ={true}
              textToHighlight={line}
            />
          </p>
        );
      })}
    </div>
  );
}

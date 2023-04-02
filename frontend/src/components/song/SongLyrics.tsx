import { useEffect, useState } from "react";
import { getLyrics } from "../../hooks";

interface SongLyricsProps {
    id: string;
}

export function SongLyrics({id} : SongLyricsProps) {
    const [lyrics, setLyrics] = useState<string[]>([]);

    useEffect(() => {
      getLyrics(id)
        .catch(console.error)
        .then((resp) => {
            console.log(resp);
            setLyrics(resp);
        });
    }, []);

    return (
        <div className="px-8 space-y-2">
            { 
                lyrics.map((line, index) => {
                    return <p key={index}>{line}</p>
                })
            }
        </div>
    );
    
}
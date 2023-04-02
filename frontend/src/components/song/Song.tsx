import { motion } from "framer-motion";
import {SongInfo} from "./SongInfo";
import { Song } from "../../types/Song";
import { SongLyrics } from "./SongLyrics";

interface SongProps {
  song: Song;
}

export function Song({ song }: SongProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="flex flex-col overflow-y-auto p-4 align-middle bg-neutral-50 rounded-md"
    >
      <SongInfo song={song} />
      <div className="pl-4">
        <h2 className="text-lg font-semibold mb-4">Lyrics</h2>
        <SongLyrics id={song.id} /> 
      </div>
    </motion.div>
  );
}

export default Song;

import { motion } from "framer-motion";
import SongHeader from "./SongHeader";
import { Song } from "../interfaces/song";

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
      className="flex flex-col overflow-y-auto p-4 align-middle bg-gray-200 rounded-md"
    >
      <SongHeader song={song} />
      <div className="pl-4">
        <h2 className="text-lg font-semibold mb-4">Lyrics</h2>
        <p>{song.lyrics}</p>
      </div>
    </motion.div>
  );
}

export default Song;

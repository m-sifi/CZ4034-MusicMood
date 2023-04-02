import { motion } from "framer-motion";
import {Property} from "./Property";
import { Song } from "../../types/Song";

interface SongInfoProps {
  song: Song;
}

export function SongInfo({ song }: SongInfoProps) {
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
      className="w-full p-4 my-2 align-middle bg-neutral-100 rounded-md"
    >
      <div className="pl-4">
        <div className="flex flex-col justify-center items-center">
          <h5 className="text-4xl text-gray-900 font-semibold">{song.title}</h5>
          {/* <p className="text-2xl text-gray-600">Nurture</p> */}
          <p className="text-xl text-gray-600 font-light">{song.artist}</p>
        </div>
        <div className="w-full grid grid-cols-3 grid-rows-2">
          <Property
            property="Acousticness"
            value={song.acousticness * 100}
          />
          <Property
            property="Danceability"
            value={song.danceability * 100}
          />
          <Property property="Energy" value={song.energy * 100} />
          <Property
            property="Intrsumentalness"
            value={song.instrumentalness * 100}
          />
          <Property property="Valence" value={song.valence * 100} />
        </div>
      </div>
    </motion.div>
  );
}

export default SongInfo;

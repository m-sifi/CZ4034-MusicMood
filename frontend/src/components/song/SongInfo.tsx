import { motion } from "framer-motion";
import { Property } from "./Property";
import { Song } from "../../types/Song";
import { FaGuitar, FaBatteryThreeQuarters, FaMusic } from "react-icons/fa";
import { GiPartyFlags } from "react-icons/gi";
import { BiHappyBeaming } from "react-icons/bi";
import Image from "next/image";

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
        <div className="flex space-x-4">
          <Image src={song.images} width={300} height={300} alt={song.title} />
          <div className="flex flex-col justify-center items-center flex-1">
            <h5 className="text-4xl text-gray-900 font-semibold">
              {song.title}
            </h5>
            <p className="text-xl text-gray-600 font-light">{song.artist}</p>
            <div className="w-full grid grid-cols-3 grid-rows-2 pt-2">
              <Property
                icon={FaGuitar}
                property="Acousticness"
                value={song.acousticness * 100}
              />
              <Property
                icon={GiPartyFlags}
                property="Danceability"
                value={song.danceability * 100}
              />
              <Property
                icon={FaBatteryThreeQuarters}
                property="Energy"
                value={song.energy * 100}
              />
              <Property
                icon={FaMusic}
                property="Intrsumentalness"
                value={song.instrumentalness * 100}
              />
              <Property
                icon={BiHappyBeaming}
                property="Valence"
                value={song.valence * 100}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SongInfo;

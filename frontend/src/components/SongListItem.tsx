import { motion } from "framer-motion";

import { Song } from "../interfaces/song";

interface SongListItemProps {
  song: Song;
}

export function SongListItem({ song }: SongListItemProps) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="flex p-4 align-middle bg-gray-200 hover:bg-gray-300 rounded-md"
    >
      <div className="rounded-full bg-gray-600 my-auto w-[40px] h-[40px]">
        <img src={song.images}></img>
      </div>
      <div className="pl-4">
        <h5 className="text-lg text-gray-900 font-semibold">{song.title[0]}</h5>
        <p className="text-sm text-gray-600">{song.artist[0]}</p>
      </div>
    </motion.div>
  );
}

export default SongListItem;

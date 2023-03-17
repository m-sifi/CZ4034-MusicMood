import { motion } from "framer-motion";
import SongProperty from "./SongProperty";

export function SongHeader() {
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
      className="w-full p-4 align-middle bg-gray-200 rounded-md"
    >
      <div className="pl-4">
        <div className="flex flex-col justify-center items-center">
            <h5 className="text-4xl text-gray-900 font-semibold">Mirror</h5>
            <p className="text-2xl text-gray-600">Nurture</p>
            <p className="text-xl text-gray-600 font-light">Porter Robinson</p>
        </div>
        <div className="w-full grid grid-cols-3 grid-rows-2">
            <SongProperty property="Acousticness" value={86.2} />
            <SongProperty property="Danceability" value={86.2} />
            <SongProperty property="Energy" value={86.2} />
            <SongProperty property="Intrsumentalness" value={86.2} />
            <SongProperty property="Valence" value={86.2} />
        </div>
      </div>
    </motion.div>
  );
}

export default SongHeader;

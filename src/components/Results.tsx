import { AnimatePresence, motion } from "framer-motion";
import Song from "./Song";
import SongList from "./SongList";

interface ResultsProps {
  visible: boolean;
}

export function Results({ visible }: ResultsProps) {
  return (
    <AnimatePresence mode='popLayout'>
      {visible && (
        <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="grid grid-cols-search gap-4 overflow-y-auto self-stretch flex-1 my-4 p-4 mx-auto text-center bg-gray-100 rounded-lg"
        >
            <SongList />
            <Song />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Results;

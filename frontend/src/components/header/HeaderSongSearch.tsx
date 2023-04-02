import { AnimatePresence, motion } from "framer-motion";

interface HeaderSongProps {
    visible?: boolean;
  }

export function HeaderSong({ visible }: HeaderSongProps) {
  return (
    <AnimatePresence mode='popLayout'>
      {visible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <header className="container mx-auto my-4 text-center">
            <h1 className="text-4xl font-semibold leading-none tracking-tight text-gray-700">
              Search for lyrics of your song!
            </h1>
          </header>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default HeaderSong;
import { AnimatePresence, motion } from "framer-motion";

interface HeaderProps {
  visible?: boolean;
}

export function Header({ visible }: HeaderProps) {
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
          <header className="container mx-auto mt-32 text-center space-y-4">
            <h1 className="text-6xl font-extrabold leading-none tracking-tight text-gray-900">
              Mood Match
            </h1>
            <h2 className="text-4xl font-semibold leading-none tracking-tight text-gray-700">
              Discover mood of music using sentiment analysis based on lyrics
            </h2>
          </header>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Header;

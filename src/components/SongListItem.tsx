import { motion } from "framer-motion";

export function SongListItem() {
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
      <div className="rounded-full bg-gray-600 my-auto w-[40px] h-[40px]"></div>
      <div className="pl-4">
        <h5 className="text-lg text-gray-900 font-semibold">Title</h5>
        <p className="text-sm text-gray-600">Artist</p>
      </div>
    </motion.div>
  );
}

export default SongListItem;

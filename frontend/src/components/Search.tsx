import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconSearch } from "@tabler/icons-react";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function Search({ onChange, value }: SearchProps) {
  const [searchValue, setSearchValue] = useState(value);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="flex my-4 p-2 w-1/2 items-center bg-gray-100 rounded-lg"
      >
        <IconSearch color="gray" size={24}></IconSearch>
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          className="border-0 flex-1 bg-transparent text-gray-600 border-transparent focus:border-transparent focus:ring-0"
        />
        <button
          className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onChange(searchValue)}
        >
          Search
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export default Search;

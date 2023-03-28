import { AnimatePresence, motion } from "framer-motion";
import Song from "./Song";
import SongList from "./SongList";
import { useEffect, useState } from "react";
import axios from "axios";

interface ResultsProps {
  visible: boolean;
  searchText: string;
}

export function Results({ visible, searchText }: ResultsProps) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://127.0.0.1:8000/search";
      const params = {
        q: `lyrics:${searchText}`,
        rows: 10,
      };
      try {
        const response = await axios.get(url, {
          params: params,
        });
        setSongs(response.data.response.docs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchText]);

  return (
    <AnimatePresence mode="popLayout">
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
          <SongList songs={songs} />
          {songs.length > 0 && <Song song={songs[0]} />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Results;

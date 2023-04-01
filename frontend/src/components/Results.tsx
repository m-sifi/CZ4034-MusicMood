import { AnimatePresence, motion } from "framer-motion";
import { SongItem } from "./SongItem";
import { Song } from "../interfaces/song";
import SongList from "./SongList";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import SongListItem from "./SongListItem";

interface ResultsProps {
  visible: boolean;
  searchText: string;
  searchGenreText: string;
}

async function fetchSongs(searchGenreText: string, searchText: string, page: number, size: number) {
  const url = "http://127.0.0.1:8000/search";

  const genreSearch = (searchGenreText.toLowerCase() == 'all' || searchGenreText === '') ? `genres:*` : `genres:${searchGenreText}`;
  const lyricsSearch = (searchGenreText === '') ? `lyrics:*` : `lyrics:${searchText}`;

  let params  = {
      q: genreSearch,
      qf: lyricsSearch,
      start: size * page,
      rows: size,
  };

  const response = await axios.get(url, {
    params: params,
  });

  return response.data.response.docs;
}

export function Results({ visible, searchText, searchGenreText }: ResultsProps) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  const [selectedSong, setSelectedSong] = useState<Song>(null!);

  // useEffect(() => {
  //   fetchSongs(searchText, page, size)
  //     .catch(console.error)
  //     .then((resp) => {
  //       setSongs(resp);
  //     }
  // )}, []);

  const fetchMoreSongs = () => {
    fetchSongs(searchGenreText, searchText, page, size)
      .catch(console.error)
      .then((resp) => {
        setHasMore(resp.length > 0);
        setSongs([...songs, ...resp]);
        setPage(page + 1);
      });
  };

  function displaySong(song: Song) {
    setSelectedSong(song);
  }

  useEffect(() => {
    setSongs([]);
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
          <motion.div
            id="divSongList"
            className="p-2 overflow-x-hidden overflow-y-auto border-r-2"
          >
            <InfiniteScroll
              pageStart={0}
              loadMore={fetchMoreSongs}
              hasMore={hasMore}
              loader={<h3> Loading...</h3>}
              useWindow={false}
            >
              {songs.map((data, index) => (
                <SongListItem
                  key={`${data.id}_${index}`}
                  song={data}
                  displaySong={displaySong}
                />
              ))}
            </InfiniteScroll>
          </motion.div>
          {selectedSong && <SongItem song={selectedSong} />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Results;

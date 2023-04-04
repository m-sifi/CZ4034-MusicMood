import { motion } from "framer-motion";
import SearchItem from "./SearchItem";
import { Song as SelectedSong } from "@/components/song";
import { fetchSongs } from "../hooks";
import InfiniteScroll from "react-infinite-scroller";
import { useEffect, useState } from "react";
import { Song } from "@/components/song";

function SongItem(song: Song) {
  return (
    <li>
      <SearchItem song={song} />
    </li>
  );
}

interface SongListProps {
  searchText: string;
  page: number;
  size: number;
  visible: boolean;
}

export function SearchResult({
  searchText,
  page,
  size,
  visible,
}: SongListProps) {
  const [song, setSong] = useState<Song>(null);
  const [songs, setSongs] = useState<Song[]>([]);
  const [search, setSearchText] = useState(searchText);
  const [pageIndex, setPage] = useState(page);
  const [pageSize, setSize] = useState(size);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreSongs = () => {
    console.log(pageIndex, pageSize);
    fetchSongs(search, pageIndex, pageSize)
      .catch(console.error)
      .then((resp) => {
        console.log(resp);
        setHasMore(resp.length > 0);
        setSongs([...songs, ...resp]);
        setPage(pageIndex + 1);
      });
  };

  useEffect(() => {
    setSongs([]);
    setPage(0);
    fetchMoreSongs();
  }, [search, searchText]);

  return (
    <>
      {visible && (
        <motion.div className="grid grid-cols-search gap-3 w-screen h-[800px] p-8">
          <motion.div
            id="divSongList"
            className="p-2 overflow-x-hidden overflow-y-auto border-r-2 bg-neutral-50 rounded-md"
          >
            <InfiniteScroll
              pageStart={0}
              loadMore={fetchMoreSongs}
              hasMore={hasMore}
              loader={<h3> Loading...</h3>}
              useWindow={false}
              className="space-y-2"
            >
              {songs.map((data, index) => (
                <SearchItem
                  key={`${data.id}_${index}`}
                  song={data}
                  onClick={setSong}
                />
              ))}
            </InfiniteScroll>
          </motion.div>
          { song && <SelectedSong song={song} />}
        </motion.div>
      )}
    </>
  );
}

export default SearchResult;

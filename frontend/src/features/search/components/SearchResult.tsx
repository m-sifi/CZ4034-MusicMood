import { motion } from "framer-motion";
import SearchItem from "./SearchItem";
import { Song as SelectedSong } from "@/components/song";
import { fetchSongs, fetchWordCloud } from "../hooks";
import InfiniteScroll from "react-infinite-scroller";
import { useEffect, useState } from "react";
import { Song } from "@/components/song";
import { getMoodColor } from "@/features/classification";

interface SongListProps {
  searchText: string;
  page: number;
  size: number;
  visible: boolean;
  setSpellCheck: (val: { value: string; freq: number } | {}) => void;
  setWordcloudData: (val: { value: string; freq: number }[]) => void;
}

export function SearchResult({
  searchText,
  page,
  size,
  visible,
  setSpellCheck,
  setWordcloudData,
}: SongListProps) {
  const [song, setSong] = useState<Song>(null);
  const [songs, setSongs] = useState<Song[]>([]);
  const [pageIndex, setPage] = useState(page);
  const [pageSize, setSize] = useState(size);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreSongs = () => {
    console.log(searchText, pageIndex, pageSize);
    fetchSongs(searchText, pageIndex, pageSize)
      .catch(console.error)
      .then((resp) => {
        // no results; this is what should happen when we spellcheck
        console.log(resp);
        if (
          typeof resp === "object" &&
          resp !== null &&
          typeof resp.word == "string" &&
          typeof resp.freq === "number"
        ) {
          console.log(resp);
          setSpellCheck(resp);
          setHasMore(false);
          return;
        }
        setSpellCheck({});
        setHasMore(resp.docs.length > 0);
        setSongs([...songs, ...resp.docs]);
        setPage(pageIndex + 1);
      });
  };

  useEffect(() => {
    setSongs([]);
    setPage(0);
    fetchMoreSongs();
    fetchWordCloud(searchText)
      .catch(console.error)
      .then((resp) => {
        console.log(resp);
        resp = resp.filter((item: { value: string; freq: number }) => {
          return /[a-zA-Z]/.test(item.value);
        });
        setWordcloudData(resp);
      });
  }, [searchText]);

  return (
    <>
      {/* {wordcloudData.length > 0 && (
        <TagCloud minSize={12} maxSize={35} tags={wordcloudData} />
      )} */}
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
          {song && <SelectedSong song={song} />}
        </motion.div>
      )}
    </>
  );
}

export default SearchResult;

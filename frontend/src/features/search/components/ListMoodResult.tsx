import { motion } from "framer-motion";
import SearchItem from "./SearchItem";
import { Song as SelectedSong } from "@/components/song";
import {  fetchSongsByMood } from "../hooks";
import InfiniteScroll from "react-infinite-scroller";
import { useEffect, useState } from "react";
import { Song } from "@/components/song";
import { useRouter } from "next/router";
import { getMoodColor } from "@/features/classification";

interface ListMoodProps {
  page: number;
  size: number;
  visible: boolean;
}

export function ListMoodResult({ page, size, visible }: ListMoodProps) {

  const router = useRouter();
 

  const [song, setSong] = useState<Song>(null);
  const [songs, setSongs] = useState<Song[]>([]);
  const [pageIndex, setPage] = useState(page);
  const [pageSize, setSize] = useState(size);
  const [hasMore, setHasMore] = useState(true);
  const [count, setCount] = useState(0);
  const [currentMood, setMood] = useState("");

  const { mood } = router.query;

  const fetchMoreSongs = () => {
    console.log(mood, pageIndex, pageSize);
    if(mood) {
      fetchSongsByMood(mood, pageIndex, pageSize)
      .catch((e) => {
        console.error(e);
        setSongs([]);
      })
      .then((resp) => {
        console.log(resp);
        setCount(resp.numFound);
        setHasMore(resp.docs.length > 0);
        setSongs([...songs, ...resp.docs]);
        setPage(pageIndex + 1);
      });
    }
  };

  return (
    <>
      <h1 className="text-2xl w-full rounded-md p-2 bg-neutral-50 text-center font-semibold">Found {count} <span className={`font-bold ${getMoodColor(mood || "")}`}>{mood}</span> songs</h1>
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
          {song && <SelectedSong song={song} searchText={""}/>}
        </motion.div>
      )}
    </>
  );
}

export default ListMoodResult;

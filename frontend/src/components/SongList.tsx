import { motion } from "framer-motion";
import SongListItem from "./SongListItem";
import { Song } from "../interfaces/song";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function Song(song: Song) {
  return (
    <li>
      <SongListItem song={song} />
    </li>
  );
}

interface SongListProps {
  songs: Array<Song>;
}

export function SongList({ songs }: SongListProps) {
  const songList = [];

  for (var i = 0; i < songs.length; i++) {
    songList.push(Song(songs[i]));
  }

  return (
    <motion.div className="p-2 overflow-y-auto border-r-2">
      <ul className="space-y-2">{songList}</ul>
    </motion.div>
  );
}

export default SongList;

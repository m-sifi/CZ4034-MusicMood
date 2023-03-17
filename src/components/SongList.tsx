
import { motion } from "framer-motion"
import SongListItem from "./SongListItem";

function Song() {
    return <li><SongListItem /></li>
}

export function SongList() {

    const songList = [];

    for(var i = 0; i < 100; i++) {
        songList.push(Song());
    }

    return (
        <motion.div className="p-2 overflow-y-auto border-r-2">
            <ul className="space-y-2">
                {songList}
            </ul>
        </motion.div>
    );
}

export default SongList;
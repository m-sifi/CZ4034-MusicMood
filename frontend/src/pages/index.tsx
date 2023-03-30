import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { IconSearch } from "@tabler/icons-react";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Results from "@/components/Results";
import Search from "@/components/Search";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { Song } from "../interfaces/song";
import HeaderGenre from "@/components/HeaderGenreSearch";
import HeaderSong from "@/components/HeaderSongSearch";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [searchGenreText, setsearchGenreText] = useState("");

  function didSearch(): boolean {
    return searchText !== "";
  }
  function didSearchGenre(): boolean {
    return searchGenreText !== "";
  }

  function getSearchTerm(value: string) {
    setSearchText(value);
  }
  function getSearchGenreTerm(value: string) {
    setsearchGenreText(value);
  }

  return (
    <>
      <Head>
        <title>Information Retrieval Application</title>
        <meta
          name="description"
          content="Project made for CZ4034 Information Retrieval"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence mode="popLayout">
        <motion.div className={`h-screen bg-gradient-to-r from-positive to-negative ${styles.main}`}>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className={`overflow-hidden flex flex-col px-24 pb-4 justify-center items-center`}
          >
            <Header visible={!didSearch()}></Header>
          </motion.div>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className={`overflow-hidden flex flex-col py-auto px-24 pb-8 justify-center items-center`}
          >
            {!didSearchGenre() && <HeaderGenre visible={!didSearchGenre()} />}
            {didSearchGenre() && !didSearch() && <HeaderSong visible={!didSearch()} />}
            <Search active={!didSearchGenre() && !didSearch()} value={searchGenreText} onChange={(g) => getSearchGenreTerm(g)} />
            <Search active={didSearchGenre() && !didSearch()} value={searchText} onChange={(e) => getSearchTerm(e)} />

            {/*SHOWS RESULTS PAGE BASED ON SEARCH */}
            {didSearchGenre() && didSearch() && (
            <Results visible={didSearchGenre() && didSearch()} searchGenreText={searchGenreText} searchText={searchText} />
            )}
          </motion.div>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className={`overflow-hidden flex flex-col px-24 justify-bottom items-center bg-gradient-to-r from-positive to-negative ${styles.main}`}
            >
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

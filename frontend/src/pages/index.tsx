import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { IconSearch } from "@tabler/icons-react";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header/Header";
import { useState } from "react";
import {SearchInputField, SearchResult} from "@/features/search";
import { AnimatePresence, motion } from "framer-motion";
import { MoodLabel } from "@/features/classification";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  function didSearch(): boolean {
    return searchText !== "";
  }

  function getSearchTerm(value: string) {
    setSearchText(value);
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
        <motion.div className={`h-screen bg-gradient-to-r from-positive to-negative overflow-y-hidden ${styles.main}`}>
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
            className={`overflow-hidden max-h-5/6 flex flex-col px-24 justify-center items-center`}
          >
            <SearchInputField active={true} value={searchText} onChange={(e) => getSearchTerm(e)} />

            {didSearch() && (
              <MoodLabel lyrics={searchText} />
            )}

            {/*SHOWS RESULTS PAGE BASED ON SEARCH */}
            {didSearch() && (
              <SearchResult page={0} size={10} visible={didSearch()} searchText={searchText} />
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

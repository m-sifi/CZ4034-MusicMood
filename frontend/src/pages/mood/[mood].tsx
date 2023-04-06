import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { IconSearch } from "@tabler/icons-react";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header/Header";
import { useEffect, useState } from "react";
import { SearchInputField, SearchResult } from "@/features/search";
import { AnimatePresence, motion } from "framer-motion";
import { MoodLabel } from "@/features/classification";
import { useRouter } from "next/router";
import ListMoodResult from "@/features/search/components/ListMoodResult";
import { TagCloud } from "react-tagcloud";

export default function Mood() {
  const router = useRouter();
  const [background, setBackground] = useState(moodTransition(""));
  const [wordcloudData, setWordcloudData] = useState([]);
  const [mood, setMood] = useState("");

  function moodTransition(mood: string) {
    switch (mood.toLowerCase()) {
      case "happy":
        return "from-happy to-happy-alt";
      case "sad":
        return "from-sad to-sad-alt";
      case "angry":
        return "from-angry to-angry-alt";
      case "relaxed":
        return "from-relaxted to-relaxed-alt";
      default:
        return "from-positive to-negative";
    }
  }

  useEffect(() => {
    const { mood } = router.query;
    if(!mood ) return;

    if(mood) {
      setBackground(moodTransition(mood as string));
      setMood(mood as string);
    }

  }, [router.query])

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
        <motion.div
          className={`h-screen bg-gradient-to-r ${background} overflow-y-hidden ${styles.main}`}
        >
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
          ></motion.div>
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
            {/*SHOWS RESULTS PAGE BASED ON SEARCH */}
            {wordcloudData.length > 0 && (
                  <div className="bg-neutral-50 p-8 my-4 w-full rounded-md select-none">
                    <TagCloud
                      minSize={12}
                      maxSize={35}
                      tags={wordcloudData}
                      colorOptions={{
                        luminosity: "dark",
                        format: "rgba",
                        alpha: 0.8, // e.g. 'rgba(9, 1, 107, 0.5)',
                      }}
                    />
                  </div>
                )}
            <ListMoodResult page={0} size={10} visible={true} setWordcloudData={setWordcloudData}/>

          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

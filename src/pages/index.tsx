import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { IconSearch } from '@tabler/icons-react';
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header';
import { useState } from 'react';
import Results from '@/components/Results';
import Search from '@/components/Search';
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {

  const [searchText, setSearchText] = useState('');

  function didSearch(): boolean {
    return searchText !== '';
  }

  function getSearchTerm(value: string) {
    setSearchText(value);
  }

  return (
    <>
      <Head>
        <title>Information Retrieval Application</title>
        <meta name="description" content="Project made for CZ4034 Information Retrieval" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence mode='popLayout'>
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className={styles.main}>
            {/* <Header visible={!didSearch()}/> */}
            { !didSearch() && <Header visible={!didSearch()}/>}
            <Search value={searchText} onChange={e => getSearchTerm(e)}/>
            {/* { didSearch() && <Results />} */}
            { didSearch() && <Results visible={didSearch()} /> }
        </motion.div>
      </AnimatePresence>
    </>
  )
}

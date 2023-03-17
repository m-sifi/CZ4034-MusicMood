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
          <motion.div layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className={`overflow-hidden flex flex-col h-screen px-24 pb-4 justify-center items-center bg-gradient-to-r from-positive to-negative ${styles.main}`}>
            { !didSearch() && <Header visible={!didSearch()}/>}
            <Search value={searchText} onChange={e => getSearchTerm(e)}/>
            { didSearch() && <Results visible={didSearch()} /> }
        </motion.div>
      </AnimatePresence>
    </>
  )
}

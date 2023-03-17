import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { IconSearch } from '@tabler/icons-react';
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Information Retrieval Application</title>
        <meta name="description" content="Project made for CZ4034 Information Retrieval" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className='container mx-auto text-center'>
          <h1 className='text-6xl font-extrabold leading-none tracking-tight text-gray-900'>Information Retrieval Project</h1>
          <h2 className='text-4xl font-semibold leading-none tracking-tight text-gray-700'>Discover music using sentiment analysis based on mood</h2>
        </div>
        <div className='flex mt-8 p-2 w-1/2 items-center bg-gray-100 rounded-md'>
          <IconSearch color='gray' size={24}></IconSearch>
          <input type='text' className='border-0 flex-1 bg-transparent text-gray-600 border-transparent focus:border-transparent focus:ring-0'/>
        </div>
      </main>
    </>
  )
}

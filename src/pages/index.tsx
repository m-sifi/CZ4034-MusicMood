import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import styles from '@/components/styles/Home.module.css'

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
        <h1 className='text-3xl'>Hello World!</h1>
      </main>
    </>
  )
}

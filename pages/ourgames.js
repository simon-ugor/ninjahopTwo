import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ColdenDev - Our Games</title>
        <meta name="description" content="Games developed by ColdenDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Our Games
        </h1>

        <br/><br/><br/>

        <div className={styles.grid}>

        </div>
      </main>
    </div>
  )
}

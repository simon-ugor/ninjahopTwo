import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ColdenDev - Contact Us</title>
        <meta name="description" content="Contat ColdenDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact Us
        </h1>

        <br/><br/><br/>

        <div className={styles.grid}>
          <h2>For any questions or troubleshooting contact us at:</h2>
          <h2>coldenwebdev@gmail.com</h2>
        </div>
      </main>
    </div>
  )
}

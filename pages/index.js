import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NinjaHop</title>
        <meta name="description" content="Oficiálna stránka hry Ninja Hop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ninja Hop
        </h1>

        <br/><br/><br/>

        <div className={styles.grid}>

          <Link href="/aboutus">
            <div className={styles.card} style={{cursor: "pointer"}}>
              <h2>Stiahnuť</h2>
              <p>Stiahni si hru Ninja Hop a zapoj sa do súťaže.</p>
            </div>
          </Link>

          <Link href="/ourgames">
            <div className={styles.card} style={{cursor: "pointer"}}>
              <h2>Pravidlá</h2>
              <p>Prečítajte si pravidlá hry Ninja Hop a ako sa zapojiť.</p>
            </div>
          </Link>

          <Link href="/contactus">
            <div className={styles.card} style={{cursor: "pointer"}}>
              <h2>O nás</h2>
              <p>Bližšie informácie o nás a našej hre Ninja Hop.</p>
            </div>
          </Link>

          <Link href="/privacypolicy">
            <div className={styles.card} style={{cursor: "pointer"}}>
              <h2>Ochrana súkromia</h2>
              <p>Prečítajte si naše zásady ochrany osobných údajov.</p>
            </div>
          </Link>

        </div>
      </main>
    </div>
  )
}

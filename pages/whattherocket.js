import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ColdenDev - WhatTheRocket</title>
        <meta name="description" content="WhatTheRocket - mobile game developed by ColdenDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}

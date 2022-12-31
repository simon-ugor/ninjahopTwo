import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import redirect from 'nextjs-redirect'
import { useEffect } from 'react'

Home.getInitialProps = (ctx) => {
    let isMobileView = (ctx.req
        ? ctx.req.headers['user-agent']
        : navigator.userAgent).match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )

    let testMessage;

    let deviceInfo = ctx.req.headers['user-agent']
    // if this includes "iphone" - open AppStore
    // else if it includes "android" (or something like that) - open PlayStore
    // else it must be a computer - do something else
    
    if (deviceInfo.includes("Mac")) {
      testMessage = "ios"
    } else {
      testMessage = "android"
    }
    

    return {
        deviceInfo: deviceInfo,
        testMessage: testMessage
    }
  }

function Home({deviceInfo, testMessage}) {

  useEffect(() => {
    if(testMessage == "ios"){
      window.location.assign("https://apps.apple.com/sk/app/planets-dodge/id1616264143") 
    } else {
      window.location.assign("https://play.google.com/store/apps/details?id=com.coldendev.planetsdodge")
    }
    
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>ColdenDev - Planets Dodge</title>
        <meta name="description" content="Planets Dodge - mobile game developed by ColdenDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}

export default Home
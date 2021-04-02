import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Test from "./groomer/test";

export default () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Learn NextJS</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Learn NextJS</h1>
    </div>
  )
}

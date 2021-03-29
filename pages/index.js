import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Emoji from "a11y-react-emoji";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mikey's Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to mycargus.com!</h1>

        <p className={styles.description}>{"{Currently under construction}"}</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/presentations/placeholder">
              <a>
                <h3>Presentations &rarr;</h3>
                <p>View my public slide decks</p>
              </a>
            </Link>
          </div>

          <a
            href="https://about.me/michael.hargiss"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.card}
          >
            <h3>About &rarr;</h3>
            <p>All about yours truly</p>
          </a>

          <div className={styles.card}>
            <Link href="/code/placeholder" className={styles.card}>
              <a>
                <h3>Code &rarr;</h3>
                <p>
                  Check out projects I've worked on, including the code for this
                  website
                </p>
              </a>
            </Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Made with "<Emoji symbol="❤️" label="love" />" by Mikey Hargiss
      </footer>
    </div>
  );
}

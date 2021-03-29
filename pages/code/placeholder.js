import styles from "../../styles/Home.module.css";

export default function Placeholder() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a
            target="_blank"
            rel="noreferrer noopener"
            className={styles}
            href="https://github.com/mycargus"
          >
            Code
          </a>
        </h1>

        <p className={styles.description}>
          Click the link above to see my Github profile.
        </p>

        <p className={styles.description}>More coming soon!</p>
      </main>
    </div>
  );
}

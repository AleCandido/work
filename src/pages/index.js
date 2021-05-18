import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>work - Alessandro Candido</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Work</h1>

        <p className={styles.description}>Stuffs I do as a part of my job</p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3>Home &rarr;</h3>
            <p>Back to home-page</p>
          </a>

          <a href="/projects" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Have a look to my projects</p>
          </a>

          <a href="/cv" className={styles.card}>
            <h3>CV &rarr;</h3>
            <p>My curriculum</p>
          </a>

          <a href="https://github.com/alecandido" className={styles.card}>
            <h3>Profile &rarr;</h3>
            <p>My profile on GitHub</p>
          </a>
        </div>
      </main>
    </div>
  );
}

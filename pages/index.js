import Head from "next/head";
import Index from "../components/SetupAccounts/Index";
import styles from "../components/SetupAccounts/Setup.module.css";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Head>
        <title>Syntrum</title>
        <meta name="description" content="Created by Steven" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Index />
    </div>
  );
}

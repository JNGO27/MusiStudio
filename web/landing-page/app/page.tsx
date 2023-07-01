import Image from "next/image";

import MusiStudioLogo from "../public/icon.png";
import styles from "./page.module.css";

const Home = () => {
  return (
    <main className={styles.background}>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <div className={styles["background-card"]}>
        <Image
          className={styles["logo-image"]}
          src={MusiStudioLogo}
          width={150}
          height={150}
          alt="MusiStudio Logo"
        />
        <h1 className={styles["headline-text"]}>MusiStudio</h1>
      </div>
    </main>
  );
};

export default Home;

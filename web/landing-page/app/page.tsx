import Link from "next/link";
import Image from "next/image";

import { PRIVACY_POLICY_LINK, TERMS_AND_SERVICE_LINK } from "../constants";

import MusiStudioLogo from "../public/icon.png";
import styles from "./page.module.css";

const Home = () => {
  return (
    <>
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
      <footer>
        <h3>
          <Link href={PRIVACY_POLICY_LINK}>Privacy Policy</Link>
        </h3>
        <h3>
          <Link href={TERMS_AND_SERVICE_LINK}>Terms and Service</Link>
        </h3>
      </footer>
    </>
  );
};

export default Home;

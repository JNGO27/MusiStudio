import Link from "next/link";
import Image from "next/image";

import {
  GOOGLE_PLAY_LINK,
  PRIVACY_POLICY_LINK,
  TERMS_AND_SERVICE_LINK,
} from "../constants";

import MusiStudioLogo from "../public/icon.png";
import GooglePlay from "../public/google-play-badge.png";
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
        <div className={styles["content-container"]}>
          <div className={styles["background-card"]}>
            <h1 className={styles["headline-text"]}>MusiStudio</h1>
            <Image
              className={styles["logo-image"]}
              src={MusiStudioLogo}
              width={150}
              height={150}
              alt="MusiStudio Logo"
            />
            <Link href={GOOGLE_PLAY_LINK}>
              <Image
                className={styles["google-play"]}
                src={GooglePlay}
                alt="Google Play"
              />
            </Link>
          </div>
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

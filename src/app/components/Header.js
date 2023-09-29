import Image from "next/image";
import React from "react";
import Appbar from "./Appbar";
import styles from "../page.module.css";

const Header = () => {
  return (
    <div className={styles.description}>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>src/app/page.js</code>
      </p>
      <Appbar />
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
};

export default Header;

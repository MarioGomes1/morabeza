import Image from "next/image";
import styles from "./page.module.css";
import hero from "@/public/hero.jpg";
import Link from "next/link";
import { FaAnglesDown } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.backdrop}></div>
        <div className={styles.container}>
          <Image
            className={styles.image}
            sizes="(max-width:768px 100vw, 700px"
            src={hero}
            alt="changeme"
            fill
            // width={1300}
            // ﬁheight={1200}
          />
          <div className={styles.content}>
            <h1 className={styles.title}>MORA</h1>
            <h1 className={styles.title2}>Beza</h1>

            <Link href="#" className={styles.link}>
              <p className={styles.subtitle}>Orgulho Di Nôs Terra</p>
              <FaAnglesDown color="white" />
            </Link>
          </div>
        </div>
        <div>dfs</div>
      </section>
    </div>
  );
}

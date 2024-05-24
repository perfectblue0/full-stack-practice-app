import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

export default function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.unsplash.com/photo-1556911820-1238441ed1a7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.02.2023</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
          cupiditate eum ex maiores dolorem. Inventore architecto magnam
          asperiores delectus similique fuga officiis ea, ipsam repellendus
          veniam nisi corrupti culpa illo.
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
}

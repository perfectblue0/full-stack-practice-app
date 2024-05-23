import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>About Lorem</h2>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.description}>
            Facilis repellendus facere libero doloremque nam id atque.
            Obcaecati, assumenda quisquam? Maiores quam aperiam temporibus
            dolorem.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Years of experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/about.png"
            alt="About image"
            fill
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          priority
        ></Image>
      </div>
    </div>
  );
}

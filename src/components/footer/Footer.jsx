import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>webdev</div>
      <div className={styles.text}>
        Tutorial Recipes Agency © All rights reserved.
      </div>
    </div>
  );
}

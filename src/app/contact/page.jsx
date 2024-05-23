import styles from "./contact.module.css";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/contact.png" alt="" fill />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="First and Last name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

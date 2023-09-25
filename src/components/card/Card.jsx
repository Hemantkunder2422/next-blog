import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/p1.jpeg"
          alt=""
          width={350}
          height={350}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11:02:2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          dicta culpa sint ab porro fugiat voluptatem qui eligendi, perspiciatis
          fugit, soluta ipsam totam ad iusto possimus enim eos quis quos.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

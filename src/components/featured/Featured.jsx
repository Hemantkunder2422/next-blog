import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <strong> Hey, Hemant here! </strong>Discover my stories and creative
        videos ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            non!
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            velit eius earum voluptas quidem est ea corrupti, ipsa assumenda
            cupiditate, perferendis, consectetur suscipit dolorem? Dolorem!
          </p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

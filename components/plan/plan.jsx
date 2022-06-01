
import Image from "next/image";
import styles from "./plan.module.css";
import React from "react";

const Plan = () => {
  return (
    <section className={styles.plan}>
    <div className={styles.container}>
    <div className={styles.plan__text}>
    <h3>Планировочные решения </h3>
    <div className={styles.info__wrapper}>
      <p>
      Каждый покупатель может выбрать подходящую
 для себя планировку из представленных нами
 вариантов. Площадь квартир в доме - от 98 до
 220 кв. метров. В них достаточно простора как
 для большой семьи, так и одного человека.
 Благодаря малому количеству несущих стен
 появляется множество вариантов
 индивидуальной планировки. Квартиры могут
 быть похожи на просторный лофт или уютный
 дом многодетной семьи. Все зависит от
 предпочтений и вкусов жильца.
      </p>
    </div>
  </div>
  <div className={styles.plan__images}>
      <div className={styles.plan__img}>
      <Image 
      src="/plan1.png"
      alt="plan__img"
      width={310}
      height={360}
    />
      </div>
   
      <div className={styles.plan__img}>
      <Image 
      src="/plan2.png"
      alt="plan__img"
      width={310}
      height={360}
    />
  </div>
  <div className={styles.plan__img}>
      <Image 
      src="/plan3.png"
      alt="plan__img"
      width={310}
      height={360}
    />
    </div>
    <div className={styles.plan__img}>
      <Image 
      src="/plan4.png"
      alt="plan__img"
      width={310}
      height={360}
    />
    </div>
    </div>
    </div>
  </section>

    
  );
};

export default Plan;

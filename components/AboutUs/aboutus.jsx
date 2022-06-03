import Head from "next/head";
import Image from "next/image";
import styles from "./aboutus.module.css";
import React from "react";
import ok1 from '../../pages/static/about__us2.png'

const AboutUs = () => {
  return (
    <section id="AboutUs" className={styles.about__us} >
          <div className={styles.cont} style={{maxWidth:'1200px', margin:'0 auto'}}>
            <div className={styles.about__text} style={{display:'flex', justifyContent:'space-between', paddingTop:'100px'}}>
              <h3 className={styles.about__h3}>О нас </h3>
              <div className={styles.info__wrapper}>
                <p>
                  Клубный дом находится в южной части города, в самом
                  экологически чистом его районе, который в то же время оснащен
                  полноценной инфраструктурой. Жители будут иметь доступ к близ
                  находящимся развлекательным центрам, супермаркетам, духовным
                  учреждениям, лучшим школам города, а в радиусе 10 километров
                  находятся зеленые парки и другие нужные для комфортной жизни
                  удобства
                </p>
                <p>
                  Уникальная архитектура и дизайн по сей день считаются
                  характерными чертами клубных домов. Жильцам предоставляются
                  удобства, доступные только им: парковочные места,
                  благоустроенные дворы и продуманные коммуникации.
                </p>
                <p>
                  NAVAKET совмещает в себе уют малой резиденции и дух коммуны,
                  который так необходим для жизни и развития любой ячейки
                  общества. Будь это молодая пара или супруги с детьми, дом -
                  одна из основ счастливой семейной жизни.
                </p>
              </div>
            </div>
            <div className={styles.about__img}>
            <div className={styles.aboutimg}>
            <Image
                src="/About_us-left.jpg"
                alt="about_left"
                width={630}
                height={468}
              />
             </div>
             
             <div className={styles.aboutimg2}>
             <Image 
                src={ok1.src}
                alt="about_right"
                width={347}
                height={470}
              />
             </div>
            </div>
          </div>
        </section>
  );
};

export default AboutUs;

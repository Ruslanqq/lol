import Head from "next/head";
import Image from "next/image";
import styles from "./Project.module.css";
import React from "react";


const Project = () => {
  return (
    <section id="Project" className={styles.project}>
    <div className={styles.container}>
      <div className={styles.project__text}>
        <h3>Проект</h3>
        <div className={styles.project__wrapper}>
          <p className={styles.project__p}>
            Клубный дом обладает собственной инфраструктурой, что
            значительно улучшает и облегчает повседневные задачи важные
            современному человеку.
          </p>
          <div className={styles.hr}><hr/></div>
          <div className={styles.town__info}>
            <div className={styles.town__info_left}>
              <p className={styles.town__info_number}>4</p>
              <p className={styles.town__info_text}>
                надземных этажа в том числе мансардный
              </p>
            </div>
            <div className={styles.town__info_right}>
              <p className={styles.town__info_number}>24</p>
              <p className={styles.town__info_text}>
                квартиры с французскими балконами и панорамными окнами
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Project;

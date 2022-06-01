import Head from "next/head";
import Image from "next/image";
import styles from "./history.module.css";

import React from "react";

const History = () => {
  return (
        <section id="History" className={styles.history}>
          <div className={styles.container}>
            <div className={styles.history__content}>
              <h3 className={styles.history__title}>История</h3>
              <div className={styles.history__right}>
                <p className={styles.history__text}>
                  Великий Шелковый Путь - феномен, объединявший многообразие
                  культур и ценностей различных регионов Старого света <br/> Клубный
                  дом NAVAKET - первый в своем роде дом в Кыргызстане. Формат
                  клубных домов отсылает нас к тем самым фамильным жилищам с
                  длинной историей и воспоминаниями.
                </p>
                <Image
                  src="/history1.png"
                  alt="hero__img"
                  width={849}
                  height={468}
                />
                <div className={styles.history__right}>
                  <p className={styles.history__text}>
                    Навакет - один из ранних крупных городов Чуйской долины,
                    расположенных на Великом Шелковом Пути. Согласно
                    исследованиям, город был одной из главных точек на
                    легендарной торговой карте. Город был основан в VI веке и
                    почти сразу стал не только центром торговли, но и настоящим
                    “плавильным котлом” различных этносов и культур. Если другие
                    пункты Чанъань-Тянь-Шаньского Шелкового Пути были
                    стратегическими точками для торговцев, то у Навакета была
                    репутация открытого города, где каждый мог найти приют и
                    отдохнуть после долгих путешествий. Его стены повидали людей
                    с разными судьбами, вероисповеданиями и культурами.
                  </p>
                  <Image
                    src="/history2.png"
                    alt="hero__img"
                    width={849}
                    height={468}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default History;
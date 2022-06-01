import Head from "next/head";
import Image from "next/image";
import styles from "./Footer.module.css";
import React from "react";
import Link from 'next/link'
import Form from '../Form/Form'

const Header = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__left}>
          <Link href="/">
            <a>
              <div className={styles.footer_logo}>
                <Image
                  src="/Header_logo.svg"
                  alt="Logo"
                  width={143}
                  height={39}
                />
              </div>
            </a>
          </Link>

          <h4 className={styles.footer__title}>Оставить заявку</h4>
          <p className={styles.footer__text}>
            Менеджер свяжется в вами через пару минут для уточнения
            всех вопросов
          </p>
          <Form/>
        </div>
        <div className={styles.footer__middle}>
          <ul className={styles.footer_list}>
            <li className={styles.footer__item__link}>
              <Link href="/">
                <a className={styles.footer__item}>История</a>
              </Link>
            </li>
            <li className={styles.footer__item__link}>
              <Link href="/">
                <a className={styles.footer__item}>О нас</a>
              </Link>
            </li>
            <li className={styles.footer__item__link}>
              <Link href="/">
                <a className={styles.footer__item}>Проект</a>
              </Link>
            </li>

            <h4 className={styles.footer__contacts_title}>Контакты</h4>
            <ul className={styles.footer_contacts}>
              <li>
                <Link href="/">
                  <a className={styles.footer__location}>
                    Бизнес центр 79, <br /> офис 503, ул. Исанова 79
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className={styles.footer__number}>+996 777 39 77 77</a>
                </Link>
              </li>
            </ul>
          </ul>
        </div>
        <div className={styles.footer__right}>
          <ul className={styles.footer_right_list}>
            <li className={styles.footer_social}>
              <Link href="https://www.instagram.com/arius.kg/">
                <a className={styles.footer__item}>
                  <Image className={styles.footer__link}
                    src="/InstagramLogo.svg"
                    alt="Logo"
                    width={34}
                    height={34}
                  />
                  <p className={styles.social__text}>arius.kg</p>
                </a>
              </Link>
            </li>
            <li className={styles.footer_social}>
              <Link href="https://www.facebook.com/arius.kg/">
                <a className={styles.footer__item}>
                  <Image className={styles.footer__link}
                    src="/FacebookLogo.svg"
                    alt="Logo"
                    width={34}
                    height={34}
                  />
                  <p className={styles.social__text}>arius.kg</p>
                </a>
              </Link>
            </li>
            <li className={styles.footer_social}>
              <Link href="/">
                <a className={styles.footer__item}>
                  <Image className={styles.footer__link}
                    src="/Envelope.svg"
                    alt="Logo"
                    width={34}
                    height={34}
                  />
                  <p className={styles.social__text}>ariuskg@gmail.com</p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className={styles.footer__hr} />
    <div className={styles.container}>
      <div className={styles.footer__end}>
        <p>©Navaket 2022. Все права защищены</p>
        <Link href="/">
          <a className={styles.footer__item}>
            <span>Политика конфидициальности</span>
          </a>
        </Link>
      </div>
    </div>
  </footer>
  );
};

export default Header;


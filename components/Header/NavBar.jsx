import Image from "next/image";
import styles from "./NavBar.module.css";
import React from "react";
import Link from "next/link";
import Burger from "./Burger";
import RightNav from "./MiddleNav";
import ok from '../../pages/static/hero.png'
const Navbar = () => {
  return (
    <header className={styles.header} style={{   backgroundImage: `url(${ok.src})`}}>
            <div className={styles.bgh}>
            <nav className={styles.nav_container}>
                <Link href='/'>
                    <a>
                        <div className={styles.nav_logo}>
                            <Image
                                src='/Header_logo.svg'
                                alt='Logo'
                                width={143}
                                height={39}
                            />
                        </div>
                    </a>
                </Link>
                
                <Burger/>
                <div className={styles.header__right}>
                <p className={styles.header__text}>+996 777 39 77 77</p>
                    <Link href='#Form'>
                        <a className={styles.header__button}>
                           Оставить заявку
                        </a>
                    </Link>
                </div>
            </nav>
            </div>

            <div className={styles.hero__content}>
                <h1 className={styles.hero__h1}>Клубный дом</h1>
                <Image className={styles.hero__logo}
                src='/Hero__img.svg'
                alt='Logo'
                width={286}
                height={304}
                />
            </div>
        </header>
  );
};

export default Navbar;

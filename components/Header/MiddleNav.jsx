import React from 'react';
import styled from 'styled-components';
import Link from "next/link";
import styles from "./NavBar.module.css";

const Ul = styled.ul`
padding-bottom: 40px;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  
  li {
    font-family: 'Avenir Next Cyr';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #FFFFFF;
  }
 
  @media (max-width: 768px) {
    text-align: center;
    flex-flow: column nowrap;
    background: #3A1D00;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 4   0vh;
    width: 100%;
    padding-top: 2.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      font-family: 'Avenir Next Cyr';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
      color: #FFFFFF;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li> <a href="#History">История</a> </li>
      <li><a href="#AboutUs">О нас</a> </li>
      <li><a href="#Project">Проект</a> </li>
      <Link href=''>
        <a className={styles.header__button1}>
                           Оставить заявку
                        </a>
        </Link>
    </Ul>
  )
}

export default RightNav;
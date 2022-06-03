import Head from "next/head";
import React from "react";
import SimpleSlider from "../components/Slider/slider";
import History from "../components/history/history.jsx";
import Navbar from "../components/Header/NavBar";
import AboutUs from "../components/AboutUs/aboutus";
import Project from "../components/Project/project";
import Footer from "../components/Footer/Footer";
import Plan from "../components/plan/plan";
import Modal from "../components/Modal/modal";
import { init } from "emailjs-com";



export default function Home() {
  
  return (
    <>
        <Head/>
        <Navbar/>
        <History/>
        <AboutUs/>
        <Project/>
        <SimpleSlider/>
        <Plan/>
        <Footer/>
    </>
  );
}

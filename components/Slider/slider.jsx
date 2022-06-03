import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/dist/client/image";
import styles from "./slider.module.css";


export default class Responsive extends Component {
  render() {
    var settings = {
      swipe: false,
      arrows: false,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            swipe: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            swipe: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <div className={styles.container}>
        <Slider {...settings}>
          <div>
            <h4 className={styles.slick__h4}>Изысканный фасад</h4>
          <div className={styles.slick__wrapper}>
          <Image
                    src="/slider1.png"
                    alt="Logo"
                    width={307}
                    height={360}
                  />
          </div>
          </div>
          <div>
          <h4 className={styles.slick__h4}>Фитнес Зал</h4>
          <div className={styles.slick__wrapper}>
          <Image
                    src="/slider2.png"
                    alt="Logo"
                    width={307}
                    height={360}
                  />
          </div>
          </div>
          <div>
          <h4 className={styles.slick__h4}>Финская Баня</h4>
          <div className={styles.slick__wrapper}>
          <Image
                    src="/slider3.png"
                    alt="Logo"
                    width={307}
                    height={360}
                  />
          </div>
          </div>
          <div>
          <h4 className={styles.slick__h4}>Зона Отдыха</h4>
          <div className={styles.slick__wrapper}>
          <Image
                    src="/slider4.png"
                    alt="Logo"
                    width={307}
                    height={360}
                  />
          </div>
          </div>
          
          <div>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}
import * as React from 'react';
import Slider from 'react-slick';
import NextArrow from '../../../components/buttons/NextArrow';
import PrevArrow from '../../../components/buttons/PrevArrow';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Hero.module.scss";
import ButtonSecondary from '../../../components/buttons/ButtonSecondary';

const Hero = () => {
   const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      centerPadding: "0px",
      centerMode: true,
      nextArrow: <NextArrow mr={"-2.9rem"} />,
      prevArrow: <PrevArrow ml={"-3rem"} />,
   };
   return (
      <div>
         <Slider {...settings}>
            <div className={`${styles.slider_cover_wrapper} ${styles.cover_1}`}>
               <img src="/image/cover3.jpg" alt="cover" />
               <div className={styles.cover_text}>
                  <h1>Everything you <br /> need, on a
                     <span className={styles.red_text}> budget</span>
                  </h1>
                  <p>Buy More, Spend Less</p>
                  <span className={styles.discount}>Up to 50% off!</span>
                  <ButtonSecondary title={"Shop Now"}/>
               </div>
            </div>
            <div className={`${styles.slider_cover_wrapper} ${styles.cover_2}`}>
               <img src="/image/men-hoodie-mockup_89887-454.webp" alt="cover" />
               <div className={styles.cover_text}>
                  <h1>There is
                     <span className={styles.red_text}> Luxury</span>
                     <br /> in Simplicity
                  </h1>
                  <p>Fall In Love with the best Things in This Season</p>
                  <span className={styles.discount}>Up to 35% off!</span>
                  <ButtonSecondary title={"Shop Now"}/>
               </div>
            </div>
            <div className={`${styles.slider_cover_wrapper} ${styles.cover_3}`}>
               <img src="/image/women.jpg" alt="cover" />
               <div className={styles.cover_text}>
                  <h1>Winter
                     <span className={styles.red_text}> O'clock</span>
                  </h1>
                  <p>Your favorite products made affordable for you</p>
                  <span className={styles.discount}>Up to 25% off!</span>
                  <ButtonSecondary title={"Shop Now"}/>
               </div>
            </div>
         </Slider>
      </div>
   )
}

export default Hero
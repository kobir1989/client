import * as  React from 'react';
import Card from '../../../components/card/Card';
import CustomSkeleton from '../../../components/skeleton/CustomSkeleton';
import TextSkeleton from '../../../components/skeleton/TextSkeleton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from '../../../components/buttons/NextArrow';
import PrevArrow from '../../../components/buttons/PrevArrow';

const NewArrival = ({ apiData, isLoading }) => {
   const settings = {
      // dots: true,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      draggable: true,
      centerPadding: "0px",
      centerMode: true,
      nextArrow: <NextArrow mr={"-.5rem"}/>,
      prevArrow: <PrevArrow ml={"-03rem"}/>,
   };

   const cards = () => {
      return (
         apiData.map((item) => (
            <div key={item?._id}>
               <Card
                  img={item?.imageUrl}
                  title={item?.title}
                  description={item?.description}
                  price={item?.price}
               />
            </div>
         ))
      )
   }
   return (
      <div>
         <Slider {...settings}>
            {cards()}
         </Slider>
         {isLoading &&
            <div>
               <CustomSkeleton
                  variant={"rect"}
                  w={"85%"}
                  h={300}
               />
               <TextSkeleton w={"45%"} />
            </div>}
      </div>
   )
}

export default NewArrival
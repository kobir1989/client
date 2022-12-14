import * as  React from 'react';
import Card from '../../../components/card/Card';
import CustomSkeleton from '../../../components/skeleton/CustomSkeleton';
import TextSkeleton from '../../../components/skeleton/TextSkeleton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from '../../../components/buttons/NextArrow';
import PrevArrow from '../../../components/buttons/PrevArrow';
import { Box } from '@mui/material';
import { Context } from '../../../store/context';

const NewArrival = ({ apiData, isLoading }) => {
   const settings = {
      // dots: true,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      draggable: true,
      centerPadding: "0px",
      centerMode: true,
      nextArrow: <NextArrow mr={"-.5rem"} />,
      prevArrow: <PrevArrow ml={"-03rem"} />,
   };
   const ctx = React.useContext(Context);
   const addToCartHandler = (title, price, img, id) => {
      ctx.addItems({
         title,
         price,
         id,
         img,
         qntt: 1,
      })
   }
   console.log(ctx)
   const skletonArr = new Array(5).fill("empty")
   const cards = () => {
      return (
         apiData.map((item) => (
            <div key={item?._id}>
               <Card
                  img={item?.imageUrl}
                  title={item?.title}
                  description={item?.description}
                  price={item?.price}
                  id={item?._id}
                  addToCartHandler={addToCartHandler}
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
         <Box sx={{ display: "flex" }}>
            {isLoading && skletonArr.map((item, i) => (
               <Box key={i}>
                  <CustomSkeleton
                     variant={"rect"}
                     w={"85%"}
                     h={300}
                     row={1}
                  />
                  <TextSkeleton w={"85%"} row={1} />
               </Box>
            ))
            }
         </Box>
      </div>
   )
}

export default NewArrival
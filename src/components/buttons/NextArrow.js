import * as React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from "./styles/SliderBtn.module.scss"
const NextArrow = (props) => {
   const { className, style, onClick, mr } = props;
   return (
      <div style={
         {
            position: "absolute",
            top: "50%",
            right:mr
         }} onClick={onClick}>
         <button>
            <ArrowForwardIosIcon sx={{ fontSize: "2rem" }} />
         </button>
      </div>
   );
};



export default NextArrow
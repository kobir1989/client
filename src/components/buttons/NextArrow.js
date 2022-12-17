import * as React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from "./styles/SliderBtn.module.scss"
const NextArrow = (props) => {
   const { className, style, onClick } = props;
   return (
      <div className={styles.arrow_right} onClick={onClick}>
         <button>
            <ArrowForwardIosIcon sx={{ fontSize: "2rem" }} />
         </button>
      </div>
   );
};



export default NextArrow
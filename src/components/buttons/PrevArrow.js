import * as React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from "./styles/SliderBtn.module.scss"
const PrevArrow = (props) => {
   const { className, style, onClick } = props;
   return (
      <div className={styles.arrow_left} onClick={onClick}>
         <button>
            <ArrowBackIosNewIcon sx={{ fontSize: "2rem" }} />
         </button>
      </div>
   );
};

export default PrevArrow
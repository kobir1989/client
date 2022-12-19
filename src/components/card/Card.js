import * as React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styles from "./Card.module.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Card = ({ img, title, description, price, addToCartHandler, id }) => {
   return (
      <div className={styles.card_wrapper}>
         <div className={styles.card_img_wrapper}>
            <img src={img} alt="tshirt" />
            <span className={styles.card_heart_icon}>
               <FavoriteBorderIcon sx={{ color: "#FFF", fontSize: "2rem" }} />
            </span>
         </div>
         <div className={styles.card_text_wrapper}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p className={styles.price}>${price}.00</p>
         </div>
         <div className={styles.card_btn_wrapper}>
            <button className={styles.card_btn} onClick={() => { addToCartHandler(title, price, img, id) }}>
               <span>
                  Add
               </span>
               <span>
                  <AddShoppingCartIcon />
               </span>
            </button>
         </div>
      </div>
   )
}

export default Card
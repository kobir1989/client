import * as React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import styles from "./Card.module.scss";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Card = ({ img, title, description, price }) => {
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
                <button className={styles.card_btn}>
                    <span>
                        Add
                    </span>
                    <span>
                        <ShoppingBagIcon />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Card
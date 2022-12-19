import * as React from 'react';
import styles from "../styles/Sports.module.scss";
import ButtonWhite from '../../../components/buttons/ButtonWhite';

const Sports = () => {
    return (
        <div className={styles.sports_card}>
            <div className={styles.sports_card_img}>
                <img src="/image/gym-pants.webp" alt="" />
                <div className={styles.sports_card_text}>
                    <h3>Gym Pants</h3>
                     <ButtonWhite title={"shop now"}/>
                </div>
            </div>
            <div className={styles.sports_card_img}>
                <img src="/image/football.jpg" alt="" />
                <div className={styles.sports_card_text}>
                    <h3>Sports Jersey</h3>
                     <ButtonWhite title={"shop now"}/>
                </div>
            </div>
            <div className={styles.sports_card_img}>
                <img src="/image/mans-active.jpg" alt="" />
                <div className={styles.sports_card_text}>
                    <h3>Mens Activewear</h3>
                     <ButtonWhite title={"shop now"}/>
                </div>
            </div>
            <div className={styles.sports_card_img}>
                <img src="/image/women-active.jpg" alt="" />
                <div className={styles.sports_card_text}>
                    <h3>Womens Activewear</h3>
                    <ButtonWhite title={"shop now"}/>
                </div>
            </div>
        </div>
    )
}

export default Sports
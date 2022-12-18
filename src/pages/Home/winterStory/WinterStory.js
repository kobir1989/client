import * as React from 'react';
import styles from "../styles/WinterStory.module.scss";

const WinterStory = () => {
    return (
        <div className={styles.winter_img}>
            <div className={styles.details}>
                <h2>Winter Story</h2>
                <button>
                    Shop Winter Outerware
                </button>
            </div>
            <img src="/image/winter.jpg" alt="" />
        </div>
    )
}

export default WinterStory
import * as React from 'react';
import styles from "../styles/Collection.module.scss";
import ButtonWhite from '../../../components/buttons/ButtonWhite';

const Collection = () => {
   return (
      <div className={styles.collection_cards}>
         <div className={styles.collection_img}>
            <img src="/image/men.jpg" alt="" />
            <div className={styles.btn}><ButtonWhite title={"Men"} /></div>
         </div>
         <div className={styles.collection_img}>
            <img src="/image/girl.jpg" alt="" />
            <div className={styles.btn}><ButtonWhite title={"Women"} /></div>
         </div>
         <div className={styles.collection_img}>
            <img src="/image/kids.jpg" alt="" />
            <div className={styles.btn}><ButtonWhite title={"Kids"} /></div>
         </div>
      </div>
   )
}

export default Collection
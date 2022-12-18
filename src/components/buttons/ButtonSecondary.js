import * as React from 'react';
import styles from "./styles/ButtonSecondary.module.scss";

const ButtonSecondary = ({title}) => {
  return (
  <div className={styles.btn_secondery}>
     <button>{title}</button>
  </div>
  )
}

export default ButtonSecondary
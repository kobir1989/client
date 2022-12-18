import * as React from 'react';
import styles from "./styles/ButtonWhite.module.scss"

const ButtonWhite = ({ title }) => {
  return (
    <div className={styles.btn_white_bg}>
      <button>{title}</button>
    </div>
  )
}

export default ButtonWhite
import React from 'react';
import styles from "./styles/Button-main.module.scss"

const ButtonMain = (props) => {
  return (
    <div className={styles.button_main}>
        <button type='submit' style={{width: `${props.width}`}}>
        {props.children}
        </button>
    </div>
  )
}

export default ButtonMain
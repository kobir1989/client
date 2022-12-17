import React from 'react';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import styles from "./PageLayout.module.scss"
const PageLayout = (props) => {
   return (
      <>
         <Navbar />
         <main className={styles.main_container}>
            {props.children}
         </main>
         <Footer />
      </>
   )
}

export default PageLayout
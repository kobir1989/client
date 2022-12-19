import * as React from 'react';
import PageLayout from "../../components/pageLayout/PageLayout";
import { getRequest } from "../../helper/apiHelper";
import styles from "./styles/Home.module.scss";
import NewArrival from './newArrival/NewArrival';
import Hero from './hero/Hero';
import Collection from './collection/Collection';
import WinterStory from './winterStory/WinterStory';
import Sports from './sports/Sports';


const Home = () => {
   const [apiData, setApiData] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(false);
   const [isError, setIsError] = React.useState(false);

   React.useEffect(() => {
      getRequest("products", setIsLoading, setIsError, setApiData);
   }, [])

  
   return (
      <PageLayout>
         {isError && <p>Something went wrong</p>}
         <section className={styles.section_wrapper}>
            <Hero />
         </section>
         <section className={styles.section_wrapper}>
            <div className={styles.section_wrapper_title}>
               <h2>Latest Arrival</h2>
               <p>Our Latest Products to support you daily.</p>
            </div>
            <NewArrival
               apiData={apiData}
               isLoading={isLoading} />
         </section>
         <section className={styles.section_wrapper}>
            <div className={styles.section_wrapper_title}>
               <h2>Explore Collections</h2>
               <p>Looking For Exclusive Collections?</p>
            </div>
            <Collection />
         </section>
         <section className={styles.section_wrapper}>
            <WinterStory />
         </section>
         <section>
            <Sports />
         </section>
      </PageLayout>
   )
}

export default Home;


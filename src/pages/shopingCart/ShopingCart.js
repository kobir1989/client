import * as React from 'react';
import PageLayout from '../../components/pageLayout/PageLayout';
import { Context } from '../../store/context';
import styles from "./ShopingCart.module.scss";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { style } from '@mui/system';

const ShopingCart = () => {
   const cartCtx = React.useContext(Context)
   const addQntt = (item) => {
      cartCtx.addItems({
         title: item.title,
         price: item.price,
         id: item.id,
         img: item.img,
         qntt: 1,
      })
   }
   const removeQntt = (id) => {
      cartCtx.removeItem(id);

   }
   return (
      <PageLayout>
         <div className={styles.cart_items_wrapper}>
            {cartCtx?.items.map((item) => (
               <div key={item?.id} className={styles.cart_items}>
                  <div className={styles.cart_img}>
                     <img src={item?.img} alt="" />
                  </div>
                  <div className={styles.cart_text}>
                     <h2>{item?.title}</h2>
                     <h4>Price: ${item?.price}</h4>
                     <div className={styles.cart_qntt}>
                        <h4>Quentity: {item?.qntt}</h4>
                        <div className={styles.cart_btn}>
                           <button onClick={() => { addQntt(item) }}><AddIcon sx={{ color: "#116954" }} /></button>
                           <button onClick={() => { removeQntt(item?.id) }}><RemoveIcon sx={{ color: "#ff5a47" }} /></button>
                        </div>
                     </div>
                     <p>
                        Total Price: {item?.qntt} X {item?.price} = ${item?.qntt * item?.price}
                     </p>
                  </div>
               </div>
            ))}
            <div className={styles.cart_total_price}>
               <h2>Total Amount</h2>
               <h2>${cartCtx?.totalPrice.toFixed(2)}</h2>
            </div>
            <div className={styles.order_btn}>
               <button>Place Order</button>
            </div>
         </div>
      </PageLayout>

   )
}

export default ShopingCart
import * as React from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
import styles from "./Nav.module.scss"
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { isAuth, signOut } from "../../helper/authHelper";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Context } from "../../store/context";

const Navbar = () => {
   const navigate = useNavigate()
   const { userInfo } = isAuth()
   const ctx = React.useContext(Context);
   const logoutHandler = () => {
      signOut()
      navigate("/login")
   }
   return (
      <div className={styles.nav_Wrapper}>
         <nav className={styles.nav}>
            <Link to={"/"}>
               <div className={styles.nav_logo}>
                  <img src="/image/logo.png" alt="" />
                  <h4>Trendy Tees</h4>
               </div>
            </Link>
            <div className={styles.nav_search}>
               <div className={styles.nav_search_icon}><SearchIcon /></div>
               <form>
                  <input type="text" placeholder='Search' />
               </form>
            </div>
            <ul className={styles.nav_links_list}>

               {!isAuth() && (
                  <>
                     <Link to={"/login"}>
                        <li>Login <LoginIcon /></li>
                     </Link>
                     <Link to={"/signup"}>
                        <li>Signup <AppRegistrationIcon /></li>
                     </Link>
                  </>
               )}

               {userInfo?.role !== "ADMIN" &&
                  <>
                     <Link to={"/shoping-cart"}>
                        <li className={styles.cart}>
                           Shoping Cart
                           <span className={styles.count}>{ctx.items.length || 0}</span> <LocalMallIcon />
                        </li>
                     </Link>
                     <li className={styles.wishlist}>
                        Wishlist
                        <span className={styles.count} style={{ right: "-0.2rem" }}>0</span><FavoriteBorderIcon />
                     </li>
                  </>
               }

               {userInfo?.role === "USER" && (
                  <>
                     <Link to={"/profile"}>
                        <li>{userInfo?.name || "Account"} <Avatar sx={{ background: "#003532" }}>N</Avatar>
                        </li>
                     </Link>
                  </>
               )}

               {userInfo?.role === "ADMIN" && (
                  <Link to={"/admin"}>
                     <li>Admin <AdminPanelSettingsIcon /></li>
                  </Link>
               )}
               {isAuth() &&
                  <li onClick={logoutHandler}>
                     Logout <ExitToAppIcon />
                  </li>}
            </ul>
         </nav>
      </div>
   )
}

export default Navbar




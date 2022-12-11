import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./Nav.module.scss"
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className={styles.nav_Wrapper}>
      <nav className={styles.nav}>
        <div className={styles.nav_logo}>
          <img src="/image/logo.png" alt="" />
          <h4>Trendy Tees</h4>
        </div>
        <div className={styles.nav_search}>
          <div className={styles.nav_search_icon}><SearchIcon /></div>
          <form>
            <input type="text" placeholder='Search' />
          </form>
        </div>
        <ul className={styles.nav_links_list}>
          <li>Login <LoginIcon /></li>
          <li>Signup <AppRegistrationIcon /></li>
          <li>Logout <ExitToAppIcon /></li>
          <li>Account <PersonIcon /></li>
          <li className={styles.cart}>
            Shoping Cart
            <span className={styles.count}>0</span> <LocalMallIcon />
          </li>
          <li className={styles.wishlist}>
            Wishlist
            <span className={styles.count} style={{right:"-0.2rem"}}>0</span><FavoriteBorderIcon />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar



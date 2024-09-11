import React, { useEffect } from 'react';
import './App.css';

import Footers from './components/Footer';
import Copyrights from './components/Copyrights';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Footer from './pages/Footer';
import Men from './pages/Men';
import Women2 from './pages/Women2';
import Shop from './pages/Shop';

import Contact from './pages/Contact'
import Login from './pages/Login';
  function App() {



    useEffect(() => {
      const handleToggle = () => {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('responsive');
      };
  
      const toggleButton = document.querySelector('.toggle-btn');
      toggleButton.addEventListener('click', handleToggle);
  
      return () => {
        toggleButton.removeEventListener('click', handleToggle);
      };
    }, []); 

    
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>THE FASHION STORE</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="shortcut icon" href="assets/logo-for-a-website-name-of-website-is-the-fashion-store-254940071.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css" />
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        
        <div className="wrapper">

          <div className="top">
            <div className="part1">
              <i className="fi fi-sr-shopping-cart" />
              free shipping on all orders
            </div>
            <div className="part2">
              <i className="fi fi-sr-money-check-edit" />
              100% money back guarantee
            </div>
            <div className="part3">
              <i className="fi fi-sr-alarm-clock" />
              online support 24/7
            </div>
          </div>
          <div className="main">
            <div className="logo">
              <img src={require("./assets/Logo.png")} loading="lazy" />
            </div>
            <div className="maincontainer">
              <div className="searchBar">
                <input type="search" name id="search" placeholder="Search" />
                <button type="submit" className="searchButton">
                  <i className="fa fa-search mgGlass" />
                </button>
                <span className="spann">|</span>
                <select name="category" id="category">
                  <option value>All Categories &nbsp; &nbsp;</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Wallets">Wallets</option>
                  <option value="Bags">Bags</option>
                  <option value="Caps & Hats">Caps &amp; Hats</option>
                </select>
              </div>
              <div className="socialIcon">
                <div className="socialbox"><a href="https://www.facebook.com/kunal.rana.75641297?mibextid=ZbWKwL" target='blank'><i className="fa-brands fa-facebook-f ic" /></a></div>
                <div className="socialbox"><a href="https://twitter.com/" target='blank'><i className="fa-brands fa-twitter ic" /></a></div>
                <div className="socialbox"><a href="https://instagram.com/kunal__rana8585?igshid=OGQ5ZDc2ODk2ZA==" target='blank'><i className="fa-brands fa-instagram fa-xl ic" /></a></div>
                <div className="socialbox"><a href="https://youtube.com/@RaNa_G85?feature=shared" target='blank'><i className="fa-brands fa-youtube fa-lg ic" /></a></div>             
              </div>
            </div>
          </div>
          <div className="heroNav">
            <button className="toggle-btn">☰ Menu</button>
            <ul className="nav responsive">
              <li>
                <NavLink className="navitem" to='/home'>HOME</NavLink>
                <div className="bottom" />   
              </li>
              <li><NavLink className="navitem" to='/shop'>SHOP</NavLink><div className="bottom" /></li>
              <li><NavLink className="navitem" to='/women'>FEATURES</NavLink><div className="bottom" /></li>
              <li><NavLink className="navitem" to='/men'>MEGA GROUP</NavLink><div className="bottom" /></li>
              <li><NavLink className="navitem" to='/footer'>ABOUT</NavLink><div className="bottom" /></li>
              <li><NavLink className="navitem" to='/blog'>BLOG</NavLink><div className="bottom" /></li>
              <li><NavLink className="navitem" to='/contact'>CONTACT</NavLink><div className="bottom" /></li>
              <li>
                <NavLink to='/login'>
                  Sign Up / Login
                  {/* <i className="fi fi-sr-shopping-cart" />
                  shopinng cart (0) */}
                </NavLink>
              </li>
            </ul>
            {/* <Header /> */}
          </div>

          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/men' element={<Men></Men>}></Route>
            <Route path='/women' element={<Women2></Women2>}></Route>
            <Route path='/shop' element={<Shop></Shop>}></Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
            <Route path='/footer' element={<Footer></Footer>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
          </Routes>

          <Footers />
          <Copyrights />
        </div>
      </div>

      
    );
  }
export default App;
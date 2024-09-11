import React from 'react'
import Logins from '../components/Login'
import Browse from '../components/Browse';
import Women from '../components/Women';
import Men from '../components/Men';
import Women2 from '../components/Women2';
import Shop from '../components/Shop';
import Blog from '../components/Blog';
import Header from '../components/Header';

const Login = () => {
  return (
    <div>
      <Logins/>
      <Header />
      <Browse/> 
      <Women/>
      <Men/>
      <Women2/>
      <Shop/>
      <Blog/>
    </div>
  )
}

export default Login;
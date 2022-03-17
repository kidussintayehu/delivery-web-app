import React from 'react';
// import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Items from './components/pages/Items';
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Post from './components/pages/Post';
import SignUp from './components/pages/SignUp'
import Layout from './components/pages/Layout';
import RequireAuth from './components/login page/accountBox/RequireAuth';
import Unauthorized from './components/pages/Unauthorized';
import Order from './components/pages/Order';
function App() {
  const ROLES = {
    'User': "ROLE_USER",
    'Admin': "ROLE_ADMIN"
  }
  return (


    <Routes>
      <Route path="" element={<Layout />}>
        {/* this pages are seen by anyone */}
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="contact" element={<Contact />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        {/* this pages are only seen by users who are registored */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />}>
        <Route path="items" element={<Items />} />
        <Route path='items/order' element={<Order />} />
        </Route>
        {/* <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
           <Route path="items" element={<Items />} />
        </Route> */}
        {/* this page only seen by the admin elements */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="post" element={<Post />} />
        </Route>

      </Route>

    </Routes>




  )
}


export default App;
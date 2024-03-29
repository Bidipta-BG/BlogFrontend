import React, { useState } from 'react'
import Navigationbar from './Navbar';
import Feed from './Feed';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Createblog from './Createblog';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UpdateBlog from './UpdateBlog';



const App = () => {

  const [transfer, setTransfer] = useState()
  // const [islogin, setIsLogin] = useState()

  return (
    <div>
      {/* {console.log(transfer)} */}

      <Router>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile data={setTransfer} />} />
          <Route path="/create" element={<Createblog />} />
          <Route path="/update" element={<UpdateBlog data={transfer} />} />
        </Routes>

      </Router>

    </div>
  )
}

export default App
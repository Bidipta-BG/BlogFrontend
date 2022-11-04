import React from 'react'
import Navigationbar from './Navbar';
import Feed from './Feed';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Filter from './Filter';
import Createblog from './Createblog';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";



const App = () => {
  return (
      <div>
        
        
        <Router>
              <Navigationbar />
              <Routes>
                  <Route path="/" element={<Feed />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Createblog />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/create" element={<Createblog />} />
            </Routes>

        </Router>

          
          {/* <Createblog/> */}
          {/* <Profile/> */}
          {/* <Login/> */}
          {/* <Register/> */}
          {/* <Feed/> */}
      </div>
  )
}

export default App
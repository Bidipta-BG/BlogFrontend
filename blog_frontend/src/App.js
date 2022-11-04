import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigationbar from './Navbar';
import Feed from './Feed';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Filter from './Filter';
import Createblog from './Createblog';



const App = () => {
  return (
      <div>
          <Navigationbar />
          <Createblog/>
          {/* <Login/> */}
          {/* <Register/> */}
          {/* <div class="container">
              <div class="row">
                  <div class="col-2">
                      <Filter title="Tags"/>
                      <Filter title = "Category"/>
                      <Filter title="Sub-Category" />
                  </div>
                  <div class="col-10">
                      <Feed/>
                  </div>
              </div>
          </div> */}
      </div>
  )
}

export default App
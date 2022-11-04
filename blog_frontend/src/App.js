import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigationbar from './Navbar';
import Feed from './Feed';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';



const App = () => {
  return (
      <div>
          <Navigationbar />
          {/* <Login/> */}
          {/* <Register/> */}
          <Container>
              <Row>
                  <Col lg={2}>sm=3</Col>
                  <Col lg={10}>
                      <Profile /> 
                  </Col>
              </Row>
           </Container> 
      </div>
  )
}

export default App
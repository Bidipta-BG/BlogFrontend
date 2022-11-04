import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';

function Profile(){

    return(
        <div>
            <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Default Dropdown
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
          Clickable Outside
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-outside">
          Clickable Inside
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

            {/* <br></br> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Card className="text-center">
                <Card.Header>Create blog</Card.Header>
                <Card.Body>
                    <Card.Title>Body</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, reiciendis fugit velit ipsam facilis error voluptas? Amet, necessitatibus. Cupiditate culpa dignissimos dolorem cumque obcaecati voluptates quia tempore perferendis, aut aliquid?
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">tags,category,subcategory</Card.Footer>
            </Card>
        ,<br></br>
        <br></br>
        <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
            <br></br>
        {/* <br></br> */}
            <Card className="text-center">
                <Card.Header>Users own blog</Card.Header>
                <Card.Body>
                    <Card.Title>title of the blog</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, reiciendis fugit velit ipsam facilis error voluptas? Amet, necessitatibus. Cupiditate culpa dignissimos dolorem cumque obcaecati voluptates quia tempore perferendis, aut aliquid?
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>

            
        </div>
    )
}

export default Profile





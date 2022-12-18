import React, {useContext} from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MAIN_ROUTE } from '../utils/consts';


const NavBar = () => {
    const {user} = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{color: "white"}} to={MAIN_ROUTE}>ZeroLine</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Войти</Nav.Link>
            <Nav.Link href="#features">Создать</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};
export default NavBar;
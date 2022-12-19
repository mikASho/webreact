import React, {useContext} from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MAIN_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { Button } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

const NavBar = observer( () => {
    const {user} = useContext(Context);
    return (
        <Navbar style={{background: "#121212"}}>
        <Container>
          <NavLink style={{color: "white"}} to={MAIN_ROUTE}>ZeroLine</NavLink>
            {user.isAuth ?
                <Nav className="ml-auto" style={{color:"white"}}>
                    <Button variant={'outline-light'}>Админ панель</Button>
                    <Button variant={'outline-light'} style={{marginLeft:"20px"}}>Выйти</Button>      
                </Nav>
                :
                <Nav className="ml-auto" style={{color:"white"}}>
                    <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>    
                </Nav>
            }
        </Container>
      </Navbar>
    );
});
export default NavBar;
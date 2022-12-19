import React, {useContext, Link} from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = observer( () => {
    const {user} = useContext(Context);
    const history = useNavigate();
    return (
        <Navbar style={{background: "#121212"}}>
        <Container>
          <NavLink style={{color: "white", textDecoration: "none", fontSize: "36px"}} to={MAIN_ROUTE}>ZeroLine</NavLink>
            {user.isAuth ?
                <Nav className="ml-auto" style={{color:"white"}}>
                    <Button onClick={() => history(ADMIN_ROUTE)} variant={'outline-light'}>
                        Админ панель
                    </Button>
                    <Button onClick={() => user.setIsAuth(false)} variant={'outline-light'} style={{marginLeft:"20px"}}>
                        <a href='/main' style={{textDecoration: "none", color:"white"}}>Выйти</a> {/*Link не использовал т.к. какой-то баг появляется */}
                    </Button>      
                </Nav>
                :
                <Nav className="ml-auto" style={{color:"white"}}>
                    <Button variant={'outline-light'} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>    { /*user.setIsAuth(true)*/}
                </Nav>
            }
        </Container>
      </Navbar>
    );
});
export default NavBar;
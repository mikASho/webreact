import React, {useContext} from 'react'
import { Button, Container, Form, Card } from 'react-bootstrap'
import { REGISTRATION_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
import { useLocation, Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import { Context } from '../index';
import github from './img/button_github.png';
import gitlab from './img/button_gitlab.png';
import google from './img/button_google.png';

const Auth = () => {
  const {user} = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location)
  console.log(location.pathname)
    return (
      <div  style={{backgroundColor: "#161614"}}>
        <Container className="d-flex justify-content-center align-items-center"
              style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600, height: 480, backgroundColor: "#030303"}} className="p-5">
              <h2 style={{position: "relative", paddingLeft: 200, color: "white", top: 20}}>{isLogin ? 'Авторизация' : "Регистрация"}</h2>
              <Row className='d-flex flex-column'>
                  <Form.Control 
                    style={{width: 500, height: 60, marginLeft: 60, marginTop: 50}}
                    placeholder='Введите ваш e-mail..'
                  />
                  <Form.Control 
                    style={{width: 500, height: 60, marginLeft: 60}}
                    className='mt-40'
                    placeholder='Введите пароль'
                  />
                  <Form>
                      {isLogin ? 
                      <div style={{position: "relative", top: 160}}>
                         <Link to={REGISTRATION_ROUTE} style={{textDecoration: "none", color: "white", fontSize: 20, marginLeft: 220}}>Нет аккаунта?</Link>
                      </div>
                        :
                        <div style={{position: "relative", top: 160}}>
                          <Link to={LOGIN_ROUTE} style={{textDecoration: "none", color: "white", fontSize: 20, marginLeft: 220}}>Есть аккаунт?</Link>
                        </div>
                      }
                        <Button onClick={() => user.setIsAuth(true)} variant="outline-light" style={{width: 180, height: 60, position: "relative", left: 50, top: 30}}>
                          <Link to = {MAIN_ROUTE} style={{color: "white", textDecoration: "none"}}>{isLogin ? 'Войти' : 'Регистрация'} </Link> 
                      </Button>
                  </Form>
                  <p style={{position: "relative", left: 370, top: -80, color: "white", fontSize: 40, fontWeight: 600}}>Lorem:</p>
                  <img src={github} alt='icon' style={{width: 70, height: 48, position: "relative", left: 360, top: -100}}/>
                  <img src={gitlab} alt='icon' style={{width: 70, height: 48, position: "relative", left: 410, top: -148}}/>
                  <img src={google} alt='icon' style={{width: 70, height: 48, position: "relative", left: 460, top: -196}}/>
              </Row>
            </Card>
      </Container>
      </div>
      
    );
};
export default Auth;

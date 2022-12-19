import React from 'react'
import { Button, Container, Form, Card, NavLink } from 'react-bootstrap'
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { useLocation, Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location)
  console.log(location.pathname)
    return (
      <Container className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
              <h2 className='m-auto'>{isLogin ? 'Авторизация' : "Регистрация"}</h2>
              <Row className='d-flex flex-column'>
                  <Form.Control 
                    placeholder='Введите ваш e-mail..'
                  />
                  <Form.Control 
                    className='mt-3'
                    placeholder='Введите пароль'
                  />
                  <Form className='d-flex justify-content-between mt-10'>
                      {isLogin ? 
                      <div>
                        Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрируйтесь</Link>
                      </div>
                        :
                        <div>
                          Есть аккаунт? <Link to={LOGIN_ROUTE}>Войдите</Link>
                        </div>
                      }
                        <Button>
                          {isLogin ? 'Войти' : 'Регистрация'}
                      </Button>
                  </Form>
                  
              </Row>
            </Card>
      </Container>
    );
};
export default Auth;

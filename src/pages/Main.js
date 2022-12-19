import React, { Component } from 'react';
import './Main.scss';
import icon_1 from './img/icon_1.png';
import icon_2 from './img/icon_2.png';
import icon_3 from './img/icon_3.png';
import icon_adv_1 from './img/icon_adv_1.png';
import icon_adv_2 from './img/icon_adv_2.png';
import icon_adv_3 from './img/icon_adv_3.png';
import icon_adv_4 from './img/icon_adv_4.png';
import icon_deal from './img/deal.png';
import { Button, Form } from 'react-bootstrap';

export default class Main extends Component {
  render() {
    return (
        <div className='wrapper' id='wavesBackGround'>
            <header>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h1>
            </header>

            <main className=''>
            
                    <img src={icon_1} alt='icon' style={{position:"relative", top: "96px", left: 516}}/>
                  <p style={{ position: "relative", top: -150, left: 180, color:"white", fontSize: 20, fontWeight: 800}}>Lorem</p>
                  <p style={{ position: "relative",left: 52, top: -100, width: 396, height: 108, color: "white", fontSize: 20, fontWeight: 600}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <div style={{ width: "100%", height: 390, backgroundColor: "#161614"}}>
                        <img src={icon_2} alt='icon' style={{position:"relative", top: 40, left: 43}}/>
                        <p style={{ position: "relative", top: -180, marginLeft: 650, color:"white", fontSize: 20, fontWeight: 800}}>Lorem</p>
                        <p style={{ position: "relative", left: 510, top: -180, width: 396, height: 108, color: "white", fontSize: 20, fontWeight: 600}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>     
                  <img src={icon_3} alt='icon' style={{position:"relative", top: 30, left: 516}}/>
                  <p style={{ position: "relative", top: -150, left: 180, color:"white", fontSize: 20, fontWeight: 800}}>Lorem</p>
                  <p style={{ position: "relative",top: -150, left: 52, width: 396, height: 108, color: "white", fontSize: 20, fontWeight: 600}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
              
              <section style={{ position: "relative", top: -30}}>
                <div className='advantages'>
                  <p style={{position: "relative", left: 380, top: 60, color: "white", fontSize: 36}}>Lorem ipsum</p>
                  <img src={icon_adv_1} alt='icon' style={{position: "relative", top: 100, left: 30}}/>
                  <img src={icon_adv_2} alt='icon' style={{position: "relative", top: 100, left: 60}}/>
                  <img src={icon_adv_3} alt='icon' style={{position: "relative", top: 100, left: 90}}/>
                  <img src={icon_adv_4} alt='icon' style={{position: "relative", top: 100, left: 120}}/>
                  <p style={{position: "relative", top: 100, left: 45, width: 200, height: 27, color: "white"}}>sed do eiusmod tempor incididunt</p>
                  <p style={{position: "relative", top: 55, left: 280, width: 200, height: 27, color: "white"}}>sed do eiusmod tempor incididunt</p>
                  <p style={{position: "relative", top: 10, left: 500, width: 200, height: 27, color: "white"}}>sed do eiusmod tempor incididunt</p>
                  <p style={{position: "relative", top: -30, left: 740, width: 200, height: 27, color: "white"}}>sed do eiusmod tempor incididunt</p>
                </div>
              </section>

              <section>
                <div>
                  <p style={{fontWeight: 600,fontSize: 30, color: "white", marginLeft:400}}>Lorem ipsum</p>
                  <p style={{width: 836, height: 170, fontWeight: 400,fontSize: 20, color: "white", marginTop: 10, marginLeft: 62}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <img src={icon_deal} alt='icon' style={{position:"relative", left: 700, marginTop: -30}}/>
                </div>
              </section>

              <section style={{position: "relative", width: 960, height: 300, background: "#161614"}}>
                <p style={{position: "relative", left: 350, top: 20, fontWeight: 400,fontSize: 20, color: "white"}}>Lorem ipsum dolor sit amet?</p>
                  <div style={{width: 435, position: "relative", left: 500, top: 50}}>
                      <Form.Control  
                        placeholder='Введите ваш e-mail..'
                        style={{height: 61}}
                      />
                      <Form.Control 
                        style={{height: 61}}
                        className='mt-10'
                        placeholder='Вопрос'
                      />
                      <Button className='mt-10' variant="outline-light">
                        Отправить
                      </Button>       
                  </div>
                  <p style={{position: "relative", width: 450, height: 170, fontWeight: 400,fontSize: 20, color: "white", top: -120, left: 30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet.</p>
              </section>
            </main>
            <footer style={{fontWeight: 800,fontSize: 220, color: "white", position: "relative", width: 960,heigth: 200, left: 500}}>FOOTER</footer>
        </div>
    )
  }
}

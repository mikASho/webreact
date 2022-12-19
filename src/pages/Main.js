import React, { Component } from 'react';
import './Main.scss';
import icon_1 from './img/icon_1.png';
import icon_2 from './img/icon_2.png';
import icon_3 from './img/icon_3.png';
import icon_adv_1 from './img/icon_adv_1.png';
import icon_adv_2 from './img/icon_adv_2.png';
import icon_adv_3 from './img/icon_adv_3.png';
import icon_adv_4 from './img/icon_adv_4.png';
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
            </main>

        </div>
    )
  }
}

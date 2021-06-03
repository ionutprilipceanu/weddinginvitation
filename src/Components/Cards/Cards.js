import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
// import "..//Cursor/Cursor.css"
import slide01 from "..//Cards/images/classic_briefcase_003.jpg"
import slide02 from "..//Cards/images/cutlery_holder_002.jpg"
import slide03 from "..//Cards/images/long_wallet_001.jpg"
import "..//Cards/Cards.css"
import Bgflower from '..//..//Components/Modal/image/background.jpg'
import BgRoze from '..//..//Components/Modal/image/backgroundFlowerFront.jpg'


export default class Cards extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={3000}>

            <img
              className="d-block w-100"
              src={slide01}
              alt="First slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>

          </Carousel.Item>

          <Carousel.Item interval={3000}>

            <img
              className="d-block w-100"
              src={slide02}
              alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={slide03}
              alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>

          </Carousel.Item>

        </Carousel>

        <div className="ModalbgRoze">
          <img src={Bgflower} alt="bgflower" ></img>
        </div>
        <div className="ModalbgRoze">
          <img src={BgRoze} alt="bgflower" ></img>
        </div>
      </div>
    )
  }
}

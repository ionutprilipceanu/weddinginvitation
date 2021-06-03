import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '..//NameTitle/NameTitle.css';
import imageRight from './image/imageTitleRight2.png';
import imageLeft from './image/imageTitleLeft2.png';


export default class NameTitle extends Component {
  render() {
    return (
      <div className="Container">
        <div className="imageTitleLeft">
          <img src={imageLeft} alt="pozaPrima" ></img>
        </div>

        <div className="titleContainer">
          <h1 className="NameTitle">Ionuț &amp; Daniela </h1>
          <p className="NameSubTitle">11 Iulie 2021</p>
        </div>

        <div className="imageTitleRight">
          <img src={imageRight} alt="pozaPrima" ></img>
        </div>
      </div>
      
    )
  }
}

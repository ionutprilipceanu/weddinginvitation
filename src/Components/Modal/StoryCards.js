import React from 'react'
import { Card } from 'react-bootstrap'
import Fade from "react-reveal/Fade"
import "..//Modal/StoryCards.css"
import MyButtonCardFirst from "..//Modal/FirstBtnI"
// import SecondBtn from "..//Servicii/SecondBtn"
// import ThirdBtn from "..//Servicii/ThirdBtn"
// import ForthBtn from "..//Servicii/ForthBtn"

function StoryCards() {

  return (
    <div>
      <Fade bottom cascade>
        <div className="skillsContainer">
          <Card className="card-final">


            <div className="Separator1">
              <Card className="carder_body">
                <Card.Body>
                  <Card.Subtitle className="cardSubtitle">Invitație</Card.Subtitle>
                  <div className="bottomLine"></div>
                  <Card.Text className="cardText">

                    Pentru că ne sunteți o persoană dragă nouă, ți-am pregătit o surpiză mică, dă un click pentru a afla mai multe detalii...

                  </Card.Text>

                  <MyButtonCardFirst />

                </Card.Body>
              </Card>
            </div>

          </Card>
        </div>
      </Fade>
    </div>
  )
}

export default StoryCards

import React, { useState } from 'react'
import Modal from 'react-modal'
import Zoom from "react-reveal/Zoom";
import '../Modal/FirstBtnI.css'
import FlowerLeftUp from '..//Modal/image/FlowerLeftUp.png'
import flowerRightDown from '../Modal/image/flowerRightDown.png'
import Bgflower from '../Modal/image/background.jpg'
import BgRoze from '../Modal/image/backgroundFlower.jpg'

function MyButtonCardFirst() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div>
      <button className="btn-alls btn-gos" onClick={() => setModalIsOpen(true)}>Deschide</button>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false} className="modalOpen">
        <Zoom>
          <div className="group">
            <div className="bgRoze">
              <img src={Bgflower} alt="bgflower" ></img>
            </div>
            <div className="bgflower">
              <img src={BgRoze} alt="bgflower" ></img>
            </div>
            <div className="pozaEditLeft">
              <img src={FlowerLeftUp} alt="pozaPrima" ></img>
            </div>

            <div className="textulPrimar">

              <p className="ModalTextBtTop">
                Cu voia Lui Dumnezeu,<br />
                și binecuvântarea părinților<br />
                noi,<br/><br/>
              </p>


              <h1 className="ModalTitleBt">Ionuț &amp; Daniela </h1>

              <p className="ModalTextBt"> <br/>am hotărât să ne unim într-un singur destin.<br />
                Și pentru că este o datorie de suflet a creștinilor, să se cunune religios, <br />
                vă așteptăm să trăim împreună aceste momente unice,<br />
                <b>duminică, 11.07.2021</b>, ora 14:30 la biserica Sf. Vasile cel Mare, Botoșani.<br />
                Pe acest drum vom fi călăuziți de nașii noștri<br />
                <b>Ionuț și Ramona Amariei</b><br />
                Iar de veți avea plăcerea să petreceți alături de noi,<br />
                vă invităm la Restaurant “Rediu”, sala “Diamond”,<br />
                începând cu ora 17:00<br /><br/>
              </p>

              <div>
                <p className="ModalTextBtBottom">
                  Confirmarea se poate face la numerele:<br />
                  Daniela - 0740 497 378 <br />
                  Ionuț - 0751 684 142 <br />
                  Vă așteptăm cu drag!

                </p>
              </div>

            </div>

            <div className="pozaEditRight">
              <img src={flowerRightDown} alt="pozaPrima" ></img>
            </div>

          </div>
          

          <button onClick={() => setModalIsOpen(false)} className="CloseModal">X</button>
        </Zoom>
      </Modal>
    </div>
  )
}
export default MyButtonCardFirst
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/order */
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import './index.css'

const Rules = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="tr-btn">
          RULES
        </button>
      }
    >
      {close => (
        <div className="bg-pop">
          <button type="button" className="close-btn" onClick={() => close()}>
            <RiCloseLine />
          </button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            className="rl"
            alt="rules"
          />
        </div>
      )}
    </Popup>
  </div>
)
export default Rules

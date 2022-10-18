import {Component} from 'react'
import './index.css'

class Navbar extends Component {
  render() {
    const {gameScore, startTimer} = this.props
    return (
      <nav className="navbar">
        <div className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
            alt="website logo"
            className="logo"
          />
          <div>
            <ul className="nav-items">
              <li>
                <p className="score-text">
                  Score: <span className="score">{gameScore}</span>
                </p>
              </li>
              <li>
                <div className="timer-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                    className="timer-img"
                    alt="timer"
                  />
                  <p className="time">{startTimer} sec</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar

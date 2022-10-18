import {Component} from 'react'
import './index.css'

class MatchResult extends Component {
  render() {
    const {gameScore, restartGame} = this.props
    return (
      <div className="result-container">
        <div className="result-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="tr-image"
          />
          <p className="res-text">Your Score</p>
          <p className="scores">{gameScore}</p>
          <button type="button" className="score-btn" onClick={restartGame}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="reset-btn"
            />
            <span className="play-text">Play Again</span>
          </button>
        </div>
      </div>
    )
  }
}

export default MatchResult

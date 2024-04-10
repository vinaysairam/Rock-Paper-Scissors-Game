import './index.css'
import ReactContext from '../../context/ReactContext'

const Score = () => (
  <ReactContext.Consumer>
    {value => {
      const {score} = value
      return (
        <div className="score">
          <div className="cd-1">
            <h1 className="pp">ROCK PAPER SCISSORS</h1>
          </div>
          <div className="fl1">
            <p className="p1">Score</p>
            <p className="ss">{score}</p>
          </div>
        </div>
      )
    }}
  </ReactContext.Consumer>
)

export default Score

/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
import ReactContext from '../../context/ReactContext'
import './index.css'

const GameResult = () => (
  <ReactContext.Consumer>
    {value => {
      const {game, choicesList1, opponent, own, onPlayAgain} = value
      const filter1 = choicesList1.filter(l => l.id === game)
      const onReset = () => {
        onPlayAgain()
      }
      console.log(opponent)
      return (
        <div className="bg-con2">
          <div className="cd-2">
            <div className="cd-3">
              <p>You</p>
              <button type="button" className="btn-choice">
                <img
                  src={filter1[0].imageUrl}
                  alt="your choice"
                  className="img-ch"
                />
              </button>
            </div>
            <div className="cd-3">
              <p>Opponent</p>
              <button type="button" className="btn-choice">
                <img
                  src={opponent.imageUrl}
                  alt="opponent choice"
                  className="img-ch"
                />
              </button>
            </div>
          </div>
          <div className="cd-4">
            <p className="pp1">{own}</p>
            <button className="btn-retry" type="button" onClick={onReset}>
              PLAY AGAIN
            </button>
          </div>
        </div>
      )
    }}
  </ReactContext.Consumer>
)

export default GameResult

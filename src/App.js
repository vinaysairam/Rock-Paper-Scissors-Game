/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import Score from './components/Score'
import ReactContext from './context/ReactContext'
import ChoiceView from './components/ChoiceView'
import Rules from './components/Rules'
import GameResult from './components/GameResult'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    choicesList1: choicesList,
    score: 0,
    result: false,
    game: '',
    opponent: choicesList[Math.floor(Math.random() * 3)],
    own: '',
  }

  scoreOnPluse = () => {
    const {score} = this.state
    this.setState({score: score + 1})
  }

  onPlayAgain = () => {
    this.setState({result: false})
  }

  scoreOnMinus = () => {
    const {score} = this.state
    this.setState({score: score - 1})
  }

  isClick = val => {
    const {choicesList1, opponent} = this.state
    let onResult = null
    const filter1 = choicesList1.filter(l => l.id === val)
    const you = filter1[0].id.toLowerCase()
    const opponent1 = opponent.id.toLowerCase()
    console.log(opponent1)
    console.log(you)
    if (you === 'paper' && opponent1 === 'rock') {
      onResult = 'YOU WON'
      this.scoreOnPluse()
      this.setState({result: true, game: val, own: onResult})
    } else if (you === 'scissors' && opponent1 === 'rock') {
      onResult = 'YOU LOSE'
      this.scoreOnMinus()
      this.setState({result: true, game: val, own: onResult})
    } else if (you === 'rock' && opponent1 === 'paper') {
      onResult = 'YOU LOSE'
      this.scoreOnMinus()
      this.setState({result: true, game: val, own: onResult})
    } else if (you === 'scissors' && opponent1 === 'paper') {
      onResult = 'YOU WON'
      this.scoreOnPluse()
      this.setState({result: true, game: val, own: onResult})
    } else if (you === 'rock' && opponent1 === 'scissors') {
      onResult = 'YOU WON'
      this.scoreOnPluse()
      this.setState({result: true, game: val, own: onResult})
    } else if (you === 'paper' && opponent1 === 'scissors') {
      onResult = 'YOU LOSE'
      this.scoreOnMinus()
      this.setState({result: true, game: val, own: onResult})
    } else if (you === opponent1) {
      onResult = 'IT IS DRAW'
      this.setState({result: true, game: val, own: onResult})
    }
  }

  render() {
    const {choicesList1, score, game, result, opponent, own} = this.state
    return (
      <ReactContext.Provider
        value={{
          choicesList1,
          score,
          isClick: this.isClick,
          game,
          opponent,
          scoreOnPluse: this.scoreOnPluse,
          scoreOnMinus: this.scoreOnMinus,
          onPlayAgain: this.onPlayAgain,
          own,
        }}
      >
        <div className="bg-con">
          <Score />
          {result ? (
            <GameResult />
          ) : (
            <ul className="choice-vw">
              {choicesList1.map(l => (
                <ChoiceView dt={l} key={l.id} />
              ))}
            </ul>
          )}
          <div className="rr">
            <Rules />
          </div>
        </div>
      </ReactContext.Provider>
    )
  }
}

export default App

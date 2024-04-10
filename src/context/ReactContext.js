import React from 'react'

const ReactContext = React.createContext({
  choicesList: [],
  game: '',
  opponent: '',
  score: 0,
  result: false,
  scoreOnPluse: () => {},
  scoreOnMinus: () => {},
  onPlayAgain: () => {},
  own: '',
})

export default ReactContext

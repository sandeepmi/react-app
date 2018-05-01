import React, { Component } from 'react'
import Board from './Board'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      isXNext: true
    }
  }

  handleClick (i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const { isXNext } = this.state

    const squares = current.squares.slice()
    const winner = this.calculateWinner(squares)
    if (winner || squares[i]) return

    squares[i] = isXNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      isXNext: !isXNext
    })
  }

  jumpTo (step) {
    this.setState({
      stepNumber: step,
      isXNext: (step % 2) === 0
    })
  }

  render () {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const past = history.slice(0, this.state.stepNumber)
    const winner = this.calculateWinner(current.squares)

    const moves = past.map((step, move) => {
      const desc = move ?
        'Go to move ' + move :
        'Go to start'

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.props.isXNext ? 'X' : 'O')
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }
}

export default Game

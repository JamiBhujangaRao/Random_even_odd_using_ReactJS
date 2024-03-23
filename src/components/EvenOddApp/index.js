import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, countType: 'Even'}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: randomNumber})
    if (randomNumber % 2 === 0) {
      this.setState({countType: 'Even'})
    } else {
      this.setState({countType: 'Odd'})
    }
  }

  render() {
    const {count, countType} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="count">Count {count}</h1>
          <p className="result"> Count is {countType}</p>
          <button className="btn" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="info">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp

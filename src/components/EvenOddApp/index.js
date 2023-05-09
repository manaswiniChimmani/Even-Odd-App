// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, type: 'Even'}

  increment = () => {
    const {count, type} = this.state

    const num = Math.ceil(Math.random() * 100)
    // console.log(num)

    if (num % 2 === 0) {
      this.setState(prevState => ({count: prevState.count + num, type: 'Even'}))
    } else {
      this.setState(prevState => ({
        count: prevState.count + num,
        type: 'Odd',
      }))
    }
  }

  render() {
    const {count, type} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="h1">Count {count}</h1>
          <p className="p1">Count is {type}</p>
          <button type="button" className="btn" onClick={this.increment}>
            Increment
          </button>
          <p className="p2">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  randomNumber = () => {
    const randomValue = Math.ceil(Math.random() * 100)
    this.setState({count: randomValue})
  }

  render() {
    const {count} = this.state
    return (
      <div className="MainBackground">
        <div className="classContainer">
          <h1 className="heading">Random Number</h1>
          <p className="Paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button className="Btn" type="submit" onClick={this.randomNumber}>
              Generate
            </button>
          </div>
          <p className="heading">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

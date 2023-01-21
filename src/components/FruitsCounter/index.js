import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count: 0, count2: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onIncrement2 = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count} = this.state
    const {count2} = this.state
    return (
      <div className="fruits-container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="fruit-count">{count}</span> mangoes{' '}
            <span className="fruit-count">{count2}</span> bananas
          </h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="img1"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="img2"
            />
            <div>
              <button type="button" className="Btn1" onClick={this.onIncrement}>
                Eat Mango
              </button>
              <button
                type="button"
                className="Btn2"
                onClick={this.onIncrement2}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter

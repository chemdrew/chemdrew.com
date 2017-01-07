import React from 'react'
import A from './assets/A.svg'
import P from './assets/P.svg'
import './Name.scss'

export class Name extends React.Component {

  constructor () {
    super()
    this.state = {
      lifecycle: 'initial'
    }
  }

  componentDidMount () {
    if (!APP_ALREADY_VISITED) {
      setTimeout(function () {
        this.setState({
          lifecycle: 'start'
        })
      }.bind(this), 10)
      setTimeout(function () {
        APP_ALREADY_VISITED = true
        this.setState({
          lifecycle: 'final'
        })
      }.bind(this), 1700)
    } else {
      this.setState({
        lifecycle: 'final'
      })
    }
  }

  render () {
    return <div className='name-wrapper'>
      <div className={`name-${this.state.lifecycle}-state`}>
        <img className={`a-${this.state.lifecycle} a-letter`} src={A} />
        <div className={`first-${this.state.lifecycle} fading-effect`}>ndrew</div>
        <img className={`p-${this.state.lifecycle}`} src={P} />
        <div className={`last-${this.state.lifecycle} fading-effect`}>ratt</div>
      </div>
    </div>
  }
}

export default Name

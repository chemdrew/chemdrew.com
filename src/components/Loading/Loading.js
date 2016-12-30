import React from 'react'
import './Loading.scss'

export class Loading extends React.Component {

  render () {
    // from http://tobiasahlin.com/spinkit/
    return <div className='spinner'>
      <div className='double-bounce1' />
      <div className='double-bounce2' />
    </div>
  }
}

export default Loading

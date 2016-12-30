import React from 'react'
import './ComingSoon.scss'

export class ComingSoon extends React.Component {

  render () {
    // from http://tobiasahlin.com/spinkit/
    return <div className='sk-folding-cube'>
      <div className='sk-cube1 sk-cube' />
      <div className='sk-cube2 sk-cube' />
      <div className='sk-cube4 sk-cube' />
      <div className='sk-cube3 sk-cube' />
    </div>
  }
}

export default ComingSoon

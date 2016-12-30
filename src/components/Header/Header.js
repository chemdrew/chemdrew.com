import React from 'react'
import { IndexLink } from 'react-router'
import './Header.scss'

export class Header extends React.Component {

  render () {
    return <div className='wrapper'>
      <div className='spacer' />
      <div className='header'>
        <div className='bg-header-top-half' />
        <div className='bg-header-bottom-half' />
        <h1>{this.props.title}</h1>
        <IndexLink to='/' className='home-link'>
          Home
        </IndexLink>
      </div>
    </div>
  }
}

Header.propTypes = {
  title: React.PropTypes.string
}

export default Header

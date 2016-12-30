import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import ComingSoon from '../../../components/ComingSoon'

export class Blog extends React.Component {
  constructor () {
    super()
    this.state = {
      value: null
    }
  }

  componentDidMount () {
    // fetch  https://medium.com/@chemdrew/latest
  }

  render () {
    return <div>
      <div className='bg bg-gradient' />
      <Header title='Blog' />
      <ComingSoon />
      <div>coming soon...</div>
      <Footer />
    </div>
  }
}

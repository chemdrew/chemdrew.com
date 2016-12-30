import React from 'react'
import './Footer.scss'
import Account from './models/Account'

export class Footer extends React.Component {
  constructor () {
    super()
    this.state = {
      accounts: []
    }
  }

  componentDidMount () {
    this.setState({
      accounts: [
        new Account({
          username: 'chemdrew',
          url: 'https://github.com/chemdrew',
          platform: 'github'
        }),
        new Account({
          username: 'chemdrew',
          url: 'https://www.instagram.com/chemdrew',
          platform: 'instagram'
        }),
        new Account({
          username: 'chemdrew',
          url: 'https://www.linkedin.com/in/chemdrew',
          platform: 'linkedin'
        }),
        new Account({
          username: 'chemdrew',
          url: 'https://medium.com/@chemdrew',
          platform: 'medium'
        }),
        new Account({
          username: '1219931286',
          url: 'https://open.spotify.com/user/1219931286',
          platform: 'spotify'
        }),
        new Account({
          username: 'chemdrew',
          url: 'https://twitter.com/chemdrew',
          platform: 'twitter'
        })
      ]
    })
  }

  render () {
    return <div>
      <div className='spacer' />
      <div className='footer'>
        <div className='bg-footer-top-half' />
        <div className='bg-footer-bottom-half' />
        <ul className='footer-list'>
          {this.state.accounts.map((account) =>
            <li><a href={account.url} target='_blank' className='svg-link'>
              <img
                alt={account.platform}
                src={account.getIcon()} />
            </a></li>
          )}
        </ul>
      </div>
    </div>
  }
}

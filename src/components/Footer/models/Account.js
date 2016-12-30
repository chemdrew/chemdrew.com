import github from '../assets/icons/github.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedin from '../assets/icons/linkedin.svg'
import medium from '../assets/icons/medium.svg'
import spotify from '../assets/icons/spotify.svg'
import twitter from '../assets/icons/twitter.svg'

var icons = {
  github: github,
  instagram: instagram,
  linkedin: linkedin,
  medium: medium,
  spotify: spotify,
  twitter: twitter,
  default: ''
}

class Account {
  constructor (account) {
    this.username = account.username
    this.url = account.url
    this.platform = account.platform
  }

  getIcon () {
    return icons[this.platform] || icons.default
  }
}

export default Account

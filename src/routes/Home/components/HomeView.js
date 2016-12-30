import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'
import Footer from '../../../components/Footer'
import Name from '../../../components/Name'

export const HomeView = () => (
  <div>
    <div className='bg bg-gradient' />
    <div className='content'>
      <Name />
      <Link to='/projects' className='link'>
        projects
      </Link>
      <Link to='/blog' className='link'>
        blog
      </Link>
    </div>
    <Footer />
  </div>
)

export default HomeView

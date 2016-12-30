import React from 'react'
import './Projects.scss'
import Project from '../models/Project'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Loading from '../../../components/Loading'

export class Projects extends React.Component {
  constructor () {
    super()
    this.state = {
      projects: [],
      loadComplete: false
    }
    this.displayList = this.displayList.bind(this)
  }

  componentDidMount () {
    fetch('https://api.github.com/users/chemdrew/repos')
    .then((response) => response.json())
    .then((githubProjects) => {
      var projects = []
      var i = 0
      for (i; i < githubProjects.length; i++) {
        if (!githubProjects[i].fork) projects.push(new Project(githubProjects[i]))
      }
      projects.sort((a, b) => {
        var dateA = new Date(a.createdAt)
        var dateB = new Date(b.createdAt)
        if (dateA > dateB) return -1
        if (dateA < dateB) return 1
      })
      this.setState({
        projects: projects,
        loadComplete: true
      })
    })
    .catch((error) => {
      console.error(error)
      this.setState({
        loadComplete: true
      })
    })
  }

  displayList () {
    return <ul className='project-list'>
      {this.state.projects.map((project) =>
        <li><a href={project.url} target='_blank' className='link'>
          {project.name}
        </a></li>
      )}
    </ul>
  }

  render () {
    return <div>
      <div className='bg bg-gradient' />
      <Header title='Projects' />
      { this.state.loadComplete ? this.displayList() : <Loading /> }
      <Footer />
    </div>
  }
}

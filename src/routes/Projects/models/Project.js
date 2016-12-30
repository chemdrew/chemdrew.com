class Project {
  constructor (project) {
    this.name = project.name
    this.url = project.html_url
    this.createdAt = project.created_at
  }
}

export default Project

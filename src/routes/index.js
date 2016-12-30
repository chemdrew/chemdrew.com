import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import Projects from './Projects'
import Blog from './Blog'

export const createRoutes = () => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    Projects,
    Blog
  ]
})

export default createRoutes

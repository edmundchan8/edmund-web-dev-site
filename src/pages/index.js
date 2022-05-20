import * as React from 'react'
import AboutPage from './about'
import Layout from '../components/layout'

const IndexPage = () => {
  return(
      <Layout>
        <title>Edmund Chi Hong Chan</title>
        <h1>Edmund Chi Hong Chan</h1>
        <p>Web Application Developer</p>
        <AboutPage/>
    </Layout>
  )
}

export default IndexPage
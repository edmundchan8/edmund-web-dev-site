import * as React from 'react'
import AboutPage from './about'
import PortfolioPage from './portfolio'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { largeHeaders } from '../components/layout.module.css'

const IndexPage = () => {
  return(
      <Layout>
        <title>Edmund Chi Hong Chan</title>
        <p className={largeHeaders}>Edmund Chi Hong Chan</p>
        <StaticImage 
          alt="profile picture of me"
          src="..\images\profilePic.jpeg"
        />
        <p className={largeHeaders}>Web Application Developer</p>
        <AboutPage/>
        <PortfolioPage/>
    </Layout>
  )
}

export default IndexPage
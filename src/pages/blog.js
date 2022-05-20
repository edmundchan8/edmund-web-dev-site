import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ( {data} ) => {
    return(
        <Layout pageTitle="My Blog">
            <ul>
            {
                data.allFile.nodes.map( node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))
            }
            </ul>
            <h2>Prologue - December 2012</h2>
            <p>I never had to deal with emails from work, it wasn't the type of job where one regularly checked in with their manager and team to stay uptodate with the latest work issues, especially
            since the number of employees at the company amounted to a grand total of 2, my boss and me.</p>
            <p>So it was odd to see that my boss had emailed me,  not only because I was on vacation back home in the UK, but because they never did email me for anything important.  Nonetheless, I opened
            it up immediately, it hit me</p>
            <h4>"Termination of Employment"</h4>
            <p>To rub salt into my wounds, it was a few days before Christmas as well, but for once in my life, I didn't feel too agrieved by it all, as it did cross my mind to leave and seek new pastures.
            </p>  
        </Layout>
    )
}

export const query = graphql `
query {
    allFile {
      nodes {
        name
      }
    }
  }
  
`

export default BlogPage
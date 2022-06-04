import * as React from 'react'
import Layout from '../components/layout'
import { largeHeaders, blogText } from '../components/layout.module.css'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ( {data} ) => {
    return(
        <Layout>
            {
                data.allMdx.nodes.map((node)=> (
                    <article kay={node.id}>
                        <p className={largeHeaders}>{node.frontmatter.title}</p>
                        <MDXRenderer className={blogText}>{node.body}</MDXRenderer>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql `
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }    
`

export default BlogPage
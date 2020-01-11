import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import RelatedPosts from '../components/related-posts'

export default ({ data }) => {
  const post = data.markdownRemark
  const relatedPosts = data.allMarkdownRemark.edges
  console.log(relatedPosts)
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <section
        css={css`
          background: white;
          padding: 1rem;
        `}
      >
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
    <section 
        css={css`
          background: white;
          padding: 0 1rem;
          margin-top: 2rem;
        `}>
      <RelatedPosts posts={relatedPosts} />
    </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $tags: [String!]) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
    
    allMarkdownRemark(filter: { fields: { tags: { in: $tags } } }) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

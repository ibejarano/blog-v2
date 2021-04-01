import React from "react"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import RelatedPosts from "../components/related-posts"

const BlogPostTemplate = ({ data }) => {
  const post = data.mdx
  const relatedPosts = data.allMdx.edges.length ? data.allMdx.edges : false

  return (
    <Layout title={post.frontmatter.title} description={post.excerpt}>
      <article>
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
      <section>{relatedPosts && <RelatedPosts posts={relatedPosts} />}</section>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($slug: String!, $tags: [String!]) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
      excerpt
    }

    allMdx(filter: { fields: { tags: { in: $tags } } }) {
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

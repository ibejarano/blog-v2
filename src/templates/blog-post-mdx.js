import React from "react"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import RelatedPosts from "../components/related-posts"

export default function({ data }) {
  const post = data.mdx
  const relatedPosts = data.allMdx.edges
  console.log(post)
  return (
    <Layout title={post.frontmatter.title} description={post.excerpt}>
      <article>
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
      <section>
        <RelatedPosts posts={relatedPosts} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $tags: [String!]) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
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

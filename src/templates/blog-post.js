import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import RelatedPosts from "../components/related-posts"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const relatedPosts = data.allMarkdownRemark.edges
  return (
    <Layout title={post.frontmatter.title} description={post.excerpt}>
      <article
        css={css`
          padding: 1rem;
        `}
      >
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <section
        css={css`
          padding: 0 1rem;
          margin-top: 2rem;
        `}
      >
        <RelatedPosts posts={relatedPosts} />
      </section>
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

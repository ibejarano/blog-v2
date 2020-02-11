import React from "react"
import Layout from "../components/layout"
import {MDXRenderer} from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import RelatedPosts from "../components/related-posts"

const BlogPostTemplate = ({ data }) => {
  const post = data.mdx
  const relatedPosts = data.allMdx.edges.length ? data.allMdx.edges : false;
  console.log(relatedPosts)
  return (
    <Layout title={post.frontmatter.title} description={post.excerpt}>
      <article
      >
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>
          {post.body}
        </MDXRenderer >
      </article>
      <section
        css={css`
          padding: 0 1rem;
          margin-top: 2rem;
        `}
      >
        {relatedPosts &&
        <RelatedPosts posts={relatedPosts} />
        }
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

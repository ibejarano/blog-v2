import React from "react"
import { remarkForm, DeleteAction } from "gatsby-tinacms-remark"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import RelatedPosts from "../components/related-posts"

export default function ({ data: { mdx, allMdx } }) {
  return (
    <Layout title={mdx.frontmatter.title} description={mdx.excerpt}>
      <article
        css={css`
          background: white;
          padding: 1rem;
        `}
      >
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </article>
      <section
        css={css`
          background: white;
          padding: 0 1rem;
          margin-top: 2rem;
        `}
      >
        <RelatedPosts posts={allMdx.edges} />
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

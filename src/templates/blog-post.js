import React from "react"
import { remarkForm, DeleteAction } from "gatsby-tinacms-remark"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import RelatedPosts from "../components/related-posts"

const deleteButton = {
  label: `Delete`,
  actions: [DeleteAction],
}
const BlogPostForm = {
  fields: [
    {
      label: "Title",
      name: "frontmatter.title",
      description: "Enter the title of the post here",
      component: "text",
    },
    {
      label: "Description",
      name: "frontmatter.description",
      description: "Enter the post description",
      component: "textarea",
    },
  ],
}

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const relatedPosts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <article
        css={css`
          background: white;
          padding: 1rem;
        `}
      >
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <section
        css={css`
          background: white;
          padding: 0 1rem;
          margin-top: 2rem;
        `}
      >
        <RelatedPosts posts={relatedPosts} />
      </section>
    </Layout>
  )
}

export default remarkForm(BlogPostTemplate, BlogPostForm, deleteButton)

export const query = graphql`
  query($slug: String!, $tags: [String!]) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
      fileRelativePath
      ...TinaRemark
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

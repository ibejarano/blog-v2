import React from "react"
import { liveRemarkForm , DeleteAction } from "gatsby-tinacms-remark"
import { Wysiwyg } from "@tinacms/fields"
import { TinaField } from "@tinacms/form-builder"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import RelatedPosts from "../components/related-posts"

const deleteButton = {
  label: `Delete`,
  actions: [DeleteAction]
}

const BlogPostTemplate = ({ data, pageContext, setIsEditing }) => {
  const post = data.markdownRemark
  const relatedPosts = data.allMarkdownRemark.edges
  const { previous, next } = pageContext
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
    <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
      <article onClick={() => setIsEditing(true)}
        css={css`
          background: white;
          padding: 1rem;
        `}
      >
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </TinaField>
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

export default liveRemarkForm(BlogPostTemplate, deleteButton)

export const query = graphql`
  query($slug: String!, $tags: [String!]) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
      fileRelativePath
      rawFrontmatter
      rawMarkdownBody
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

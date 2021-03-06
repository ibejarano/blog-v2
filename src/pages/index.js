import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PostCard from "../components/postcard"

export default ({ data }) => (
  <Layout title={`Blog de Ignacio Bejarano`} description={`Pagina Principal`}>
    <section className="content-body">
      <h1>Hola! Bienvenid@ a mi blog!</h1>
      <h4>{data.allMdx.totalCount} Posts</h4>
      {data.allMdx.edges.map(({ node }, ind) => (
        <PostCard key={ind} post={node} />
      ))}
    </section>
  </Layout>
)

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY", locale: "es-ES")
          }
          excerpt
          fields {
            slug
            section
          }
          timeToRead
          featuredImg {
            childImageSharp {
              fixed(height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

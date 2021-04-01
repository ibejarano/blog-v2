import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => (
  <Layout title={`Sobre mi`} about={`Un poco sobre el author...`}>
    <section>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        Mi nombre es Ignacio Bejarano, actualmente me desempeño como ingeniero
        mecánico en el área de la mecánica computacional, a principios del 2019
        empecé a interesarme por el desarrollo web, principalmente en
        tecnologías Front-End. Este blog surgió como un "challenge" dentro de
        una serie de desafíos llamados{" "}
        <a href="https://www.gatsbyjs.org/blog/100days/">100DaysOfGatsby</a>
      </p>
      <Img alt="an image" fixed={data.file.childImageSharp.fixed} />
    </section>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "sample.png" }) {
      childImageSharp {
        fixed(grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

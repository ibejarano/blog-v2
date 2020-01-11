import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"

export default ({ data }) => (
  <Layout>
    <SEO title={`Sobre mi`} about={`Un poco sobre el author...`} />
    <section
      css={css`
        background: white;
        padding: 0 1rem;
        border: 4px solid black;
      `}
    >
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        Mi nombre es Ignacio Bejarano, actualmente me desempeño como ingeniero
        mecánico en el área de la mecánica computacional, a principios del 2019
        empecé a interesarme por el desarrollo web, principalmente en
        tecnologías Front-End. Este blog surgió como un "challenge" dentro de
        una serie de desafíos llamados{" "}
        <a href="https://www.gatsbyjs.org/blog/100days/">100DaysOfGatsby</a>
      </p>
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
  }
`

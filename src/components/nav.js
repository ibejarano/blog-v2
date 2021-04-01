import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <nav>
      <Link to={`/`}>
        <h3>{data.site.siteMetadata.title}</h3>
        <Link to={`/subscribe/`}>Suscribirse</Link>
      </Link>
      <Link to={`/about/`}>About</Link>
      <Link to={`/contact/`}>Contacto</Link>
    </nav>
  )
}

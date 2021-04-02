import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Flex, Spacer } from "@chakra-ui/react"

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
    <Flex as="nav" w="full">
      <Link to={`/`}>
        <h3>{data.site.siteMetadata.title}</h3>
      </Link>
      <Spacer />
      <Link to={`/about/`}>About</Link>
      <Link to={`/contact/`}>Contacto</Link>
    </Flex>
  )
}

import React from "react"
import styled from "styled-components"

const StyledSectionName = styled.span`
  font-size: 1rem;
  color: #fff;
  background: blue;
  text-transform: capitalize;
`

export default function SectionName({ section }) {
  return <StyledSectionName>{section.replace(/-/g, " ")}</StyledSectionName>
}

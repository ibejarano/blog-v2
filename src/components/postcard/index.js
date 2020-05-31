import React from "react"
import CardContent from "./content"
import FeaturedImage from "./feature-image"
import styled from "styled-components"
import SectionName from "./section-name"

const StyledCard = styled.div`
  border-bottom: 2px solid #222;
  display: flex;
  margin-bottom: 1rem;
  min-height: 10rem;

  .card-content {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }
`

export default ({ post, noSectionName }) => {
  return (
    <StyledCard>
      <div className="card-content">
        {post.fields.section && !noSectionName && (
          <SectionName section={post.fields.section} />
        )}
        <CardContent post={post} />
      </div>
      {post.featuredImg && <FeaturedImage image={post.featuredImg} />}
    </StyledCard>
  )
}

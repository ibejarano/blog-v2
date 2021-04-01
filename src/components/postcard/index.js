import React from "react"
import CardContent from "./content"
import FeaturedImage from "./feature-image"
import SectionName from "./section-name"

export default ({ post, noSectionName }) => {
  return (
    <div>
      <div className="card-content">
        {post.fields.section && !noSectionName && (
          <SectionName section={post.fields.section} />
        )}
        <CardContent post={post} />
      </div>
      {post.featuredImg && <FeaturedImage image={post.featuredImg} />}
    </div>
  )
}

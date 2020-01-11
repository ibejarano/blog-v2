import React from "react"
import { Link } from "gatsby"

const Post = ({ post }) => {
  return <div><Link to={post.fields.slug}>{post.frontmatter.title}</Link> </div>
}

export default function({ posts }) {
  return (
    <div>
      <h2>Posts relacionados</h2>
        {posts.map(post => (
          <Post post={post.node} />
        ))}
    </div>
  )
}

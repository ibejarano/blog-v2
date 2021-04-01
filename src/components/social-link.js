import React from "react"

export default ({ name, user, url }) => {
  return (
    <a href={url}>
      <div>T</div>
      <div>{user}</div>
    </a>
  )
}

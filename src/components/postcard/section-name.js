import React from "react"

export default function SectionName({ section }) {
  return <span>{section.replace(/-/g, " ")}</span>
}

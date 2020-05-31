import React from "react"
import { css } from "@emotion/core"

export default function ReadingTime({ time }) {
  return (
    <span
      css={css`
        width: 170px;
        left: 0%;
        margin-left: -0.2rem;
        background: black;
        border-radius: 0 8px 0 8px;
        color: white;
        padding-left: 10px;
      `}
    >
      {time} min lectura
    </span>
  )
}

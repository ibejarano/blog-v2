import React from "react"

import { css } from "@emotion/core"

export default ({name, user, url}) => {
  return (
    <a href={url}
      css={css`
        background: red;
        width: 212px;
        height: 53px;
        transition: 0.2s ease-in-out;
        :hover {
          transform: translateX(-159px);
        }
        display: flex;
        flex-flow: row no-wrap;
      `}
    >
      <div
        css={css`
          flex-grow: 1;
          width: 53px;
        `}
      >
        T
      </div>
      <div
        css={css`
          flex-grow: 3;
          background: white;
          margin: auto;
        `}
      >
        {user}
      </div>
    </a>
  )
}

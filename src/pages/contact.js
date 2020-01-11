import React from "react"
import Layout from "../components/layout"
import {css} from '@emotion/core'

export default () => {
  return (
    <Layout>
      <div css={css`
        background: white;
        border:  4px solid black;
        padding: 0 1rem;
        `}>
        <h1>Contacto</h1>
        <p>
          Para contactarme puedes revisar cualquiera de mis redes sociales o
          escribirme a mi casilla de correo: ignbejarano@gmail.com{" "}
        </p>
      </div>
    </Layout>
  )
}

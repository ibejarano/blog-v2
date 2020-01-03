---
title: "Dia 3: Blog Secciones & Deploy"
date: "2020-01-03"
section: "100DaysOfGatsby"
---

## Agregando Secciones
Primero vi como<< agregar de manera programatica<< las secciones. Dado que las mismas fueron puestas en una carpeta `./src/posts/<nombre de seccion>`, hice una modificacion<< sobre el archivo `gatsby-config.js` en el plugin `gatsby-source-filesystem` dado que en la documentacion de dicho plugin menciona que pueden hacerse varias instancia del mismo, he decidido cambiar el `path` desde `./src/` hacia `./src/posts/`, si en un futuro necesito utilizar el plugin para otro directorio distinto se puede agregar otra instancia del mismo. En el `query` he puesto lo siguiente, para obtener el nombre de los directorios que definen las secciones.

```javascript
query {
  allDirectory(filter: { name: { ne: "posts" } }) {
    edges {
       node {
          name
      }
    }
  }
}
```

Como se observa, se aplico<< un filtro al resultado `"posts"` dado que es la carpeta raiz y no es de interes<< para hacer una seccion.

Se agrego<< un nuevo `field` para cada `node` de `remark` , dicho `field` corresponde a la seccion del nodo. Para luego poder crear la pagina aplicando como filtro a dicha seccion<<

Agregar en `gatsby-config.js` a la API de `createPage` la creacion de las paginas correspondiente a cada seccion<< como template he usado el archivo `index.js` pero cambiando el `query` de tal manera de agregar la variable `$sectionName` y el filtro, el `query` queda de esta manera:

```javascript
query($sectionName: String!){
  allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC},
          filter: {fields: {section: {eq: $section }}
              }) {
         totalCount
           edges {
             node {
               fields {
                 slug
                section
               frontmatter {
                date
                title
               }
     }
   }
  }
 }
}


```
## Deploy

Para hacer el Deploy se utilizo la plataforma Netlify.
El proximo paso es mejorar la puntuacion dada por Lighthouse.

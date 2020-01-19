---
title: Dia 12 - Filter
date: 2020-01-12
keywords: gatsby, graphql, react
---

Se me ocurrio hacer una implementacion para que, al final de cada post, poner
una lista de posts con contenido relacionado. Para manejar dicho contenido he
agregado a algunas `.md` el apartado de `keywords`, que se usaran para buscar dicho
contenido. Ademas habra un limite de posts relacionados, en este caso utilizare
un numero arbitrario. Entonces los pasos a seguir seran:

1. Buscar para cada posts, los tags relacionados.
2. Tomar solo 5 de esos tags.
3. Renderizar al final del post.

Al agregar los keywords, intercalando entre ellos una coma, necesito crear un
nuevo field, que utilice como entrada un string con comas y de alli pueda crear
un `Array`. Por lo que primero editamos en `gatsby-config.js` luego del chequeo
de que el nodo sea un archivo del tipo `Markdown`.

```js
const { keywords } = node.frontmatter
let tags;
if(keywords){ tags = keywords.split(",")}

createNodeField(
  node,
  name: `tags`,
  value: tags
)
```
Se agrega un chequep de que exista keywords definidas, de otra forma en la
propiedad `tags` sera del tipo `null`


## Ejecutando un query con el filtro
Ahora ejecutamos el siguiente `query` para obtener los posts relacionados de
acuerdo a las keywords de cada post

```js
query($tags: [String!]) {
  allMarkdownRemark(filter: {
    fields: {
      tags: {in: $tags }
    }
  })
  edges {
    nodes {
      frontmatter {
        title
        date
        }
   fields {
      slug
      }
    }
  }
}

```
En la creacion de cada pagina, en el apartado de context hay que agregar una
nueva variable, ya que esta sera pasada a cada blog posts como una query
variable. 

```javascript
context: {
  tags: node.fields.tags
}

```

En el `template` de cada `post` agregamos esta nueva query variable.

```javascript
query ($slug: String!, $tags: [String!]){
  ...
  allMarkdownRemark(filter ...)

}
```

Notar que hemos puesto que el tipo es un `Array` de `Strings`

---
title: "Dia 2"
date: "2020-01-02"
section: "100DaysOfGatsby"
---

En este día no tuve mucho tiempo. Cambié un poco la estructura respecto a los archivos .md, para poder crear secciones nuevas, la primera secciòn la llamè #100DaysOfGatsby. Esto debido a que tengo planeado usarla para otros temas. Además modifiqué un `query` para poder obtener las fechas en español.

Agregué un nuevo parámetro al `frontmatter` llamado `section`, para luego en el componente que renderiza el post incluya un badge indicando la seccion a la que pertenece el post.
Se agregò el tiempo de lectura que devuelve el plugin `remark`.

Se agrego el plugin `gatsby-remark-prismjs` para dar soporte de syntax highlight a los posts. Para hacerlo se siguio la documentacion en <a href="https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/" > este Link </a>


```javascript
function sum(a,b){
    return a + b
}
```

Mañana tendré más tiempo, crearé otras páginas para el blog (no posts)  

---
title: "Dia 5: Bug fix & social links"
date: "2020-01-05"
---

## Bug Fixing

Debido a que al agregar la posibilidad de que haya imagenes en los posts, lo se
hizo fue modificar un poco la estructura en la cual se escriben los mismos de la
siguiente manera:

```
-src
|
|-posts
|
|--seccion-1
|
|---imgs
|
|--seccion-2
|
|---imgs
```

Se agrega una nueva carpeta llamada `imgs` dentro de cada seccion en donde se
guardan dichos archivos. El problema que aparece es que en el momento en el que
se crean las paginas para cada seccion se utiliza la API de Gatsby `CreatePages`
en donde buscan cada carpeta dentro de `posts` y como aparece ahora una nueva
carpeta llamada `imgs` se crea una nueva pagina con ese nombre.

Para solucionar esto se agrega en `gatsby-config.js` una linea que verifica que
el nodo no se llame `"imgs"`, con esto se arregla el bug. 

Ademas, contamos con un componente que crea los links hacia las distintas
secciones. El componente cuando ejecuta el `query` mira los directorios en
`posts`, como resultado tambien devuelvo el directorio `posts` , y como no nos
interesa hacemos un `filter` quitando dicho resultado.

```javascript
    query {
      allDirectory(filter:
      { name: { neq: "posts" }}) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

```

Ahora bien, debemos agregar tambien a dicho filtro `imgs`. Si observamos en la
documentacion, el operador `neq` aplica el filtro unicamente sobre una variable
del tipo `String`, para aplicarlo dentro de un array de `String` hay que cambiar
el operador `neq` a `nin` tal como se muestra abajo.

```javascript
    query {
      allDirectory(filter:
      { name: { nin: ["posts", "imgs"] }}) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

```
Ahora se filtran los resultados segun lo que se encuentre en dicho `Array`.

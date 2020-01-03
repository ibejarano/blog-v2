---
title: "Elemento emergente en CSS"
date: "2020-01-03"
section: "Web development"
---

Una mini guia para dar un efecto interesante que da la impresion de que dicho elemento es clickeable, tal como se usa en este blog para cada post.

Primero creamos algunos elementos para poder aplicarle `CSS`:

```html
<div class="container">
  <div class="item"><h1> Item1 </h1></div>
  <div class="item"><h1> Item2 </h1></div>
  <div class="item"><h1> Item3 </h1></div>
  <div class="item"><h1> Item4 </h1></div>
</div>

```

Agregamos algo de estilizado para acomodar nuestros elementos utilizando `flex`

```css
   .container {
     display: flex;
     flex-flow: row wrap;
     justify-content: space-around;
    }

   .item {
     border: 2px solid black;
     padding: 0px 200px;
     margin-bottom: 20px;
     background: lightblue;
     transition: 0.1s ease-in-out;
   }
```

Primero defino algunas variables en `CSS` para que se vea cual es la logica:

```css
:root {
    --x-offset: 10px;
    --y-offset: 15px;
}
```
Ahora la parte importante, agregamos la pseudo-clase para cuando el mouse esta sobre el elemento:

```css
.item:hover {
    transform: translate( var(--x-offset) , var(--y-offset) );
    box-shadow: calc( var(--x-offset) *-1 ) calc(var(--y-offset) * -1 ) blue;
}

```

La condicion necesaria para que ocurra el efecto buscado es que el vector desplazamiento dado por `translate(x  y)` tiene que tener la direccion inversa al vector dado `box-shadow: box-x box-y color` o dicho de otra manera: `box-x = x * -1` y `box-y = y * -1`

Ejemplo en codepen:
<iframe height="265" style="width: 100%;" scrolling="no" title="emerging css" src="https://codepen.io/ibejarano/embed/oNgoGEM?height=265&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ibejarano/pen/oNgoGEM'>emerging css</a> by ibejarano
    (<a href='https://codepen.io/ibejarano'>@ibejarano</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>

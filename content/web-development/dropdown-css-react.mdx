---
title: Menu Dropdown con React y Styled Components
date: 2020-01-23
---

Hay muchas formas de hacer un menú clickeable para desplegar las opciones de un
menú, aquí presento una de ellas haciendo uso de la pseudo-clase `hover` utilizando únicamente CSS, pero si por cuestiones de UX es condición necesaria que el usuario haga click vamos a tener que hacer uso del Framework React y la libería Styled-Components.

### Que aprenderemos en este mini-tutorial
- React 
- Styled Components
- Pasar props a los Styled components
- Hook `useState`
- Componente funcional de React

## Generando un menú básico

Como primer medida vamos a considerar el siguiente menú:

```jsx
import React from 'react'

export default function Menu() {
  return (
        <div className="dropdown-container">
          <div className="dropdown-menu">
            <h1>Menu 1</h1>
            <ul className="dropdown-list">
              <li>item 1 1 </li>
              <li>item 1 2 </li>
            </ul>
          </div>
          <div className="dropdown-menu">
            <h1>Menu 2</h1>
            <ul className="dropdown-list">
              <li>item 2 1 </li>
              <li>item 2 2 </li>
            </ul>
          </div>
        </div>
      )
}
```

Al estar usando la libería `styled-components` las clases definidas son a título
explicativo/semántico, no tienen significado funcional.
Por el momento únicamente hemos definido un componente funcional puro.

## Definiendo los `styled-components`
En el mismo archivo vamos a definir el siguiente componente:
```jsx
const DropdownList = styled.ul`
  display: ${props => (props.enabled ? "flex" : "none")}
`
```
Reemplazamos el tag `ul` definido anteriormente y le agregamos el prop
`enabled` con la condición indicada. Además vamos a hacer uso del hook `useState` que define la variable `menuId` 

```jsx
import React from 'react'
import styled from 'styled-components'

const DropdownList = styled.ul`
  display: ${props => (props.enabled ? "flex" : "none")}
`

export default function Menu() {

  const [menuId , setMenuId] = React.useState(-1)

  return (
        <div className="dropdown-container">
          <div className="dropdown-menu">
            <h1>Menu 1</h1>
            <DropdownList enabled={menuId == 1} className="dropdown-list">
              <li>item 1 1 </li>
              <li>item 1 2 </li>
            </DropdownList>
          </div>
          <div className="dropdown-menu">
            <h1>Menu 2</h1>
            <DropdownList enabled={menuId == 2} className="dropdown-list">
              <li>item 2 1 </li>
              <li>item 2 2 </li>
            </DropdownList>
          </div>
        </div>
      )
}
```

Ahora únicamente nos queda 1 paso, el agregar el listener a cada menu. La
función que sera llamada será la siguiente:
```jsx
const unfoldMenu = (id) => {
  id === menuId ? setMenuId(-1) : setMenuId(id)
}
```

Como se observa en la función, si el `id` del menu que es clickeado coincide que
en el que actualmente está desplegada, esta procede a cerrarlo.

El componente final queda:


```jsx
import React from 'react'
import styled from 'styled-components'

const DropdownList = styled.ul`
  display: ${props => (props.enabled ? "flex" : "none")}
`

export default function Menu() {

  const [menuId , setMenuId] = React.useState(-1)

  const unfoldMenu = (id) => {
    id === menuId ? setMenuId(-1) : setMenuId(id)
  }

  return (
        <div className="dropdown-container">
          <div onClick={() => unfoldMenu(1)} className="dropdown-menu">
            <h1>Menu 1</h1>
            <DropdownList enabled={menuId == 1} className="dropdown-list">
              <li>item 1 1 </li>
              <li>item 1 2 </li>
            </DropdownList>
          </div>
          <div onClick={() => unfoldMenu(2)} className="dropdown-menu">
            <h1>Menu 2</h1>
            <DropdownList enabled={menuId == 2} className="dropdown-list">
              <li>item 2 1 </li>
              <li>item 2 2 </li>
            </DropdownList>
          </div>
        </div>
      )
}
```

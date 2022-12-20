# ALABAMA TATTOO & PIERCING SHOP
Shop del estudio de tatuajes [Alabama](https://grathienbeto.github.io/Alabama-Tattoo-Studio/), mi proyecto del Curso de Desarrollo Web de CODERHOUSE.

---

## Descripción del proyecto

El E-Commerce de Alabama permite realizar una simulación de compra de los artículos de la tienda. 
Si bien es un proyecto no muy elaborado en cuanto a la estética, trate de priorizar la parte lógica.

---

### E-commerce
Este proyecto representa la parte de Front-End de lo que sería el shop del estudio de tatuajes.

---

### Tecnologías
- Sitio desarrollado con React
- React-Router
- React-Bootstrap y Bootstrap*
- Firebase (Firestore)
- SASS


_Comencé usando bootstrap tal cual había aprendido en Desarrollo Web, luego empecé a usar los componentes de bootstrap como componentes de React, lo cual facílito un poco el desarrollo, si bien no está implementado en todo el sitio._

---

### Desarrollo del Sitio

1. Desarrollo de la barra de navegación y del _cartWidget_
Luego se le realizaron modificiaciones para que muestre el total de los items dentro del carrito.
2. El _itemListContainer_, _itemList_ e _item_. El contenedor es el smart component que le pasa información a sus hijos.  Permite el renderizado de las tarjetas de los productos.
3. Luego desarrolle _itemDetailContainer_ e _itemDetail_. El contenedor y los detalles del item (precio, stock, etc.). Dentro del itemDetail también tenemos el _itemCount_ para modificar la cantidad de objetos a comprar.
4. Desarrollo e implementación de **React Router**, y el uso de _useParams_ para hacer la creación dinámica de las págicas de los items (itemDetail) para cada uno.
5. Cambiamos la forma de pasar información, primero haciendo pasar de padre a hijo por medio de props, para luego implementar _Context_ de React.
6. Desarrollo de _Cart_ y sus hijos. Para plasmar la información de los productos agregados al carrito y su modificación (remove, clear).
7. Se implemento Firebase de Google. Se subió la información de los items a esta base de datos y se consumió gracias a _useEffect_. Luego se agrego la posibilidad de modificar la base de datos (stock de los items.)

---

### Dificultades

Si bien **Context** no me resultó difícil de entenderlo, si me costó aplicarlo. Algunos errores que tuve fueron los de no poder el Provider en el `index` sino ponerlo como padre de el `itemDetailContainer` y olvidarme de que tambien habia puesto el Provider como padre del `Cart`, por lo que tenía entre la navegación de los items del sitio no iba al carrito.

Otra dificultad fue la lógica del Cart, eso me llevo a darme cuenta que tengo que practicar más JS del que pensaba.

La mayor dificultad, fue un relativo poco tiempo para poder hacer todo. Entre trabajo, cosas de la vida, tiempo de cursado, y tengo que reconocer que el mundial tambien me quito tiempo, no pude dedicarle mucho tiempo a lo que fue el CSS. Eso me queda pendiente.


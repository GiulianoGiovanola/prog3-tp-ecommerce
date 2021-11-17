#  Eccomerce de Cafe Station

## Deployed on Vercel
https://prog3-ecommerce-2021.vercel.app/

## Components

###  Aplicación
Wrapper principal de la aplicación con React Router.

###  Botón
Botón reutilizable en diferentes componentes.

###  Carrito
Carrito de compras con resumen de productos agregados y cantidades.

###  CartContainer
Contenedor del carrito.

###  Cart
Icono de cart en el Navbar.

###  Checkout
Contenido del pago. Formulario y resumen del carrito.

###  CajaContenedor
Contenedor del Checkout.

###  ChechoutForm
Formulario de checkout con nombre, email y teléfono. Los datos se validan para completar la orden.

###  Footer
Footer de la aplicación con links a páginas y categorías.

###  Product
Contenedor de detalle de producto.

###  Grid
Grilla de productos.

###  Product Card
Contenedor de listado de productos para categorías.

###  Cargando
Svg de loading para llamadas asincrónicas a Firebase. Simula un cafe dando vueltas.

###  NavBar
Header y navbar con categorías principales.

##  Contextos

###  CartContext
Contexto y proveedor para el carrito. Funciones de consulta y totalización de productos.

##  Utils

###  getCategories
Funciones reutilizables para obtener las categorías desde Firebase, utilizadas en navbar y footer

### base de  fuego / índice
Configuración de firebase desde .env

## Future improvments (Course out of scope)

- Agregar las opciones de agregar, quitar y eliminar producto 
- Agregar separado de productos, cantidad y precio
- Mejoras de diseño
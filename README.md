#  Tienda de Cafe Station

# Components

###  Aplicación
Wrapper principal de la aplicación con React Router.

###  Botón
Botón reutilizable en diferentes componentes.

###  Carrito
Carrito de compras con resumen de productos agregados y posibilidad de editar cantidades.

###  CartContainer
Contenedor del carrito.

###  CartItemCount
Contador de productos en el carrito desde el Contexto del carrito.

###  CartWidget
Icono de cart en el Navbar.

###  Pagar
Contenido del pago. Formulario y resumen del carrito.

###  CajaContenedor
Contenedor del Checkout.

###  ChechoutForm
Formulario de checkout con nombre, email y teléfono. Los datos se validan para completar la orden.

###  Pie de página
Footer de la aplicación con links a páginas y categorías.

###  ItemCount
Contador de productos en el carrito.

###  ItemDetail
Detalle de producto.

###  ItemDetailContainer
Contenedor de detalle de producto.

###  ItemList
Grilla de Items (productos).

###  ItemListContainer
Contenedor de listado de productos para categorías.

###  Cargando
Svg de loading para llamadas asincrónicas a Firebase. Simula un cafe dando vueltas.

###  NavBar
Header y navbar con categorías principales.

###  SectionHeader
Componente reutilizable para encabezados de páginas y categorías. Recibe un título y una descipción.

##  Contextos

###  CartContext
Contexto y proveedor para el carrito. Funciones de consulta y totalización de productos.

##  Utils

###  getCategories
Funciones reutilizables para obtener las categorías desde Firebase, utilizadas en navbar y footer

### base de  fuego / índice
Configuración de firebase desde .env
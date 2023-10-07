import React, { Fragment } from 'react'
import TituloPrincipal from './components/TituloPrincipal/TituloPrincipal'
import Boton from './components/Boton/Boton'
import ItemCount from './components/ItemCount/ItemCount'
import Navbar from './components/Navbar/Navbar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
/* COMPONENTE PRINCIPAL DONDE SE ARMA TODO*/

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListConteiner greeting = "Bienvenidos a la Tienda"/>
      {/* <TituloPrincipal saludo="Hola Mundo"/>
      <Boton texto="Comprar" />
      <Boton texto="Eliminar" />
      <ItemCount stock={ 3 } />
      <ItemCount stock={ 7 } />
      <ItemCount stock={ 5 } />  */}
    </>
  )
}

export default App
import React, { useState } from 'react'
import { Button } from './Button'
import ItemDetailContainer from './ItemDetailContainer'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
  const [isVisible, setIsVisible] = useState(false)

  const mostrarDetalles = () =>{
    setIsVisible(true)
  }

  return (
    <div className='cardReal'>
        <h3>{producto.nombre}</h3>
        {}
        <p>{producto.precio}</p>
        <p>{producto.categoria}</p>
        <img src={producto.imagen} alt="" />
        <Button color="blue" funcion={mostrarDetalles}> 
          <Link to={`/detalle/${producto.id}`}>Ver Detalles </Link> 
        </Button>
        {
          isVisible ? <ItemDetailContainer id={producto.id} /> : <p>Click el boton</p>
        }
    </div>
  )
}
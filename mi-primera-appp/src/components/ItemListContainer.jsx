import React, { useEffect, useState } from 'react'
import { getProducts } from '../asyncmock'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'


function ItemListContainer({ }) {
  const [items, setItems] = useState([])
  const [cargando, setCargando] = useState(true)

  const { categoria } = useParams()


  useEffect(() => {
    setCargando(true)
    if (categoria) {
      getProducts().then(prods => setItems(prods.filter(e => e.categoria === categoria)))
        .catch(err => err)
        .finally(() => setCargando(false))
    } else {
      getProducts().then(prods => setItems(prods))
        .catch(err => err)
        .finally(() => setCargando(false))
    }

  }, [categoria])

  if (cargando) {
    return (
      <h3>cargando...</h3>
    )
  }

  return (
    <div className='Lista'>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer
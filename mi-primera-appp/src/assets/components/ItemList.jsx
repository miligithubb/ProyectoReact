import React from 'react'
import { Item } from './item'

export const ItemList = ( {items} ) => {

  return (
    <>
       {items?.map( (e) => {
        return (
            <Item key={e.id} producto={e} />
        )
       } )} 
    </>
  )
}
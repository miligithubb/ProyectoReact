import React from 'react'
import './Button.css'

export function Button(props) {


  return (
    <button style={{ backgroundColor: props.color }} onClick={props.funcion}> {props.children}</button>
  )
}



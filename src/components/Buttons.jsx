import React from 'react'
import './styles/button.css'

const Buttons = ({value,topValue,handleNegation,btnValue,setValue}) => {
  return (
    <button 
    className='button' 
    onClick={value==='+/-'? handleNegation:(e)=>setValue((btnValue+=e.target.value))}
    value={value}>{value}</button>
  )
}

export default Buttons
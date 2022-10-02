import React from 'react'
import './styles/button.css'

const Buttons = ({value,topValue,handleCancel,btnValue,setValue}) => {
  return (
    <button 
    className='button' 
    onClick={value==='C'? handleCancel:(e)=>setValue((btnValue+=e.target.value))}
    value={value}>{value}</button>
  )
}

export default Buttons
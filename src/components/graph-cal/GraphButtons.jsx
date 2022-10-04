import React from 'react'
import '../styles/graphButton.css'
function GraphButtons({value,setValue,btnValue, handleEquation}) {
  return (
    <button 
    className='button' 
    onClick={value==='Draw'?handleEquation:(e)=>setValue((btnValue+=e.target.value))}
    value={value}>{value}</button>
  )
}

export default GraphButtons
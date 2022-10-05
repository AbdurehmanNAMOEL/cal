import React from 'react'
import './styles/select.css'
const Selector = ({setSelectorValue,selectData,selectValue}) => {
     const handleSelect=(e)=>{
         setSelectorValue(e.target.value)
      
     }
    return (
    <select 
    onChange={handleSelect}
    value={selectValue} 
    className='selector'
    >
    {
    selectData.map(item=>
    <option value={item}>{item}</option>)
    }
    </select>
  )
}

export default Selector
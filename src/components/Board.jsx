import React, { useState } from 'react'
import Buttons from './Buttons'
import './styles/board.css'

const Board = () => {

    let [btnValue,setValue]=useState('')
    let [topValue,setTopValue]=useState('')
    let array=['%','CE','C','1/x','x2','square','7','8','9','4','5','6','3','2','1','+/-','0','.']
    // let array2=['Delete','/','C','x','-','+','=']

const handleEvaluation =(e)=>{
      
    if(btnValue===''){
         btnValue='0'
      }
      
      if(topValue.includes('+')){
         handleAddition(e)

      }else if(topValue.includes('*')){
        if(btnValue===''){
            btnValue='1'
        }
        handleMultiplication(e)
     
      }else if(topValue.includes('/')){
        if(btnValue===''||btnValue==='0'){
            setValue("Cannot be divided by zero");
        }else handleDivision(e)
        
      }else if(topValue.includes('-')){
            handleSubtraction(e)
      }else if(topValue.includes('%')){
            handleModule(e)
      }
      else{   
      setTopValue(btnValue+=e.target.value)
      setValue('')
    }
      
  }

  const handleCancel=()=>{
    setValue("0")
    setTopValue('')
  }
 
  let newString=''

const handleDelete=()=>{
    let value = btnValue.split('')

    for(let i=0;i<btnValue.length-1;i++){
               newString+=value[i]
    }
    setValue(newString)       
  
}

const handleParseInt=(value)=>{
    return parseInt(value)
}


const handleAddition =(e)=>{

        let value =handleParseInt(topValue) + handleParseInt(btnValue)
        setTopValue(value.toString().concat(e.target.value))
        setValue('')
}

const handleSubtraction =(e)=>{
    
        let value =handleParseInt(topValue) - handleParseInt(btnValue)
        setTopValue(value.toString().concat(e.target.value))
        setValue('')
}

const handleMultiplication =(e)=>{
    
        let value =handleParseInt(topValue) * handleParseInt(btnValue)
        setTopValue(value.toString().concat(e.target.value))
        setValue('')
}

const handleDivision =(e)=>{
    
        let value =handleParseInt(topValue) / handleParseInt(btnValue)
        setTopValue(value.toString().concat(e.target.value))
        setValue('')
}

const handleModule =(e)=>{
        let value =handleParseInt(topValue) % handleParseInt(btnValue)
        setTopValue(value.toString().concat(e.target.value))
        setValue('')
}

  return (
<div className='board-container'>
 <div className="value-display">
     <div className="top">{topValue}</div>
     <div className="bottom">{btnValue}</div>
   </div>

     <div className="btn-container">
        <div className="left-container">
        
        {array.map(item=>
         <Buttons
          topValue={topValue} 
          btnValue={btnValue} 
          setValue={setValue} 
          value={item}
          handleCancel={handleCancel}
         />)
        }
        </div>

     <div className="right-container">
       <button onClick={handleDelete} value={'delete'}>{'Delete'}</button>
       <button onClick={handleEvaluation} value={'/'}>{'/'}</button>
       <button onClick={handleEvaluation} value={'*'}>{'x'}</button>
       <button onClick={handleEvaluation}  value={'-'}>{'-'}</button>
       <button onClick={handleEvaluation} value={'+'}>{'+'}</button>
       <button onClick={handleEvaluation} >{'='}</button>
        
    </div>
   
     </div>
     
    </div>
  )
}

export default Board
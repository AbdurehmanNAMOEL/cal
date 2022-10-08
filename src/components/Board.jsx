import React, { useEffect, useState } from 'react'
import Buttons from './Buttons'
import './styles/board.css'
let newString=''
var value=0
let count =1

const Board = () => {

    let [btnValue,setValue]=useState('')
    let [topValue,setTopValue]=useState('')
  
    
    let array=['7','8','9','4','5','6','3','2','1','+/-','0','.']
  

const handleEvaluation =(e)=>{
      
   if(btnValue==='') btnValue='0'
   if(topValue.includes('+')) handleAddition(e)
   else if(topValue.includes('*')) handleMultiplication(e)
   else if(topValue.includes('/')){
        if(btnValue===''||btnValue==='0')setValue("Cannot be divided by zero");
        else handleDivision(e)
   }else if(topValue.includes('-'))handleSubtraction(e)
    else if(topValue.includes('%')) handleModule(e)
    else{   
      setTopValue(btnValue+=e.target.value)
      setValue('')
    }
      
  }


const handleCancel=()=>{
    setValue("0")
    setTopValue('')
}
 


const handleDelete=()=>{
    let value = btnValue.split('')
    if(value.length===1){
      setValue('')
    }else if(value.length>1){
      value.pop()
      for(let i=0;i<value.length;i++){
        newString+=value[i]
      }  
     setValue(newString) 
     newString=''  
    }
}

useEffect(()=>{},[btnValue])


const handleParseFloat=(value)=>{
    return parseFloat(value)
}


const handleAddition =(e)=>{

        value = handleParseFloat(topValue) + handleParseFloat(btnValue)
        setTopValue(value.toString().concat(e.target.value))
        setValue(value.toString())
}


const handleSubtraction =(e)=>{
      
        value = handleParseFloat(topValue) - handleParseFloat(btnValue)
        setTopValue(value.toString().concat(e.target.value))
        setValue(value.toString())
}



const handleMultiplication =(e)=>{
    
        value = handleParseFloat(topValue) * handleParseFloat(btnValue)
        setTopValue(value.toString().concat(e.target.value))
        setValue(value.toString())
}


const handleDivision =(e)=>{
   
        value = handleParseFloat(topValue) / handleParseFloat(btnValue)
        setTopValue(value.toString().concat(e.target.value))
        setValue(value.toString())
}


const handleModule =(e)=>{
        value = handleParseFloat(topValue) % handleParseFloat(btnValue)
        setTopValue(value.toString().concat(e.target.value))
        setValue(value.toString())
}



const handleRatio =()=>{
        
       if(btnValue===''){
        setValue('can not be divided by zero ')
       }else{
        let value =1/ handleParseFloat(btnValue)
        setValue(value.toString())
        
      }
}



const handleSquare =()=>{
        
       if(btnValue===''){
         btnValue='0'
       }
        let value =Math.pow(handleParseFloat(btnValue),2)
        setValue(value.toString())
        
      
}

const handleSquareRoot =()=>{
        
       if(btnValue===''){
         btnValue='0'
       }
        let value =Math.sqrt(handleParseFloat(btnValue))
        setValue(value.toString())
        
      
}
const handleNegation =()=>{
        
       if(btnValue==='' || '0'){
         setValue('')
       }
        let value =-1*handleParseFloat(btnValue)
        setValue(value.toString())
      
}

  return (


<div className='board-container'>
 
   <div className="value-display">
     <div className="top">{topValue}</div>
     <div className="bottom">{btnValue}</div>
   </div>

    <div className="btn-container">
     <div className="left-container">
      <button onClick={handleEvaluation} value={'%'}>{'%'}</button>
       <button onClick={handleCancel}>{'CE'}</button>
       <button onClick={handleCancel}>{'C'}</button>
       <button onClick={handleRatio}>{'1/X'}</button>
       <button onClick={handleSquare}>{'X2'}</button>
       <button onClick={handleSquareRoot} >{'root'}</button>
      
       {array.map(item=>
         <Buttons
          topValue={topValue} 
          btnValue={btnValue} 
          setValue={setValue} 
          value={item}
          handleNegation={handleNegation}
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
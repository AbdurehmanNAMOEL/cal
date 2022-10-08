import React, { useEffect, useState } from 'react'
import Buttons from '../Buttons'
import Selector from '../Selector'
import '../styles/tempHome.css'
let newString=''

const CurrencyHome = () => {
  const [selector1,setSelector1Value]= useState("Celsius")
  const [selector2,setSelector2Value]= useState("Celsius")
  const [convertedValue,setConvertedValue]=useState('')
  const [btnValue,setValue]=useState('')

  const handleParseFloat=()=>{
    return parseFloat(btnValue)
  }

  console.log((handleParseFloat()+273.115).toString());
  
  const convertCelsiusToKelvin=()=>{
      setConvertedValue((handleParseFloat()+273.115).toString())
  }

  const convertKelvinToCelsius=()=>{
      setConvertedValue((handleParseFloat()-273.115).toString())
  }

  const convertFahrenheitToCelsius=()=>{
       setConvertedValue(((handleParseFloat()-32)*5/9).toString())
  }

  const convertCelsiusToFahrenheit=()=>{
       setConvertedValue(((handleParseFloat()*9/5)+32).toString())
  }


  const convertFahrenheitToKelvin=()=>{
       setConvertedValue(((handleParseFloat()-32)*5/9+273.15).toString())
  }

  const convertKelvinToFahrenheit=()=>{
       setConvertedValue(((handleParseFloat()-273.15)*9/5+32).toString())
  }

  const handleNegation=()=>{

    setValue(-1*handleParseFloat())
  }
  
  useEffect(()=>{
  if(btnValue!==''){  
    if(selector1==='Celsius' && selector2==='Kelvin'){
        convertCelsiusToKelvin()
    }else if(selector1==='kelvin' && selector2==='Celsius'){
        convertKelvinToCelsius()
    }else if(selector1==='Celsius' && selector2==='Fahrenheit'){
        convertCelsiusToFahrenheit()
    }else if(selector1==='Fahrenheit' && selector2==='Celsius'){
        convertFahrenheitToCelsius()
    }else if(selector1==='Kelvin' && selector2==='Fahrenheit'){
        convertKelvinToFahrenheit()
    }else if(selector1==='Fahrenheit' && selector2==='Kelvin'){
        convertFahrenheitToKelvin()
    }
  }
  },[selector1,selector2,btnValue])

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


const handleCancel =()=>{
  setValue('')
  setConvertedValue('')
}

  let selectorArray =["Celsius", "Fahrenheit", "Kelvin" ]
  let array=['7','8','9','4','5','6','3','2','1','0','.']
  return (
    <div className='temp-container'>
      <div className="selector-left-container">
     <div className="unit-selector">
       <h1>{btnValue}</h1>
      <Selector 
      selectData={selectorArray} 
      selectValue={selector1}
      setSelectorValue={setSelector1Value}
      />
      <h1>{convertedValue}</h1>
      <Selector 
      selectData={selectorArray} 
      selectValue={selector2}
      setSelectorValue={setSelector2Value}
      />
     </div>

     </div>

     <div className="selector-input-value">
      <div className="display">
        <input onChange={(e)=>setValue(e.target.value)} type="text" value={btnValue} />
      </div>
      <div className="button-container">
        <button onClick={handleCancel} key={'c'} className='buttons'>C</button>
        <button onClick={handleNegation} key={'+/-'} className='buttons'>+/-</button>
        <button onClick={handleDelete} key={'delete'} className='buttons'>Delete</button>
        {
          array.map(item=>
          <Buttons 
          key={item} 
          setValue={setValue} 
          btnValue={btnValue} 
          value={item}
          />)
        }
      </div>
     </div>
    </div>
  )
}

export default CurrencyHome
import React, { useEffect, useState } from 'react'
import Buttons from '../Buttons'
import Selector from '../Selector'
import '../styles/tempHome.css'
let newString=''

let pi =3.14

const AngleConverterHome = () => {
  const [selector1,setSelector1Value]= useState("Degree")
  const [selector2,setSelector2Value]= useState("Degree")
  const [convertedValue,setConvertedValue]=useState('')
  const [btnValue,setValue]=useState('')

  const handleParseFloat=()=>{
    return parseFloat(btnValue)
  }


  
  const convertDegreeToRadians=()=>{
      setConvertedValue((handleParseFloat()*pi/180).toString())
  }

  const convertRadiansToDegree=()=>{
      setConvertedValue((handleParseFloat()*180/pi).toString())
  }

  const convertDegreeToGradient=()=>{
      setConvertedValue((handleParseFloat()*200/180).toString())
  }

  const convertGradientToDegree=()=>{
      setConvertedValue((handleParseFloat()*180/200).toString())
  }

  const convertRadiansToGradient=()=>{
      setConvertedValue((handleParseFloat()*pi/200).toString())
  }

  const convertGradientToRadians=()=>{
      setConvertedValue((handleParseFloat()*200/pi).toString())
  }
 

  const handleNegation=()=>{

    setValue(-1*handleParseFloat())
  }
  
  useEffect(()=>{
  if(btnValue!==''){  
    if(selector1==='Degree' && selector2==='Radians'){
        convertDegreeToRadians()
    }else if(selector1==='Radians' && selector2==='Degree'){
        convertRadiansToDegree()
    }else if(selector1==='Degree' && selector2==='Gradians'){
        convertDegreeToGradient()
    }else if(selector1==='Gradians' && selector2==='Degree'){
        convertGradientToDegree()
    }else if(selector1==='Gradians' && selector2==='Radians'){
        convertGradientToRadians()
    }else if(selector1==='Radians' && selector2==='Gradians'){
        convertRadiansToGradient()
    }
  }
  },[selector1,selector2,btnValue])

  const handleDelete=()=>{
    let value = btnValue.split('')
    for(let i=0;i<value.length-1;i++){
               newString+=value[i]
    }
    setValue(newString)       
  
}

const handleCancel =()=>{
  setValue('')
  setConvertedValue('')
}

  let selectorArray =["Degree", "Radians", "Gradians" ]
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

export default AngleConverterHome
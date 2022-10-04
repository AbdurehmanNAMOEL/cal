import React, { useState } from 'react'
import SideBar from '../SideBar'
import '../styles/graphHome.css'
import GraphButtons from './GraphButtons'
import GraphPlotter from './GraphPlotter'
const GraphPlotterHome = ({height,width}) => {
    let array=['x','(',')','*',"^",'+','-','/','7','8','9','4','5','6','3','2','1','0','.','sin','cos','log','ln','Draw']
  const [btnValue,setValue] = useState(' ')
  const [equation,setEquation] = useState('0')
  const handleEquation=()=>{
      setEquation(btnValue)
  }
  const handleCancel=()=>{
    setValue('')
    setEquation('')
  }
  return (
    <div className='graph-home'>
        <div className="graph">
            <GraphPlotter 
            equation={equation} 
            height={height}
            width={width}
            />
        </div>
        <div className="input">
            <input type={'text'} className="input-display" value={btnValue}></input>
            <div className="btn-container">
                <button className='button' onClick={handleCancel}>C</button>
                {
                array.map(item=><GraphButtons handleEquation={handleEquation} setValue={setValue} btnValue={btnValue} value={item}/>)
            }
        </div>
            
            
        </div>
    </div>
  )
}

export default GraphPlotterHome
import React, { useEffect} from 'react'
import functionPlot from 'function-plot'
import '../styles/graph.css'


const GraphPlotter = ({equation,height,width}) => {

   
useEffect(()=>{
 
 
 functionPlot({
        target:'#plotter',
        width:width,
        height:height,
        yAxis:{domain:[-5,5]},
        xAxis:{domain:[-5,5]},
        grid:true,
        data:[{fn:`${equation?equation:'0'}`}]
    })
    })

  return (
    <div id='plotter'></div>
  )
}

export default GraphPlotter
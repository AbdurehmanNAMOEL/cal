
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import GraphPlotter from './components/graph-cal/GraphPlotter';
import GraphPlotterHome from './components/graph-cal/GraphPlotterHome';
let initial =''
let finalValue=0
let final2=1
function App() {
 
    const [width,setWidth]=useState(330)
    const [height,setHeight]=useState(330)
    let windowWidth=window.innerWidth

const checkWindowSize=()=>{
    
    if(windowWidth<=540){
        setWidth(330)
        setHeight(330)
    }else if(windowWidth>540){
       setWidth(600)
       setHeight(600)
    }
    console.log(width,height)
}

useEffect(()=>{
 checkWindowSize()
 console.log(window.innerHeight);
 
},[window.innerWidth])
  
  return (
    <div className="App">
   


    {/* <Board/> */}

    <GraphPlotterHome width={width} height={height}/>
    </div>
  );
}

export default App;


import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import GraphPlotter from './components/graph-cal/GraphPlotter';
import GraphPlotterHome from './components/graph-cal/GraphPlotterHome';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SideBar from './components/SideBar';
let initial =''
let finalValue=0
let final2=1
function App() {
 
    const [width,setWidth]=useState(330)
    const [height,setHeight]=useState(330)
    let windowWidth=window.innerWidth

const checkWindowSize=()=>{
    
    if(windowWidth<=540){
        setWidth(300)
        setHeight(300)
    }else if(windowWidth>540){
       setWidth(600)
       setHeight(600)
    }
    console.log(width,height)
}

useEffect(()=>{
 checkWindowSize()
 console.log(window.innerHeight);
 
},[])
  
  return (
    <div className="App">
      <Router>
        <SideBar/>
        <Routes>
          <Route exact path ={'/'} element={<Board/>}/>
          <Route exact path ={'/graph'} element={<GraphPlotterHome width={width} height={height}/>}/>
        </Routes>
      </Router>
 

    

  
   
    </div>
  );
}

export default App;

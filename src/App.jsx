
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import GraphPlotter from './components/graph-cal/GraphPlotter';
import GraphPlotterHome from './components/graph-cal/GraphPlotterHome';
import { BrowserRouter as Router,Routes,Route, useNavigate } from 'react-router-dom';
import SideBar from './components/SideBar';
import AngleConverterHome from './components/angle/AngleConverterHome';
import TempHome from './components/Temperature/TempHome';
import CurencyHome from './components/currency/CurencyHome';

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
          <Route exact path ={'/angle'} element={<AngleConverterHome/>}/>
          <Route exact path ={'/temp'} element={<TempHome/>}/>
          <Route exact path ={'/currency'} element={<CurencyHome/>}/>
        </Routes>
      </Router>
 

    

  
   
    </div>
  );
}

export default App;

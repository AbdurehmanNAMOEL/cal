
import { useState } from 'react';
import './App.css';
import Board from './components/Board';
let initial =''
let finalValue=0
let final2=1
function App() {
  let [value,setValue]=useState('')
  
  
  return (
    <div className="App">
   


    <Board/>
    </div>
  );
}

export default App;

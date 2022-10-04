import React from 'react'
import { Link } from 'react-router-dom'
import './styles/sidebar.css'
import AngleIcon from '../images/angle.svg'
import CalculatorIcon from '../images/calculator.svg'
import GraphIcon from '../images/graph.svg'
import TempIcon from '../images/temperature.svg'
import CurrencyIcon from '../images/currency.svg'
const SideBar = () => {
  return (
    <div className='side-bar-container'>
     
        <Link className='box1' to={'/'}> <img className='icon' src={CalculatorIcon} alt="" /> </Link>
        <Link className='box2' to ={'/graph'} id='edit'> <img  className='icon' src={GraphIcon} alt="" /></Link>
        <Link className='box3' to ={'/angle'} id='edit'> <img  className='icon' src={AngleIcon} alt="" /></Link>
        <Link className='box4' to ={'/currency'}> <img className='icon' src={CurrencyIcon} alt="" /></Link>
        <Link className='box5' to ={'/temp'} id='edit'> <img className='icon' src={TempIcon} alt="" /></Link>
     
    </div>
  )
}

export default SideBar
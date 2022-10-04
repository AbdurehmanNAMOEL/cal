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
      <ul>
        <li> <img className='icon' src={CalculatorIcon} alt="" /> <Link className='link' to={'/'}>Standard</Link></li>
        <li id='edit'> <img  className='icon' src={GraphIcon} alt="" /><Link className='link' to={'/graph'}>Graph</Link></li>
        <li id='edit'> <img  className='icon' src={AngleIcon} alt="" /><Link className='link' to={'/angle'}>Angle</Link></li>
        <li> <img className='icon' src={CurrencyIcon} alt="" /><Link className='link' to={'currency'}>Currency</Link></li>
        <li id='edit'> <img className='icon' src={TempIcon} alt="" /><Link className='link' to={'temp'}>Temp</Link></li>
      </ul>
    </div>
  )
}

export default SideBar
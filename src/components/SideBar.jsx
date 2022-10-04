import React from 'react'
import { Link } from 'react-router-dom'
import './styles/sidebar.css'
const SideBar = () => {
  return (
    <div className='side-bar-container'>
      <ul>
        <li><Link className='link' to={'/'}>Standard</Link></li>
        <li><Link className='link' to={'/graph'}>Graph</Link></li>
        <li><Link className='link' to={'/angle'}>Angle</Link></li>
        <li><Link className='link' to={'currency'}>Currency</Link></li>
        <li><Link className='link' to={'temp'}>Temperature</Link></li>
      </ul>
    </div>
  )
}

export default SideBar
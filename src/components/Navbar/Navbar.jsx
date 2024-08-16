import React from 'react'
import "./Navbar.css"
import chip from "../../assets/chiplogo.png"
import search from "../../assets/search.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={chip} alt='xxxxx' className='logo'/>
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CHIPS</li>
            <li>SERVICES</li>
        </ul>

        <div className='search-box'>
            <input type='text' placeholder='search'/>
            <img src={search} alt='xxxxx'/>
        </div>


    
    </div>
 
  )
  
}


export default Navbar

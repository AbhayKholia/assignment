import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <h3 className='logo'>c</h3>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>EXPLORE</li>
          </Link>
          <Link to='/Community' className='about'>
            <li>MENTORS</li>
          </Link>
          <Link to='/Explore' className='services'>
            <li>BLOG</li>
          </Link>
        
          <Link to='/Mentors' className='home'>
            <li>COMMUNITY</li>
          </Link>
        </ul>
       <div className="btns">
        <button>Join Us</button>
     </div>

        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar
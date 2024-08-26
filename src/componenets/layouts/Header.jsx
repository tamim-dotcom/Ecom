import React from 'react'
// import {IoFastFood} from "react-icons/io5";
import { Link } from 'react-router-dom';
import {FiShoppingCart,FiLogIn} from "react-icons/fi";
import {AiFillCodepenCircle} from 'react-icons/ai'
import {FaUser} from "react-icons/fa";
import {motion} from "framer-motion"


const Header = ({isAuthenticated=true}) => {
  return (
  <nav>
    <motion.div initial={{x:"-100%"}} whileInView={{x:0}}>
        {/* <IoFastFood/> */}
       <AiFillCodepenCircle/> 
    </motion.div>
    <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart"><FiShoppingCart/></Link>
        <Link to={isAuthenticated ? "me":"/login"}>
            {isAuthenticated ? <FaUser/> : <FiLogIn/>}
        </Link>
    </div>
  </nav>
  )
}

export default Header

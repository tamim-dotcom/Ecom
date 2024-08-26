import React from 'react'
import {motion} from "framer-motion"
const MenuCard = ({itemNumber,burgerSrc,price,title,handler,delay=0}) => {
  return (
  <motion.div className='menuCard' initial={{x:"-100%",opacity:0}} whileInView
  ={{x:0,opacity:1}} transition={{delay}}>
    <div>
        Item {itemNumber}
    </div>
    <menu>
        <img src={burgerSrc} alt={itemNumber} />
        <h5>Rs:{price}</h5>
        <p>{title}</p>
        <button onClick={()=>handler(itemNumber)}>Buy Now</button>
    </menu>
  </motion.div>
  )
}

export default MenuCard

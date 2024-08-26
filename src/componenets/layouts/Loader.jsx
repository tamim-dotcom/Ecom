import React from 'react'
import {IoFastFoodOutline} from 'react-icons/io5'

import {motion} from 'framer-motion'
const Loader = () => {
    const animation={
        initial:{
            opacity:0
        },
        Animate:{
            opacity:1
        },
        transition:{
            ease:"linear",
            repeat:"infinity",
            repeatType:"reverse"
        }
    }
  return (
    <div  className='loader'>
        <IoFastFoodOutline/>

        <div>
            <motion.p {...animation}>
                Loading...
            </motion.p>
        </div>
    </div>
  )
}

export default Loader

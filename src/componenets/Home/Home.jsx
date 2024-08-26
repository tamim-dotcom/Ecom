import React from 'react'
import {motion} from "framer-motion"
import Founder from './Founder'
import Menu from './Menu'

const Home = () => {
  const animation={
    initial:{
      x:"-100%",
      opacity:0
    },
    whileInView:{
      x:0,
      opacity:1
    }
  }
  return (
<>
<section className='home'>
    <div>
      <motion.h1 {...animation}>Coding t-shirts wala</motion.h1>
      <motion.p {...animation} transition={{delay:0.2}}>Give yourself a awesome quality coding t-shirts</motion.p>
    </div>
    <motion.a href="#menu" initial={{y:"100%",opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.4}}>
      explore menu
    </motion.a>
   </section>
   <Founder/>
   <Menu/>
</>
  )
}

export default Home

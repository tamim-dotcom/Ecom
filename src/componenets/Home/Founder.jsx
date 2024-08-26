import React from 'react'
import {motion} from "framer-motion"
// import me from '../../assets/bg.jpg'
import me from '../../assets/profile.PNG'
const Founder = () => {
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
 <section className='founder'>
    <motion.div {...animation}>
        <img src={me} alt="#" height={200} width={200} />
        <h3>Md Tamim Ghazali</h3>
        <p>
            Hey,Everyone I am Md Tamim Ghazali,the founder of coding t-shirts wala.{" "} <br />
            Our aim is to create the most quality coding t-shirts on the planet
        </p>
    </motion.div>
 </section>
  )
}

export default Founder

import React from 'react'
import {motion} from 'framer-motion'
import {FcGoogle} from 'react-icons/fc'
const Login = () => {
  return (
    <section className='login'>
        <motion.button initial={{y:"-100"}} whileInView={{y:0}} transition={{delay:0.4}}>
            Login with google
            <FcGoogle/>
        </motion.button>
    </section>
  )
}

export default Login

import React from 'react'
import {motion} from 'framer-motion'
// import profileImage from '../../assets/bg.jpg'
import profileImage from '../../assets/profile.PNG'
import {Link} from 'react-router-dom';
import {MdDashboard} from 'react-icons/md'
const Profile = () => {
    const animation={
        initial:{
            y:"-100%",
            opacity:0
        },
        animate:{
            y:"0%",
            opacity:1

        }
    }
  return (
<section className='profile'>
<main>
    <motion.img src={profileImage} alt="User"  {...animation} height={100} width={100}></motion.img>
    <motion.h5  {...animation} transition={{delay:0.4}}>Md Tamim Ghazali</motion.h5>
    <motion.div {...animation} transition={{delay:0.6}}>
        <Link to='/admin/dashboard' style={{borderRadius:0,backgroundColor:"rgb(40,40,40)"}}>Dashboard
        <MdDashboard/>
        </Link>
    </motion.div>

    <motion.div initial={{x:"-100vw",opacity:0}}  animate={{x:0,opacity:1}}>
        <Link to='/myorders'>Orders</Link>
    </motion.div>

    <motion.button initial={{x:"-100vw",opacity:0}}  animate={{x:0,opacity:1}} transition={{delay:0.3}}>
        Logout
    </motion.button>
</main>
</section>
  )
}

export default Profile

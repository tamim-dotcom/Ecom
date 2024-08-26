import React from 'react'
import {AiFillInstagram,AiFillYoutube,AiFillGithub} from 'react-icons/ai'
const NewFooter = () => {
  return (
  <footer>
    <div>
    <p>All rights reserved</p>
    </div>
    <div>
    <h4>Follow Us</h4>
            <a href="https://youtube.com" target="_blank" ><AiFillYoutube/></a>
            <a href="https://instagram.com" target="_blank" ><AiFillInstagram/></a>
            <a href="https://github.com" target="_blank" ><AiFillGithub/></a>
    </div>
    
  </footer>
  )
}

export default NewFooter

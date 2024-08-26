import React from 'react'
// import {Link} from 'react-router-dom'
import {AiFillInstagram,AiFillYoutube,AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
        <div>
            <h2>Coding t-shirts wala</h2>
            <p>We are trying to give you the best coding t-shirts</p>
            <br />
            <em>We give attention to genuine feedback.</em>
            <strong>All rights reserved @codingT-shirtsWala</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <a href="https://youtube.com"><AiFillYoutube/></a>
            <a href="https://instagram.com"><AiFillInstagram/></a>
            <a href="https://github.com"><AiFillGithub/></a>

        </aside>
    </footer>
  )
}

export default Footer

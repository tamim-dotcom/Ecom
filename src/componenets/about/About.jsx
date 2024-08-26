import React from "react";
import {RiFindReplaceLine} from 'react-icons/ri'
// import profileImage from '../../assets/bg.jpg'
import profileImage from '../../assets/profile.PNG'
import {Link} from 'react-router-dom'
const About = () => {
  return (
 <section className="about">
    <main>
        <h1>About Us</h1>
        <article>
            <h4>Coding t-shirts wala</h4>
            <p>We are coding t-shirts wala .The place for most quality coding t-shirts on the entire earth</p>
            <p>Explore the various type of coding t-shirts.Click below to see the menu</p>
            <Link to=''><RiFindReplaceLine/></Link>
        </article>

        <div>
            <h2>Founder</h2>
            <article>
                <div>
                    <img src={profileImage} alt="Founder" />
                    <h3>Md Tamim Ghazali</h3>
                </div>
                <p>I am Md Tamim Ghazali.the founder of Coding t-shirts wala.Affiliated to God quality</p>
            </article>
        </div>
    </main>
 </section>
  );
};

export default About;

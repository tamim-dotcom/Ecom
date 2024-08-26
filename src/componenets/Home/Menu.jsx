import React from 'react'
import MenuCard from './MenuCard'
// import burger1 from '../../assets/img.jpg'
import item1 from '../../assets/item1.jpeg'
// import item2 from '../../assets/item2.jpg'
import item3 from '../../assets/item3.jpg'

const Menu = () => {
    const addToCart=()=>{
        console.log("Added to the cart");
    }
  return (
    <section id='menu'>
        <h1>MENU</h1>
        <div>
            <MenuCard itemNumber={1} burgerSrc={item1} price={550} title="Coding  t-shirt" handler={addToCart} delay={0.2}/>
            <MenuCard itemNumber={2} burgerSrc={item1} price={550} title="I don't test my code" handler={addToCart} delay={0.4}/>
            <MenuCard itemNumber={3} burgerSrc={item3} price={499} title="Eat Sleep Code" handler={addToCart} delay={0.8}/>
        </div>
    </section>
  )
}

export default Menu

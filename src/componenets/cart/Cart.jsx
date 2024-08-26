import React from 'react';
import burger1 from '../../assets/img.jpg'
import item1 from '../../assets/item1.jpeg'
import item3 from '../../assets/item3.jpg'
// import burger1 from '../../assets/img.jpg'
import {Link} from 'react-router-dom';

const CartItem =({title,image,value,increment,decrement})=>(

    <div className="cartItem">
    <div>
        <h4>{title}</h4>
        <img src={image} alt="" />
    </div>
    <div>
        <button onClick={decrement}>-</button>
        <input type="number"  readOnly value={value}/>
        <button onClick={increment}>+</button>
    </div>
</div>


)
const Cart = () => {
    const increment=(item)=>{
        console.log("Incremented by 1...");

    }
    const decrement=(item)=>{
        console.log("Decremented by 1...");

    }
  return (
      <section className='cart'>
    <main>
        <CartItem title="Coding t-shirts" image={item1} value={0} increment={()=>increment(1)} decrement={()=>decrement(1)}/>
        <CartItem title="I don't test my code" image={item1} value={0} increment={()=>increment(2)} decrement={()=>decrement(2)}/>
        <CartItem title="Eat Sleep Code" image={item3} value={0} increment={()=>increment(3)} decrement={()=>decrement(3)}/>

        <article>
            <div>
                <h4>Sub Total</h4>
                <p>Rs:{230}</p>
            </div>
            <div>
                <h4>Tax</h4>
                <p>Rs:{230*0.18}</p>
            </div>
            <div>
                <h4>Shipping Charges</h4>
                <p>Rs:{100}</p>
            </div>
            <div>
                <h4>Total</h4>
                <p>Rs:{230+230*0.18+100}</p>
            </div>
            <Link to="/shipping">Checkout</Link>
        </article>
    </main>

  </section>
  )
}

export default Cart

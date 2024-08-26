import React from 'react'

const ConfirmOrder = () => {
  return (
   <section className='confirmOrder'>
    <main>
        <h1>Confirm Order</h1>
        <form >
            <div>
                <label htmlFor="cash">Cash on Delivery</label>
                <input type="radio"  name='payment'/>
            </div>
            <div>
                <label htmlFor="cash">Online</label>
                <input type="radio"  name='payment'/>
            </div>
            <button type='submit'>Place Order</button>
        </form>
    </main>

   </section>
  )
}

export default ConfirmOrder

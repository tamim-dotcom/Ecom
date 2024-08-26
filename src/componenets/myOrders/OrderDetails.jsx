import React from 'react'

const OrderDetails = () => {
  return (
<section className='orderDetails'>
    <main>
        <h1>Order Details</h1>
        <div>
            <h1>Shipping</h1>
            <p><b>Address</b>{'India'}</p>
        </div>

        <div>
            <h1>Contact</h1>
            <p><b>Name</b>{'Md Tamim Ghazali'}</p>
            <p><b>Phone</b>{1239821038}</p>
        </div>

        <div>
            <h1>Status</h1>
            <p><b>Order Status</b>{'Processing'}</p>
            <p><b>Placed At</b>{"10-10-2022"}</p>
            <p><b>Delivery Date</b>{"10-10-2022"}</p>
        </div>

        <div>
            <h1>Payment</h1>
            <p><b>Payment Method</b>{'Online'}</p>
            <p><b>Payment reference</b>#{'asdsakdjaksjd'}</p>
            <p><b>Paid At</b>{"10-10-2022"}</p>
        </div>

        <div>
            <h1>Amount</h1>
            <p><b>Items Total</b>Rs:{1200}</p>
            <p><b>Shipping Charges</b>Rs:{200}</p>
            <p><b>Tax</b>Rs:{100}</p>
            <p><b>Total</b>Rs:{100+200+100}</p>
        </div>

        <article>
            <h1>Order Items</h1>
            <div>
                <h4>Coding t-shirts</h4>
                <div>
                    <span>{12}</span> x <span>{100}</span>
                </div>
            </div>

            <div>
                <h4>I don't test my code</h4>
                <div>
                    <span>{12}</span> x <span>{100}</span>
                </div>
            </div>

            <div>
                <h4>Eat Sleep Code</h4>
                <div>
                    <span>{12}</span> x <span>{100}</span>
                </div>
            </div>

            <div>
                <h4 style={{fontWeight:800}}>Sub Total</h4>
                <div style={{fontWeight:800}}>Rs:{12300}</div>
            </div>
        </article>
    </main>
</section>
  )
}

export default OrderDetails

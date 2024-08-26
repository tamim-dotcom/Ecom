import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai'
import {GiArmoredBoomerang} from 'react-icons/gi'
const Orders = () => {
    const arr=[1,2,3,4]
  return (
<section className='tableClass'>

<main>
    <table>
        <thead>
            <tr>
                <th>Order Id </th>
                <th>Status </th>
                <th>Item Qty</th>
                <th>Amount</th>
                <th>User</th>
                <th>Payment Method</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
           {
            arr.map(i=>(
                <tr key={i}>
                <td>#isjidoasjdo</td>
                <td>Processing</td>
                <td>20</td>
                <td>Rs:200</td>
                <td>Md Tamim Ghazali</td>
                <td>COD</td>
                <td>
                    <Link to="/orders/${'id'}"> 
                   
                        <AiOutlineEye/>
                    </Link>

                    <button>
                    <GiArmoredBoomerang/>
                    </button>
                </td>
               

            </tr>
            ))
           }
        </tbody>
    </table>
</main>

</section>
  )
}

export default Orders

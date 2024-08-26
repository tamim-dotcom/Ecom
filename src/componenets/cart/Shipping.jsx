import React from 'react'
import {Country,State} from 'country-state-city'

const Shipping = () => {
  return (
 <section className='shipping'>
    <main>
        <h1>Shipping details</h1>
        <form >
            <div>
                <label htmlFor="hno">H.No</label>
                <input type="text" placeholder='Enter house number'/>
            </div>
            <div>
                <label htmlFor="city">Country</label>
                <select name="" id="">
                    {/* <option value="">Country</option> */}
                    {
                        Country && Country.getAllCountries().map(i=>(
                        <option value={i.isoCode} key={i.isoCode}>{i.name}</option>))
                    }
                </select>
             
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input type="text" placeholder='Enter city name'/>
            </div>
            <div>
                <label htmlFor="city">State</label>
                <select name="" id="">
                    {/* <option value="">jhumka</option> */}
                  
                       {
                        State && State.getStatesOfCountry("NP").map(i=>(
                        <option value={i.isoCode} key={i.isoCode}>{i.name}</option>))
                    }
                  
                </select>
             
            </div>
            <div>
                <label htmlFor="pincode">Pincode</label>
                <input type="number" placeholder='Enter pncode'/>
            </div>
            <div>
                <label htmlFor="num">Phone Number</label>
                <input type="number" placeholder='Enter phone number'/>
            </div>
            <button type='submit'>Confirm Order</button>
        </form>
    </main>
    
 </section>
  )
}

export default Shipping

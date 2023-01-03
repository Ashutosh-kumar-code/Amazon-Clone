import React from 'react'
import "../buynow/right.css"
export default function Right() {
  return (
    <div className='right_buy'>
      <div className="right_img">  
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg" />
      </div> 
      
      <div className="cost_right">
        <p >Your Order Is Eligible for FREE delivery</p>
        <span style={{ color:"#565959"}}> Slwct The option at  Checkout. Details</span>
        <h4 style={{
            paddingTop:"19px", fontSize:"21px"  }}>SubTotal(1 iteams:):<span style={{color:"black" , fontWeight:"700"}}>4090.00</span>
        </h4>
        <button type='button'> Proceed To Buy</button>

        <div className='emi'>
            Emi Available
        </div>
      </div>
    </div>
  )
}
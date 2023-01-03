import React from 'react'
import '../buynow/buynow.css'
import { Divider } from '@mui/material'
import Option from './Option'
import Subtotal from './Subtotal'
import Right from './Right'

export default function Buynow() {
    return (
        <div className='buy_section'>
            <div className='buynow_container'>
                <div className='left_buy'>
                    <div className='upper_title'>
                       <h2>Shopping Cart</h2>
                       <p className='select_i'>Select all iteams</p>
                       <span className='left_price'>Price</span>
                    </div>
                   
                    <div className="iteam_container">
                    
                        <img src="https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70" alt="" />
                        <div className="iteam_details">
                            <div className="para_title">
                                <h3 style={{ fontWeight: "600" }}>Molif Sence 500 SmartWatch (Black Starp , Freesize)</h3>
                                <p style={{color:"black" , fontWeight:"bold", fontSize:'20px'}}>4049.00</p>
                            </div>

                            <h4>Smart Wtaches</h4>

                            <p style={{ color: "orange"}}>Usually dispatched in 8 days </p>
                            <p1 className='pregraph_d'>Eligible for FREE Shipping </p1>
                            <div className="product_tag">
                                <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                               <Option/>
                            </div>
                        </div>
                         
                    </div>
                    <Subtotal/>
                </div>
            </div>

            <div className-="r_buy">
                <Right/>
            </div>
        </div>
    )
}
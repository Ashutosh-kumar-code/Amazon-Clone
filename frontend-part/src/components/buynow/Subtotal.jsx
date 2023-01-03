import React from 'react'

export default function Subtotal() {
  return (
    <div className='sub_iteam'>
      <h4 style={{borderTop:"1px solid gray", display:"flex" ,justifyContent:"flex-end",alignItems:"center", padding:"10px"}}> 
        subtotal( 1 iteam: ) <span style={{  fontWeight:700,color:"#111" ,fontSize:"20px" }}>4049.00</span>
      </h4>
    </div>
  )
}
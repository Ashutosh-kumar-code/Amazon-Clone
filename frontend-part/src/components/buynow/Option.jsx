import React from 'react'

export default function Option() {
  return (
    <div className='add_remove_select'>
      <select>
        <option value="1">1</option>
        <option value="1">2</option>
        <option value="1">3</option>
        <option value="1">4</option>
        <option value="1">5</option>
      </select>
    <p style={{ cursor:"pointer"}}>Delete</p><span style={{paddingTop:"10px"}}>|</span>
    <p style={{ cursor:"pointer"}}  className="for_removed">Save or Later</p><span style={{paddingTop:"10px"}}>|</span>
    <p style={{ cursor:"pointer"}} className="for_removed">See More Like this</p>

    </div>
  )
}
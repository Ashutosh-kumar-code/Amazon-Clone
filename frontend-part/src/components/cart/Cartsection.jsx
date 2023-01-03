import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Product } from '../home/Product';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
import '../cart/cart.css';

export default function Cartsection() {
  const { id } = useParams("");

    const [inddata, setInddata] = useState("");
console.log("indata"+inddata);
// console.log("id h = "+id);
const getinddata = async () => {
  const res = await fetch('/getproductsone/:id', {
      method: "GET",
      headers: {
         
          "Content-Type": "application/json"
      }
      
  });

  const data = await res.json();
  console.log(data);

  if (res.status !== 201) {
      alert("no data available")
  } else {
      console.log("ind mila hain");
      setInddata(data);
  }
};



// const usersUrl = 'http://localhost:3003/users';
const usersUrl = `/getproductsone/${id}`;

 const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

const getAllUsers = async () => {
  let response = await getUsers();
  // setUsers(response.data);
  console.log("data h -- = "+response.data)
}
useEffect(() => {
  getAllUsers();
  getinddata();
}, [id]);



  return (
    <div className='product_container'>
         <div className="left_container">
             <img src="{inddata.detailUrl}" alt="" />
            <div className="crt_btn">
              <button className='btn1'>Add To Cart</button>
              <button className='btn2'>By Now</button>
            </div>
         </div>
         <div className="right_container">
              <h3>Fitness Gear</h3>
              <h4>
                pigeon FAVOURUTE Electrical kettele (1.5 l ,Sliver ,Black)
                <p className="mrp">M.R.P : 1195</p>
                <p>Deal O the Day:<span style={{color:"#B12704"}}>625</span></p>
                <p>you save :570(47%) :<span style={{color:"#B12704" }}>625.00</span></p>
                <div>
                  <h5 style={{color:"red"}}> Discount:<span style={{color:"black" }}>Extra 10% percent off</span></h5>
                  <h4 >Free Delivery:<span>oct8-21 </span>Detsils</h4>
                  <p>Fastest delivery :<span></span>Tommorow 11 Am</p>
                  <div>
                    <p className="description"> About the iteam : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta provident necessitatibus cum omnis. Incidunt aspernatur maxime recusandae, ut velit doloremque.</p>
                  </div>
                </div>
              </h4>
         </div>
    </div>
  )
}
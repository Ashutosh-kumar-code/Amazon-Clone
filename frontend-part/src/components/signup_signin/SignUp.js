import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function SignUp() {

    const [udata,setUdata] = useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""
    })

const  adddata= (e)=>{
    const {name,value} = e.target;
      setUdata(()=>{
        return{
            ...udata,
            [name]:value
        }
      })
}
console.log(udata)
  return (
    <>
   <section>
    <div className="sign_container">
        <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazonlogo" />
        </div>
        <div className="sign_form">
            <form action="">
                <h1>Sign-Up</h1>
                <div className="form_data">
                    <label htmlFor="fname">Your name</label>
                    <input type="text" name='fname' id='fname' value={udata.fname} onChange={adddata}/>
                </div>
                <div className="form_data">
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' value={udata.email} onChange={adddata}/>
                </div>
                <div className="form_data">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" name='mobile' id='mobile' value={udata.mobile} onChange={adddata} />
                </div>
                <div className="form_data">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' value={udata.password} placeholder='At least 6 char' onChange={adddata} />
                </div>
                <div className="form_data">
                    <label htmlFor="cpassword">Password Again</label>
                    <input type="password" name='cpassword' id='cpassword' value={udata.cpassword} onChange={adddata} />
                </div>
                <button className='signin_btn'>Continue</button>
                <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">Signin</NavLink>
              </div>
            </form>
            </div>
            
    </div>
   </section>
   </>
  )
}

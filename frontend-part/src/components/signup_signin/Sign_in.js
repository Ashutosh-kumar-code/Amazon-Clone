import React,{useState} from 'react';
import '../signup_signin/signup.css';
import { NavLink } from 'react-router-dom';

export default function Sign_in() {

    const [logdata,setData] = useState({
        email: "",
        password:""
    });
    const adddata = (e)=>{
        const {name,value} = e.target;

        setData(()=>{
            return{
                ...logdata,
                [name]:value
            }
        })
    }
    console.log(logdata);
  return (
   <>
   <section>
    <div className="sign_container">
        <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazonlogo" />
        </div>
        <div className="sign_form">
            <form action="">
                <h1>Sign-In</h1>
                <div className="form_data">
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' value={logdata.email} onChange={adddata} />
                </div>
                <div className="form_data">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' value={logdata.password} placeholder='At least 6 char' onChange={adddata} />
                </div>
                <button className='signin_btn'>Continue</button>
            </form>
            </div>
            <div className="create_accountinfo">
                <p>New To Amazon</p>
              <NavLink to="/register">  <button >Create Your amazon account</button> </NavLink>
              
            </div>
    </div>
   </section>
   </>
  )
}

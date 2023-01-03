// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Newnav from './components/newnav/Newnav';
import Navbaar from './components/header/Navbaar';
import Footer from './components/footer/Footer';
import Sign_in from './components/signup_signin/Sign_in';
import SignUp from './components/signup_signin/SignUp';
import MainPage from './components/home/MianPage'
// import Rightheader from './components/header/Rightheader';
import Cartsection from './components/cart/Cartsection';

import Buynow from './components/buynow/Buynow';
import {Routes, Route} from 'react-router-dom';

function App() {
  
  return (
  
      <>
     
      <Navbaar/>
      <Newnav/>
      <br /> <br /><br /> 
     {/* <br /> <br /> <br />  /:id */}
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<Sign_in/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/getproductsone/:id" element={<Cartsection/>} />
                
             
        <Route path="/buynow" element={<Buynow />} />
             
      </Routes>
      <Footer/>
      </>
  );
}


export default App;

import './regs.css';
import logpic from '../images/imglogin.jpg'
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Login =()=>{
    // const[msg, setMsg] = useState("")
    const [value, setValue] = useState({
      email: '', password: ''
    });

    const setValues = (event) => {
        
        setValue({...value,[event.target.name]:event.target.value})
    
      }

      const Submit =(event)=>{

        event.preventDefault();
        console.log(value);
    
        axios.post('http://localhost:8700/api/Login', value)
        .then((res) => {
          
          if (res.data.success) {
            toast.success('🦄 You have logged in successfully!', {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        }).catch((error) => {
            console.log(error)
        });
      
    
      } 
    let navigate = useNavigate(); 
    const chng = () =>{ 
          let path = `/Register`; 
          navigate(path);
        }
       

  return (
    <div className="container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={Submit}>
        <h3 className="h3">Login To Your Account</h3>
        <label>Email</label>
        <input className="inpt" type="email" name="email" value={value.email} onChange={setValues}/>
        <br></br>
        <label>Password</label>
        <input className="inpt" type="password" name="password" value={value.password} onChange={setValues}/>
        <button className="btnS" type="Submit">Login</button>
        <button className="btnS"  onClick={chng}>Sign UP</button>
      </form>
      <img className="logpic" src={logpic} alt="img"/>
    </div>
  )
}

export default Login;



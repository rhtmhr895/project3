import React, { useState } from 'react'
import './regs.css'
import pic from '../images/img.jpg'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  
  const [value, setValue] = useState({
    fname: '', lname: '', email: '', password: ''
  })


  const setValues = (event) => {

    setValue({...value,[event.target.name]:event.target.value})

  }

  const submitForm =(event)=>{

    event.preventDefault();
    console.log(value);

    axios.post('http://localhost:8700/api/Register', value)
    .then((res) => {
      if (res.data.success) {
        toast.success('🦄 Yee have Registered  successfully!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
        console.log(res.data)

    }).catch((error) => {
        console.log(error)
    });
   
  }
  let navigate = useNavigate(); 
    const chng = () =>{ 
          let path = `/Login`; 
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
      <form onSubmit={submitForm}>
        <h2>Create New Account</h2>
        <br></br>
        <label>First Name</label>
        <input className="inpt" type="text" name="fname" value={value.fname} onChange={setValues}  />
        <br></br>
        <label>Last Name</label>
        <input className="inpt" type="text" name="lname" value={value.lname} onChange={setValues}  />
        <br></br>
        <label>Email</label>
        <input className="inpt" type="email" name="email" value={value.email} onChange={setValues}  />
        <br></br>
        <label>Password</label>
        <input className="inpt" type="password" name="password" value={value.password} onChange={setValues}  />
       <button className="btnS" type="submit"> Create Account</button>
       <button className="btnS" onClick={chng}>Login</button>
      </form>
      <img  className="pic" src={pic} alt="img"/>
    </div>
  )
}

export default Register

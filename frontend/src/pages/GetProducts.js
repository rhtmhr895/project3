import React, { useEffect, useState } from 'react';
import Tshirts from './Tshirts';
import axios from 'axios';
const GetProducts = () => {
    const[post,setPost] = useState([]);

    useEffect(()=>{
    
     axios.get('http://localhost:8700/api/GetProducts').then((res)=>{
        console.log(res.data);
        setPost(res.data);
     })
    },[])
    if (!post) return null;

  return (
    <div>

    <Tshirts post={post} ></Tshirts>


    </div>
  )
}

export default GetProducts
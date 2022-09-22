import React from 'react'
import '../App.css'
const Tshirts = ({post}) => {
  console.log(post)
  return (
    <div className="tshirts">
       {post.map((items)=>{
       return(
        <div className='tee'>
        <div className="card" >
           <img className="card-img-top" src={items.image} alt="" />
             <div className="card-body">
               <p className="card-title">name:{items.brand}</p>
               <p className="card-text">price: {items.price}</p>
               <p className="card-text">category: {items.category}</p>
               <p className="card-text">size: {items.size}</p>
             </div>
             </div>
           </div>
       )
       })}
       
            
          </div>

      )
}

      export default Tshirts
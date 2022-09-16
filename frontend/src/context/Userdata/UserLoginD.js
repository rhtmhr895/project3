import React from 'react';
import UserLoginContext from './UserLoginContext';

const UserLoginD = (props)=>{
    const state ={
        "name":"rohit"
    } 

    return(
        <UserLoginContext.provider value={state}>
         {props.children}
        </UserLoginContext.provider>
    )

}

export default UserLoginD;
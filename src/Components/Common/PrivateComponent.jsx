import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const PrivateAdmin=()=>{
    const auth=localStorage.getItem('user')
    return auth ?<Outlet></Outlet>:<Navigate to="/admin/login" />
}

const PrivateUser=()=>{
    const auth=localStorage.getItem('user')
    return auth ? <Outlet></Outlet>:<Navigate to='/user/home'></Navigate>
}
 
   
const PrivateTutor=()=>{
    const auth=localStorage.getItem('tutor')
    return auth ? <Outlet></Outlet>:<Navigate to='/tutor/home'></Navigate>
}


export  {PrivateAdmin, PrivateUser, PrivateTutor}
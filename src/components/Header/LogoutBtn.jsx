import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../service/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";


function LogoutBtn({className = ""}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
            navigate("/"); 
        });
    };
    
  return (
    <button
    className={`px-2 py-2 duration-200 rounded-full ${className}`}
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn;

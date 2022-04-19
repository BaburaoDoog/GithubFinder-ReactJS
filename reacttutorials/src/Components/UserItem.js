import React from "react";
import { BrowserRouter,Router,Route,Link } from "react-router-dom";

export const UserItem=(props)=>{
    const{login,avatar_url}=props.user;
    return(
        <div className="card text-center"> 
            <img src={avatar_url} alt="" className="round-img" style={{width:"60px"}}></img>
        <h3>{login}</h3>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
        </div>
    );
}
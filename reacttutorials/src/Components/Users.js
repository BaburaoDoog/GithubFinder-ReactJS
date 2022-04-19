import React from "react";
import { UserItem } from "./UserItem";

export const Users =(props)=>{
    console.log(props.users);
    return(
    <div style={userstyle}> 
        {props.users.map((user)=>(
            <UserItem user={user}/>
        ))}
    </div>
    );
}

const userstyle={
   display:"grid",
   gridTemplateColumns:'repeat(3,1fr)',
   gridGap:'1rem'
}
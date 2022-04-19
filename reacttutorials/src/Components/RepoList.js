import React from "react";
import { Repo } from "./Repo";

export const RepoList = (props) =>{
    return(
       <div>
           {props.repos.map((repo)=>   (
               <Repo repo={repo}/>
           ))}
       </div>
    )
}
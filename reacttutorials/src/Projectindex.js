import React from 'react';
import ReactDOM  from 'react-dom';
import { Routertopic } from './Approuter';
import { Navbar } from './Components/Navbar';
import './Project.css';
import { About } from './Components/About';

import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Users } from './Components/Users';
import { Search } from './Components/Search';
import { UserDetail } from './Components/UserDetail';



export function Projectapp(){
    const [users,setUsers]=useState([]);
    const [user,setUser]=useState({});
    const [repos,setRepos]=useState([]);
    const [permission,setPermission]=useState([]);
   

  //useEffect(async()=>{
    //   const res=await axios.get(`http://35.154.1.121:11901/permission/baburao%40ayu.health`);
  //   console.log(res);
 //  },[])
//http://35.154.1.121:11901/permission/baburao%40ayu.health
  // https://api.github.com/search/users?q=${name}
   const searchName = async(name) =>{
        const res=  await axios.get(`https://api.github.com/search/users?q=${name}`)
        console.log(res);
        setUsers(res.data.items);
   }

   const clearUser=()=>{
     setUsers([]);
   }

   const getUserDetails= async(login) =>{
       const res= await axios.get(`https://api.github.com/users/${login}`);
       setUser(res.data);
   }

   const getRepos = async(username) =>{
          const res=await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&sort=asc`)
          setRepos(res.data);
   }

   const getpermission=async()=>{
     const res=await axios.get(`http://35.154.1.121:11901/swagger#/permission/getPermissionForEmailId`)
     console.log(res);
    
   }

   //searchName={searchName}
    return(  
      <Router>
      <Navbar/>
      
          <div className='container'>
          <Switch>
            <Route exact path="/" render={
              props=>(
                <>
                 <Search  searchName={searchName} showClear={users.length > 0 ?true : false} clearUser={clearUser}/>
              <Users users={users}/>
                </>
              )
            }
           />
      <Route exact path="/about" component={About}/>
      <Route exact path="/user/:anything" render={
        props=>(
          <UserDetail getUserDetails={getUserDetails} user={user} {...props} getRepos={getRepos} repos={repos}/>
        )
      }/>
      </Switch>
      </div>
      
      </Router>
    );
    
  }
  
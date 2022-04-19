import React,{useState} from "react";
import { Home } from "./Home";
import {Contact } from "./Contact";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

import { About } from "./About";
import { Error } from "./Error";

export function Routertopic(){
    return(
   <Router>
       <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/about' component={About}/>
       <Route path='/contact' component={Contact}/>
       <Route path='*' component={Error}/>
       </Switch>
   </Router>
    );
}
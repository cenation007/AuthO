import React from 'react'
import {Redirect} from "react-router-dom";

import {AuthConsumer } from "../authContext";
import Login from "../components/Login"
//import PostsLists from "../components/PostsLists";
//import Auth from '../components/Auth';

const HomePage = () => (
    <AuthConsumer>
        {({authenticated})=>
           authenticated ? (
               <Redirect to = "/dashboard" />
           ):(
               <div>
                   <h2>Welcome to react app</h2>
                   <Login />
                   
               </div>
           )
        }
    </AuthConsumer>
);

export default HomePage;
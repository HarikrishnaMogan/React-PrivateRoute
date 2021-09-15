import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Posts from "./posts";
import {BrowserRouter,Route,Switch,Redirect,Link,NavLink} from "react-router-dom";
import Not from "./Notfound";
import "./App.css";
import Postsub from "./postSub";


//path and component is passed as props in privateRoute
//path and component destructured in privateRoute
//inside render history match location destructured and send as props in component,then only it will be available because it
//is available in  component attribute of Route component.
//similarly it is available in render attribute so that we destructe it and passing it
function PrivateRoute({path,component:Component})
{
  return<Route path={path} render={({history,match,location})=>{
      const loggedin = localStorage.getItem("isloggedin");
      return loggedin ? (<Component history={history} match={match} location={location} />):(<p>Please Login!!</p>);
  }}/>
}
function App()
{
    return(
        <>
       
        <BrowserRouter>
        <div>
            <NavLink exact activeClassName="home" to="/">Home</NavLink>
            <NavLink activeStyle={{color:"green"}} to="/about">About</NavLink>
            <NavLink activeStyle={{color:"green"}} to="/post">Posts</NavLink>
            <button onClick={()=>{localStorage.setItem("isloggedin",true)}}>login</button>
        </div>
        <Switch>
         <Route exact path="/" component={Home} />
         <PrivateRoute path="/about" component={About} />
         <Route path="/post/:id" component={Postsub}/>
         <PrivateRoute path="/post" component={Posts}/>
         <Route path="/home">
             <Redirect to ="/" />
         </Route>
         {
        // <Route path="*" component={Not} />
}
         </Switch>
        </BrowserRouter>
        </>
    );
}
export default App;


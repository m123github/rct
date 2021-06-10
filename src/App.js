import React from 'react';
import logo from './logo.svg';
//import './App.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Login from "./login";
import UniqueCustomerInformation from "./uniqueCustomerInformation";
import NewEntry from "./newEntry"
import Dashboard from "./dashboard"
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom";

function App() {
  return (

<BrowserRouter>
<Switch>

<Route path="/"  component={Login} exact/>
<Route path="/dashboard/"  component={Dashboard} />


</Switch>

</BrowserRouter>
   //  <UniqueCustomerInformation/>
  //  <Dashboard/>
        //  <Login/>
   // <NewEntry/>
  )
}

export default App;

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { NavLink } from 'react-router-dom';
//import classes from '*.module.scss';
// import ListitemforAdmin from './listitemsforAdmin';
// import ListitemsforDistributor from './listitemsfordistributor';
// import ListitemsforBrand from './listitemsforBrand';

export const mainListItems = (
  <div>
    <NavLink to="/Dashboard/" style={{textDecoration:"none"}}>
    <ListItem button >
      <ListItemIcon style={{color:"#3c86f1"}}>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"/>
    </ListItem>
    </NavLink>

    
{/*
    <NavLink to="/Dashboard/List" style={{textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon style={{color:"#FA4343"}}>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    </NavLink>

    <NavLink to="/Dashboard/Files" style={{textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon style={{color:"#FA4343"}}>
      <LayersIcon />
       
      </ListItemIcon>
      <ListItemText primary="Files" />
    </ListItem>
    </NavLink>
    

    <ListItem button>
      <ListItemIcon style={{color:"#FA4343"}}>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
   
    
  
    <ListItem button>
      <ListItemIcon style={{color:"#FA4343"}}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  


    <ListItem button>
      <ListItemIcon style={{color:"#FA4343"}}>
      <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */}
  
  {/* {window.localStorage.getItem("UserType")=='Admin' && <ListitemforAdmin/>}
   {window.localStorage.getItem("UserType")=='Distributor' && <ListitemsforDistributor/>}
   {window.localStorage.getItem("UserType")=='Brand' && <ListitemsforBrand/>}  */}
  



  </div>
);


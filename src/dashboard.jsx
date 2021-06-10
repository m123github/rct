import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import UniqueCustomerInformation from './uniqueCustomerInformation'
import AClassShares from './aClassShares';
import SideBar from "./sidebar";
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom";
import "./assets/js/util";
import "./assets/js/main";
import "./assets/css/style.css";
import "./style1.css";
import Savingsbank from './savingsBank';
import Login from "./login";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid } from '@material-ui/core';
import Activity from './activity'
//import Transactions from './transactions';
import SendSMS from './sendSMS';

import Transactions from './transactions';
import AlertDialogSlide from './reportUnique';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor:"#3c86f1"
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    color:"#3c86f1",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
    color:"white"
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    //fontWeight:"600"
    //color:"#3c86f1"
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
    
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding:0 }}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};



class Dashboard extends React.Component {
  state = {
    auth: true,
    report:false,
    open: true,
    simpleTablepath:"/Dashboard/simpleTable",
    sample : 0,
		anchorEl: null,
		value: 0,
		aClassShares : [{to:"/dashboard/Shares",label:"Data Entry"},{to:"",label:"Activity/Liability"},{to:"",label:"Statistics"},{to:"",label:"Other Details"},{to:"",label:"Balance Position"}],
		cClassShares : [{to:"",label:"Data Entry"},{to:"",label:"Activity/Liability"},{to:"",label:"Statistics"},{to:"",label:"Balance Position"}],

  };
 
	classSharesFunction=(value)=>{
if(value == "Master"){
	this.setState({cClassShares : [{to:"",label:"Data Entry"},{to:"",label:"Activity/Liability"},{to:"",label:"Statistics"},{to:"",label:"Balance Position"}],aClassShares : [{to:"/dashboard/Shares",label:"Data Entry"},{to:"",label:"Activity/Liability"},{to:"",label:"Statistics"},{to:"",label:"Other Details"},{to:"",label:"Balance Position"}]	,report:false})
}
else if (value == "report"){

		this.setState({cClassShares : [],aClassShares : [],report:true	})
	
}
	else{
		this.setState({cClassShares : [{to:"",label:"Subcribe"},{to:"",label:"Withdraw"},{to:"",label:"close"}],aClassShares : [{to:"",label:"Subscribe"},{to:"",label:"WithDraw"},
		{to:"",label:"Close"},{to:"",label:"Residual Credit"},{to:"",label:"Residual Debit"},
		{to:"",label:"Dividend Payment"},{to:"",label:"Funeral credit"},{to:"",label:"funeral Settlement"},
		{to:"",label:"Gruop Insurance Credit"},{to:"",label:"Gruop Insurance Settlement"},{to:"",label:"Opening Receipt"},{to:"",label:"Opening Payment"}	
	]	,report:false})

	}

	}


	handleChangeValue = (event, value) => {
  
		this.setState({ value });
	};

componentDidMount(){
this.setState({value:0})
}

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl ,value} = this.state;
    const open = Boolean(anchorEl);
    console.log("rendered!!!!!!!!!!!!!!S")
    return (
      <BrowserRouter>
      <Switch>
			{/* <Route path="/" component={SignIn} exact/> */}
      <div className={classes.root} >
			

        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
          
            <IconButton
              
              
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}
            >
              <MenuIcon />
            </IconButton>


            <Typography
              style={{fontSize:"20px",fontWeight:"600",color:"white"}}
              noWrap
              className={classes.title}
            >
              Demo Co-Operative Bank Ltd.
            </Typography>
                <Typography style={{color:"white",fontSize:"15px",fontWeight:"600"}}> {window.localStorage.getItem("UserName") }</Typography>
                {auth && (
                  <div className="parentInfoBox">
										<div  className="infoBox" style={{height:"170px",boxShadow:"3px 3px 3px 3px #3c86f13b",padding:"5px",fontSize:"17px",borderRadius:"4px",width:"auto",backgroundColor:"#ffffff",zIndex:10000,position:"absolute",right:65,top:8}}>
				<Grid container style={{color:"black"}}>
				<Grid item xs={6}>User : <span style={{color:"#959b95"}}>35-Priya</span></Grid>
					<Grid item xs={6}>D.St : <span style={{color:"#959b95"}}>13/08/2018</span></Grid>
					
				</Grid>
				<Grid container style={{color:"black"}}>
				<Grid item xs={6} >Bank Id : <span style={{color:"#959b95"}}>0382</span></Grid>
					<Grid item xs={6}>Ver  : <span style={{color:"#959b95"}}>2.63</span></Grid>	
				</Grid>
		
				<Grid container style={{color:"black"}}>
				<Grid item xs={6}>Month : <span style={{color:"#959b95"}}>Sep</span></Grid>			
				<Grid item xs={6}>Fin. Year : <span style={{color:"#959b95"}}>2018-19</span></Grid>
				<Grid item xs={12}>Date : <span style={{color:"#959b95"}}>May 22,2019 wed</span></Grid>
				</Grid>
				<Grid container>
				<Grid item style={{ color: "#3c86f1"}}>Warenty expried on Jan 14,2019.(days overrun : 128 )</Grid>
				</Grid>
			</div>

                   <IconButton
                   style={{ color:"white"}}
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  //color="primary"
                >
                  <AccountCircle />
                </IconButton> 
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Close</MenuItem>
                  <MenuItem onClick={()=>{
                    window.localStorage.removeItem("UserID1");
                    window.localStorage.removeItem("authvar");
                    window.localStorage.removeItem("UserName");
                    window.localStorage.removeItem("Usertype");
                  }} >
                  <NavLink to="/" style={{textDecoration:"none"}}>Sign Out</NavLink>
                  </MenuItem>
                </Menu>
                </div>
                )}

          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
          <img src={require('./images/naivelogo.png')} style={{height:"37px",width:"176px"}} />
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
        
          <div >
			<Grid container style={{display:"flex",justifyContent:"space-around",backgroundColor:"whitesmoke"}}>
					<Grid item lg={4} className="MasterColor" style={{textAlign:"center"}} onClick={()=>this.classSharesFunction("Master")}>Master</Grid>
					<Grid item lg={4} className="TransacColor" onClick={()=>this.classSharesFunction("Transaction")}>Transaction</Grid>
					<Grid item lg={4} className="ReportColor"style={{textAlign:"center"}} onClick={()=>this.classSharesFunction("report")}>Report</Grid>
			</Grid>
			<Grid container>
				<SideBar aClassShares={this.state.aClassShares} cClassShares={this.state.cClassShares} report={this.state.report}></SideBar>
			</Grid>
        
						
</div>      

          {/* <Divider />
          <List>{secondaryListItems}</List> */}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
           
           <div className={classes.tableContainer}>
           
           
						{/* <Route path="/unique"  component={UniqueCustomerInformation}  /> */}
						{/* <Route path="/dashboard/Unique"  component={UniqueCustomerInformation}  /> */}
            <Route path="/dashboard/Unique"  component={UniqueCustomerInformation}  exact/>
                        <Route path="/dashboard/Activity" component={Activity} exact/>
                        <Route path="/dashboard/Transactions" component={Transactions} exact/>
                        <Route path="/dashboard/reportUnique"component={AlertDialogSlide} exact/>
                        <Route path="/dashboard/sms" component= {SendSMS} exact/>
                        <Route path="/dashboard/Savings"  component={Savingsbank}  exact/>
                        <Route path="/dashboard/Shares"  component={AClassShares}  exact/>
						{/* <Route path="/"  component={UniqueCustomerInformation} exact/> */}
            {/* <Route path="/Dashboard/List"  component={SimpleTable} />
            <Route path="/Dashboard/Orders/:id" component={Orders} />
           {/*  <Route path="/Dashboard/OrderByDate" component={OrderByDate} /> 
            {/* <Route path="/Dashboard/Files" component ={UploadFiles}/>
            <Route path="/Dashboard/UploadImage" component={Image}/>
            <Route path="/Dashboard/ProductImage" component={ProductImage}/> */}
        
            
            
          </div> 
        </main>
        
      </div>
      
      </Switch>
      </BrowserRouter>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
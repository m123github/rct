import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'; 
import "react-datepicker/dist/react-datepicker.css";
import GeneralDetails from "./generalDetails";
import Identity_details_list1 from "./identityDetailsList1";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
  } from 'react-accessible-accordion';
  import 'react-accessible-accordion/dist/fancy-example.css';
  import PresentAddress from "./permanentAddress";
  import PermanentAddress from "./presentAddress";
  import Guardian from "./guardian";
  import LimitCardOperations from "./limitCardOperations";
  import "./login.css";


import AppBar from '@material-ui/core/AppBar';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default class NewEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date()
        };
        this.Date1Change = this.Date1Change.bind(this);
      }
      Date1Change(date) {
        this.setState({
          startDate: date
        });
      }
    state = {
        branch: '',
        year:'',
        value: 0,
      };
      
    
      handleChange = event => {
        this.setState({ branch: event.target.value });
      };
      handleChangeValue = (event, value) => {
  
        this.setState({ value });
      };

componentDidMount(){
    this.setState({value:0})
}
  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
          <Grid container xs={12} style={{height:"80px"}} className="bannerimg">
          <Typography component="div" style={{ color: "white",marginLeft:"19px", fontSize: "20px",paddingTop:"14px",paddingLeft:"18px",fontWeight:"bold" }}>Demo Co-operative bank LTD </Typography>
          </Grid>
          <Grid container xs={12} style={{height:"80%"}}>
          <AppBar position="static" color="green" style={{width:"100%",paddingTop:"0px"}}>
          <Tabs style={{width:"100%"}}
            value={value }
            onChange={this.handleChangeValue}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            scrollButtons="auto"
            backgroundColor="#a2c8e885"
          >
            <Tab label="General Details" />
            <Tab label="Identity Details" />
            <Tab label="Permanent Address" />
            <Tab label="Present Address" />
            <Tab label="Limit Card Operations" />
            
            {/* <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" /> */}
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><GeneralDetails/></TabContainer>}
        {value === 1 && <TabContainer><Identity_details_list1/></TabContainer>}
        {value === 2 && <TabContainer><PermanentAddress/></TabContainer>}
        {value === 3 && <TabContainer><PresentAddress/></TabContainer>}
        {value === 4 && <TabContainer><LimitCardOperations/></TabContainer>}
          </Grid>
        
      </React.Fragment>
    )
  }
}

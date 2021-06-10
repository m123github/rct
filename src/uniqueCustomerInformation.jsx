import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Entry from './Entry';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import "./login.css";
import UniqueView from"./uniqueView"


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
const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});
export default class UniqueCustomerInformation extends Component {
  state = {
    value: 0,CustomerEdit:{}
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
 

  CustomerEdit=(values)=>{
    console.log(values,"values")
    this.setState({CustomerEdit:values,value:0})
  }
//   EntryDetailsValues=(custId,bdate,name2,careOf,surName,customerPIN,transactionalsms,bulksms,value)=>{
//     console.log(custId,bdate,name2,careOf,surName,customerPIN,transactionalsms,bulksms,"parent")
//    this.entryDetails={custId:custId,bdate:bdate,name2:name2,careOf:careOf,surName:surName,customerPIN:customerPIN,transactionalsms:transactionalsms,bulksms:bulksms};
//    if(value){ this.setState({value:value})}
//  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
     
        <React.Fragment>
        {/* <Grid container spacing={16} style={{height: "43rem" }}>
        <Grid item xs={12} className="uniquebackground-image" style={{display:"flex",height: "78%",display:"flex",flexDirection:"column" }}>

        <Grid item xs={12} >
        <Typography component="div" style={{ color: "white",marginLeft:"19px",marginTop:"85px", fontSize: "28px",paddingTop:"14px",paddingLeft:"18px",fontWeight:"bold" }}>Demo Co-operative bank LTD </Typography>
        <Grid container xs={12} syle={{display:"flex"}}>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        </Grid>
        </Grid> */}
        
        {/* <Grid item xs={12} style={{backgroundColor:"red"}}></Grid> */}
        
        {/* </Grid>
        <Grid item xs={12} style={{display:"flex",height: "16%",justifyContent:"center" }}>
        <Grid item xs={3} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Grid container xs={6} style={{display:"flex",flexDirection:"column",position:"relative",bottom:"56px"}}>
        <Grid item xs={12}> <img src={require('./images/Entry.png')} style={{paddingLeft:"29px"}} /> </Grid>
        <Grid item xs={12}>  <Typography component="div" style={{ color: "black", fontSize: "18px",marginLeft:"61px",paddingTop:"14px",fontWeight:"bold",textAlign:"center"  }}>Data Entry</Typography> </Grid>
        </Grid>
        </Grid>

        <Grid item xs={3} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Grid container xs={6} style={{display:"flex",flexDirection:"column",position:"relative",bottom:"56px"}}>
        <Grid item xs={12}> <img src={require('./images/Entry.png')} style={{paddingLeft:"29px"}} /> </Grid>
        <Grid item xs={12}>  <Typography component="div" style={{ color: "black", fontSize: "18px",marginLeft:"61px",paddingTop:"14px",fontWeight:"bold",textAlign:"center"  }}>Activity/Liability</Typography> </Grid>
        </Grid>
        </Grid>

        <Grid item xs={3} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Grid container xs={6} style={{display:"flex",flexDirection:"column",position:"relative",bottom:"56px"}}>
        <Grid item xs={12}> <img src={require('./images/Entry.png')} style={{paddingLeft:"29px"}} /> </Grid>
        <Grid item xs={12}>  <Typography component="div" style={{ color: "black", fontSize: "18px",marginLeft:"61px",paddingTop:"14px",fontWeight:"bold",textAlign:"center"  }}>Transaction</Typography> </Grid>
        </Grid>
        </Grid>

        <Grid item xs={3} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Grid container xs={6} style={{display:"flex",flexDirection:"column",position:"relative",bottom:"56px"}}>
        <Grid item xs={12}> <img src={require('./images/view.png')} style={{paddingLeft:"29px"}} /> </Grid>
        <Grid item xs={12}>  <Typography component="div" style={{ color: "black", fontSize: "18px",paddingTop:"14px",marginLeft:"61px",fontWeight:"bold",textAlign:"center"  }}>Send SMS</Typography> </Grid>
        </Grid> */}
        <div  style={{width:"100%",height:"577  px"}} >
        <AppBar position="static" color="default" style={{width:"100%",paddingTop:"0px"}}>
          <Tabs style={{width:"100%"}}
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            scrollButtons="auto"
          >
            <Tab label="Entry" style={{fontWeight:"700"}} />
            <Tab label="View" style={{fontWeight:"700"}}/>
            
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><Entry CustomerEdit={this.state.CustomerEdit}/></TabContainer>}
        {value === 1 && <TabContainer><UniqueView  CustomerEdit={this.CustomerEdit}/></TabContainer>}
     
      </div>
        {/* </Grid>
        </Grid>
        </Grid> */}


        
        </React.Fragment>
      
    )
  }
}

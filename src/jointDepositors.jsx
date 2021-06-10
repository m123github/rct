import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';  
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import DatePicker from "react-datepicker";
import Button from '@material-ui/core/Button'; 
import "react-datepicker/dist/react-datepicker.css";
import IdentityDetailsList1 from "./identityDetailsList1";
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import FormControl from '@material-ui/core/FormControl';
import "./style1.css";
import CustomizedTable from './table1'



const dropdownMenuProps = {
    menuStyle: {
      
      borderRadius: "6%",
      backgroundColor: 'lightgrey',
      width: "30%",
    },
  }

  let id = 0;
function createData(name, calories, fat, carbs) {
  id += 1;
  return { id, name, calories, fat};
}

const rows = [
  createData('', '','',''),
  
];

var rowHeader = ["Si No","Depsitor Id","Name","Address"];

export default class JointDepositors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tablenew :rows,
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
        year:''
      };
      
    
      handleChange = event => {
        this.setState({ branch: event.target.value });
      };


  render() {
 
    return (
      <div>
        <Grid container spacing={16} style={{height: "auto",marginTop:"24px"}}>

{/* 1st row */}
<Grid container spacing={16} xs={12} style={{height: "60px"}}>
{/* 11 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Cust ID</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    {/* <Select
       style={{
         width: "88%",height: "30px",padding:"0px",backgroundColor:"white"
       }}

       value={this.state.branch}

       onChange={this.handleChange}
       input={
         <OutlinedInput
           labelWidth={this.state.labelWidth}
           dropDownMenuProps={dropdownMenuProps}
           name="branch"
           id="outlined-age-simple"
         />
       }
     >

       <MenuItem value="Price Discount">B+ve</MenuItem>
       <MenuItem value="Percentage Discount">AB+ve</MenuItem>
       <MenuItem value="Free Product">A+ve</MenuItem>

     </Select> */}
      <Input disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
     
     </Grid> 
</Grid>
{/* 12 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Name</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}} >
    {/* <Select
       style={{
         width: "87%",height: "30px",padding:"0px",backgroundColor:"white"
       }}

       value={this.state.branch}

       onChange={this.handleChange}
       input={
         <OutlinedInput
           labelWidth={this.state.labelWidth}
           dropDownMenuProps={dropdownMenuProps}
           name="branch"
           id="outlined-age-simple"
         />
       }
     >

       <MenuItem value="Price Discount">B+ve</MenuItem>
       <MenuItem value="Percentage Discount">AB+ve</MenuItem>
       <MenuItem value="Free Product">A+ve</MenuItem>

     </Select>   */}
      <Select className={"smallDropdown"}
                   style={{
                      height: "30px",padding:"0px",backgroundColor:"white"
                   }}

                   value={this.state.branch}

                   onChange={this.handleChange}
                   input={
                     <OutlinedInput style={{backgroundColor:"green"}}
                       labelWidth={this.state.labelWidth}
                       dropDownMenuProps={dropdownMenuProps}
                       name="branch"
                       id="outlined-age-simple"
                     />
                   }
                 >

                   <MenuItem value="Price Discount">Mr</MenuItem>
                   <MenuItem value="Percentage Discount">Mrs</MenuItem>
                   <MenuItem value="Free Product">Ms</MenuItem>

                 </Select>
                 <div className="changewidth" style={{display:"inline"}}>
                 <Input  disableUnderline="true" style={{ backgroundColor:"white",marginBottom:"3px",color: "#000000", fontSize: "16px",marginLeft:"5px",width:"112px" }}></Input>
     </div>
     </Grid> 

</Grid>
{/* 13 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>

 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>House Name<span>*</span></Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    {/* <Select
       style={{
         width: "97%",height: "30px",padding:"0px",backgroundColor:"white"
       }}

       value={this.state.branch}

       onChange={this.handleChange}
       input={
         <OutlinedInput
           labelWidth={this.state.labelWidth}
           dropDownMenuProps={dropdownMenuProps}
           name="branch"
           id="outlined-age-simple"
         />
       }
     >

       <MenuItem value="Price Discount">B+ve</MenuItem>
       <MenuItem value="Percentage Discount">AB+ve</MenuItem>
       <MenuItem value="Free Product">A+ve</MenuItem>

     </Select>  */}
       <Input disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
     </Grid> 
</Grid>
</Grid>
{/* 2nd row */}
<Grid container spacing={16} xs={12} style={{height: "auto"}}>
 {/* 21 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Place<span>*</span></Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
        </Grid>
</Grid>
{/* 22 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>City</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
    </Grid>

</Grid>
{/* 23 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>

 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>District</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
    </Grid>
</Grid>

</Grid>
<Grid container spacing={16} xs={12} style={{height: "40px",marginTop:"20px",marginBottom:"20px"}}>
<Button variant="contained" color="primary"onClick={this.saveLoginDetails} style={{backgroundColor:"#1890ff",float:"right",marginRight:"14px",marginTop:"10px"}} >
                 Add
              </Button>

              <Button variant="contained" color="primary"onClick={this.saveLoginDetails} style={{backgroundColor:"#1890ff",float:"right",marginRight:"149px",marginTop:"10px"}} >
                 Delete
              </Button>
</Grid>



<CustomizedTable rt={this.state.tablenew}  ty={rowHeader} />


<Grid container spacing={16} xs={12} style={{height: "40px",marginTop:"20px",marginBottom:"20px"}}>
<Button variant="contained" color="primary"onClick={this.saveLoginDetails} style={{backgroundColor:"#1890ff",float:"right",marginRight:"14px",marginTop:"10px"}} >
                 Save
              </Button>
</Grid>
</Grid>
      </div>
    )
  }
}

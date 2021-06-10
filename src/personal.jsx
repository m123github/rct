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
import Divider from '@material-ui/core/Divider';


import FormControl from '@material-ui/core/FormControl';
import "./style1.css";


const dropdownMenuProps = {
    menuStyle: {
      
      borderRadius: "6%",
      backgroundColor: 'lightgrey',
      width: "30%",
    },
  }
export default class Personal extends Component {

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
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>A/c No.</Typography>
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
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Like A/c</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
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
      <Input disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
     
     </Grid> 

</Grid>

{/* 13 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>

 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Date<span>*</span></Typography>
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
     <DatePicker style={{marginLeft:"10px",width: "60%",height: "30px",padding:"3px"}}
        selected={this.state.startDate}
        onChange={this.Date1Change}
      />
     </Grid> 
</Grid>
</Grid>


<Grid container spacing={16} xs={12} style={{height: "auto"}}>
<Typography component="div" style={{ color: "#000000", fontSize: "16px",textAlign:"left",paddingTop:"3px",marginBottom:"30px",fontWeight:"bold" }}>Customer Details</Typography>
</Grid>
{/* 2nd row */}
<Grid container spacing={16} xs={12} style={{height: "auto"}}>


 {/* 21 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Cust. ID<span>*</span></Typography>
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
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Beneficiary</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Select
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

     </Select>
    </Grid>

</Grid>
{/* 23 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>

 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Member No.</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
    </Grid>
</Grid>

</Grid>
 {/* 3rd row */}
 <Grid container spacing={16} xs={12} style={{height: "60px",    marginTop:"10px"}}>
            {/* 11 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Name</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
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
                 <Input  disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",marginLeft:"5px",width:"112px" }}></Input>
                </div>
                </Grid>
            </Grid>
            {/* 12 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Surname</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
                </Grid>
            
            </Grid>
            {/* 13 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Father Name</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            </Grid>


             {/* 4th row */}
             <Grid container spacing={16} xs={12} style={{height: "60px"}}>
            {/* 11 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Date of Birth</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                <DatePicker style={{marginLeft:"10px",width: "60%",height: "30px",padding:"3px"}}
        selected={this.state.startDate}
        onChange={this.Date1Change}
      />
                  </Grid>
            </Grid>
            {/* 12 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Age</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                
     <Input disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                 </Grid>
            
            </Grid>
            {/* 13 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Religion</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            
                <Select
       style={{
         width: "60%",height: "30px",padding:"0px",backgroundColor:"white"
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

     </Select>   

                </Grid>
            </Grid>
            </Grid>
{/* 5th rows */}
<Grid container spacing={16} xs={12} style={{height: "auto",marginTop:"10px"}}>
 {/* 31 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Caste</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"5px"}}>
        {/* <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            
            value={this.state.value}
            onChange={this.handleChange}
          >
            
            <FormControlLabel value="female" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl> */}
        <Select
       style={{
         width: "60%",height: "30px",padding:"0px",backgroundColor:"white"
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

     </Select>  
       
        </Grid>
</Grid>
{/* 32 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>House Name</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",position:"relative",bottom:"10px"}}>
        {/* <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            
            value={this.state.value}
            onChange={this.handleChange}
          >
            
            <FormControlLabel value="female" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl> */}
          <Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
        </Grid>
</Grid>
{/* 33 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Street</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",position:"relative",bottom:"6px"}}>
    
    {/* <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            
            value={this.state.value}
            onChange={this.handleChange}
          >
            
            <FormControlLabel value="female" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl> */}

<Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>

              </Grid> 
 
</Grid>

</Grid>


{/* 6th rows */}
<Grid container spacing={16} xs={12} style={{height: "auto",marginTop:"10px"}}>
 {/* 31 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Place</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"5px"}}>
        {/* <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            
            value={this.state.value}
            onChange={this.handleChange}
          >
            
            <FormControlLabel value="female" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl> */}
         <Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>  
       
        </Grid>
</Grid>
{/* 32 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>City</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",position:"relative",bottom:"10px"}}>
        {/* <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            
            value={this.state.value}
            onChange={this.handleChange}
          >
            
            <FormControlLabel value="female" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl> */}
          <Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
        </Grid>
</Grid>
{/* 33 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Senior</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",position:"relative",bottom:"6px"}}>
    
    <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            
            value={this.state.value}
            onChange={this.handleChange}
          >
            
            <FormControlLabel value="female" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl>



              </Grid> 
 
</Grid>
</Grid>


{/* 7th rows */}
<Grid container spacing={16} xs={12} style={{height: "auto",marginTop:"10px"}}>
 {/* 31 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Minor</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"5px"}}>
        <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            
            value={this.state.value}
            onChange={this.handleChange}
          >
            
            <FormControlLabel value="female" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl>
      
       
        </Grid>
</Grid>
{/* 32 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Profession</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"10px"}}>
        {/* <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            
            value={this.state.value}
            onChange={this.handleChange}
          >
            
            <FormControlLabel value="female" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl> */}
           <Select
       style={{
         width: "60%",height: "30px",padding:"0px",backgroundColor:"white"
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

     </Select>  
         
         
          
        </Grid>
</Grid>
{/* 33 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Mobile No.</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",position:"relative",bottom:"6px"}}>
    
    {/* <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            
            value={this.state.value}
            onChange={this.handleChange}
          >
            
            <FormControlLabel value="female" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl> */}

<Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>

              </Grid> 
 
</Grid>

</Grid>


{/* 8th rows */}
<Grid container spacing={16} xs={12} style={{height: "auto",marginTop:"10px"}}>
 {/* 31 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Guardian Name</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"5px"}}>
    <Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
      
       
        </Grid>
</Grid>
{/* 32 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Marketing Name</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"10px"}}>
        {/* <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            
            value={this.state.value}
            onChange={this.handleChange}
          >
            
            <FormControlLabel value="female" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl> */}
          <Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input> 
         
         
          
        </Grid>
</Grid>
{/* 33 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Off.Recovery </Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",position:"relative",bottom:"6px"}}>
    
    <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            
            value={this.state.value}
            onChange={this.handleChange}
          >
            
            <FormControlLabel value="female" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl>



              </Grid> 
 
</Grid>

</Grid>







{/* 9th rows */}
<Grid container spacing={16} xs={12} style={{height: "auto",marginTop:"10px"}}>
 {/* 31 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Folio No.</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"5px"}}>
    <Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
      
       
        </Grid>
</Grid>
{/* 32 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
       
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"10px"}}>
        {/* <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            
            value={this.state.value}
            onChange={this.handleChange}
          >
            
            <FormControlLabel value="female" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl> */}
        
         
         
          
        </Grid>
</Grid>
{/* 33 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
      
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",position:"relative",bottom:"6px"}}>
    
   



              </Grid> 
 
</Grid>

</Grid>



<Grid container spacing={16} xs={12} style={{height: "auto"}}>
<Typography component="div" style={{ color: "#000000", fontSize: "16px",textAlign:"left",paddingTop:"3px",marginBottom:"20px",fontWeight:"bold",marginTop:"20px" }}>Other Details</Typography>
</Grid>
<Grid container spacing={16} xs={12} style={{height: "auto",marginTop:"10px"}}>
 {/* 31 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Class</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"5px"}}>
    <Select
       style={{
         width: "60%",height: "30px",padding:"0px",backgroundColor:"white"
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

     </Select> 
      
       
        </Grid>
</Grid>
{/* 32 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
<Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Designation</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"10px"}}>
        {/* <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            
            value={this.state.value}
            onChange={this.handleChange}
          >
            
            <FormControlLabel value="female" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl> */}
        
         
        <Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
          
        </Grid>
</Grid>
{/* 33 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
<Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Operating Mode</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"6px"}}>
    
    <Select
       style={{
         width: "60%",height: "30px",padding:"0px",backgroundColor:"white"
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

     </Select> 



              </Grid> 
 
</Grid>

</Grid>



<Grid container spacing={16} xs={12} style={{height: "auto",marginTop:"10px"}}>
 {/* 31 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>No. of Depositors</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"5px"}}>
    <Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
      
       
        </Grid>
</Grid>
{/* 32 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
<Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Agent No.</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"10px"}}>
        {/* <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            
            value={this.state.value}
            onChange={this.handleChange}
          >
            
            <FormControlLabel value="female" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl> */}
        
        <Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
         
          
        </Grid>
</Grid>
{/* 33 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
<Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Agent Name</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",position:"relative",bottom:"6px"}}>
    
   

    <Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>

              </Grid> 
 
</Grid>

</Grid>



<Grid container spacing={16} xs={12} style={{height: "auto",marginTop:"10px"}}>
 {/* 31 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Inroduced by</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"5px"}}>
    <Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
      
       
        </Grid>
</Grid>
{/* 32 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
<Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Micro ATM</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"10px"}}>
        <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            
            value={this.state.value}
            onChange={this.handleChange}
          >
            
            <FormControlLabel value="female" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl>
        
         
         
          
        </Grid>
</Grid>
{/* 33 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
      
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",position:"relative",bottom:"6px"}}>
    
   



              </Grid> 
 
</Grid>

</Grid>


<Grid container spacing={16} xs={12} style={{height: "auto",marginTop:"20px"}}>
<Typography component="div" style={{ color: "#000000", fontSize: "16px",textAlign:"left",paddingTop:"3px",marginBottom:"30px",fontWeight:"bold" }}>Opening Details</Typography>
</Grid>
<Grid container spacing={16} xs={12} style={{height: "auto",marginTop:"10px"}}>
 {/* 31 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Balance</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"5px"}}>
    <Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
      
       
        </Grid>
</Grid>
{/* 32 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
<Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Interest Accrued</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",bottom:"10px"}}>
    <Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
        
         
         
          
        </Grid>
</Grid>
{/* 33 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
<Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Interest Paid</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",position:"relative",bottom:"6px"}}>
    
    <Input disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>



              </Grid> 
 
</Grid>

</Grid>

<Grid container spacing={16} xs={12} style={{height: "40px",marginTop:"20px",marginBottom:"20px"}}>
<Button variant="contained" color="primary"onClick={this.saveLoginDetails} style={{backgroundColor:"#1890ff",float:"right",marginRight:"14px",marginTop:"10px"}} >
               New
              </Button>
              </Grid>



</Grid>
      </div>
    )
  }
}

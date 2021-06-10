import React, { Component } from 'react'
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
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import "./login.css";




const dropdownMenuProps = {
    menuStyle: {
      
      borderRadius: "6%",
      backgroundColor: 'lightgrey',
      width: "30%",
    },
   
  }

 
export default class SendSMS extends Component {
    constructor(props) {
        super(props);
        this.id1 = React.createRef();
       
        this.name2 = React.createRef();
        this.regNo = React.createRef();
        this.message = React.createRef();
       
        


        this.cardCheck=1;
        this.citizenCheck=1;
        this.minorCheck=1;
        this.castCheck=1;
        this.state = {
          type:""
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

      type = event => {
        this.setState({ type: event.target.value });
      };

     
  render() {
    return (
      <div>

<Grid container spacing={16} style={{height: "auto",marginTop:"24px",padding:"24px"}}>

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
    <Input inputRef={this.id1} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
       </Grid>
</Grid>
{/* 12 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Name</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input inputRef={this.name2} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
   
       </Grid>

</Grid>
{/* 13 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>

 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Type<span>*</span></Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
   

    <Select
       style={{
         width: "86%",height: "30px",padding:"0px",backgroundColor:"white"
       }}

       value={this.state.type}

       onChange={this.type}
       input={
         <OutlinedInput
           labelWidth={this.state.labelWidth}
           dropDownMenuProps={dropdownMenuProps}
           name="type"
           id="outlined-age-simple"
         />
       }
     >

       <MenuItem value="Islam">Islam</MenuItem>
       <MenuItem value="Christianity">Christianity</MenuItem>
       <MenuItem value="Hinduism">Hinduism</MenuItem>

     </Select>


     </Grid>
</Grid>
</Grid>
{/* 2nd row */}
<Grid container spacing={16} xs={12} style={{height: "auto"}}>
 {/* 21 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Reg. No.</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input inputRef={this.regNo} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
      </Grid>
</Grid>
{/* 22 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Message</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <TextField 
    inputRef={this.message}
    style={{backgroundColor:"white",paddingTop:"0px",paddingBottom:"0px"}}
     InputProps={{
        disableUnderline: true,
       }}
     multiline={true}
    rows={4}
//   rowsMax={4}
/>


    </Grid>

</Grid>
{/* 23 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>

 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}></Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",position:"relative",bottom:"5px"}}>
   
    </Grid>
</Grid>

</Grid>
 {/* 3rd row */}
 <Grid container spacing={16} xs={12} style={{height: "60px",    marginTop:"10px"}}>
            {/* 11 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}></Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                           
                </Grid>
            </Grid>
            {/* 12 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}></Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            
                </Grid>
            
            </Grid>
            {/* 13 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}></Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
               
                </Grid>
            </Grid>
            </Grid>


             {/* 4th row */}
             <Grid container spacing={16} xs={12} style={{height: "60px"}}>
            {/* 11 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}></Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                     
                              </Grid>
            </Grid>
            {/* 12 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}></Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                               
                </Grid>
            
            </Grid>
            {/* 13 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}></Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                          
                </Grid>
            </Grid>
            </Grid>
{/* 5th rows */}
<Grid container spacing={16} xs={12} style={{height: "auto"}}>
 {/* 31 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}></Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",position:"relative",bottom:"5px"}}>
       

        </Grid>
</Grid>
{/* 32 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}></Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",position:"relative",bottom:"10px"}}>
        
        </Grid>
</Grid>
{/* 33 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}></Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",position:"relative",bottom:"6px"}}>
    
    


              </Grid> 
 
</Grid>

</Grid>
 {/* 4th rows */}
 <Grid container spacing={16} xs={12} style={{position:"absolute",right:"38px",bottom:"70px",maxWidth:"84px"}}>
           <Grid item xs={12}> <Button variant="contained" color="primary" style={{backgroundColor:"#1890ff"}}  onClick={()=>console.log(this.id1.current.value,this.name2.current.value,this.state.type,this.regNo.current.value,this.message.current.value)}>Send</Button></Grid>
            </Grid>
            


</Grid>
        
      </div>
    )
  }
      }
   

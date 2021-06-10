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




const dropdownMenuProps = {
    menuStyle: {
      
      borderRadius: "6%",
      backgroundColor: 'lightgrey',
      width: "30%",
    },
  }

 
export default class Transactions extends Component {
    constructor(props) {
        super(props);
        this.uid1 = React.createRef();
       
        this.name1 = React.createRef();
        this.houseName1 = React.createRef();
        this.MemberNo1 = React.createRef();
       
        


        this.cardCheck=1;
        this.citizenCheck=1;
        this.minorCheck=1;
        this.castCheck=1;
        this.state = {
          beneficiary:""
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

      beneficiary = event => {
        this.setState({ beneficiary: event.target.value });
      };

      minorClick=(event)=>{
        console.log(event.target.value,"value of minor")
        if(this.minorCheck % 2 == 0){
          this.setState({ minor: "No" });
          this.minorCheck++;
      
        }
        else{
          this.setState({ minor: event.target.value });
          this.minorCheck++;
        }
      
      
      }
      citizen=(event)=>{
        console.log(event.target.value,"value of citzen")
        if(this.citizenCheck % 2 == 0){
          this.setState({ citizen: "No" });
          this.citizenCheck++;
      
        }
        else{
          this.setState({ citizen: event.target.value });
          this.citizenCheck++;
        }
      
      
      }

      card=(event)=>{
        console.log(event.target.value,"Value of card")
        if(this.cardCheck % 2 == 0){
          this.setState({ cardIssued: "No" });
          this.cardCheck++;
      
        }
        else{
          this.setState({ cardIssued: event.target.value });
          this.cardCheck++;
        }
      
      
      }


      castClick=(event)=>{
        console.log(event.target.value,"Value of Cast")
        if(this.castCheck % 2 == 0){
          this.setState({ cast: "No" });
          this.castCheck++;
    
      
        }
        else{
          this.setState({ cast: event.target.value });
          this.castCheck++;
        }
    
      
      }
      
      activity=(event)=>{
        console.log(event.target.value,"value of citzen")
        if(this.citizenCheck % 2 == 0){
          this.setState({ ativity: "No" });
          this.citizenCheck++;
      
        }
        else{
          this.setState({ citizen: event.target.value });
          this.citizenCheck++;
        }
     

     

    }
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
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Unique Cust ID</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input inputRef={this.uid1} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
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
    <Input inputRef={this.name1} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
   
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
    <Input inputRef={this.houseName1} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
     
     </Grid>
</Grid>
</Grid>
{/* 2nd row */}
<Grid container spacing={16} xs={12} style={{height: "auto"}}>
 {/* 21 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Beneficiary</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Select
       style={{
         width: "86%",height: "30px",padding:"0px",backgroundColor:"white"
       }}

       value={this.state.beneficiary}

       onChange={this.beneficiary}
       input={
         <OutlinedInput
           labelWidth={this.state.labelWidth}
           dropDownMenuProps={dropdownMenuProps}
           name="beneficiary"
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
{/* 22 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Member No.</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                <Input inputRef={this.MemberNo1} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
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
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>office</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                           
                </Grid>
            </Grid>
            {/* 12 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>View Image</Typography>
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
           <Grid item xs={12}> <Button variant="contained" color="primary" style={{backgroundColor:"#1890ff"}}  onClick={()=>console.log(this.uid1.current.value,this.name1.current.value,this.houseName1.current.value,this.state.beneficiary,this.MemberNo1.current.value)}>Submit</Button></Grid>
            </Grid>
            


</Grid>
        
      </div>
    )
  }
      }
   

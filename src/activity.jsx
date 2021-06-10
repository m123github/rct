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

 
export default class Activity extends Component {
    constructor(props) {
        super(props);
        this.uid = React.createRef();
        this.sharebal = React.createRef();
        this.name = React.createRef();
        this.houseName = React.createRef();
        this.MemberNo = React.createRef();
        this.age = React.createRef();
        


        
        this.activityCheck=1;
        this.liabilityCheck=1;
        this.state = {
            activity:"No",
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
      activity=(event)=>{
        console.log(event.target.value,"value of citzen")
        if(this.activityCheck % 2 == 0){
          this.setState({ activity: "No" });
          this.activityCheck++;
      
        }
        else{
          this.setState({ activity: event.target.value });
          this.activityCheck++;
        }
      }

      liability=(event)=>{
        console.log(event.target.value,"value of citzen")
        if(this.liabilityCheck % 2 == 0){
          this.setState({ liability: "No" });
          this.liabilityCheck++;
      
        }
        else{
          this.setState({ liability: event.target.value });
          this.liabilityCheck++;
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
      
    
      handleChange = name=>event => {
        this.setState({ [name]: event.target.checked });
      };

      sex = event => {
        this.setState({ sex: event.target.value });
      };

      blood = event => {
        this.setState({ blood: event.target.value });
      };

      religion = event => {
        this.setState({ religion: event.target.value });
      };
      caste = event => {
        this.setState({ caste: event.target.value });
      };

      prof = (event)=>{
        this.setState({ prof: event.target.value });

      }


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
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Unique Cust ID</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input inputRef={this.uid} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
       </Grid>
</Grid>
{/* 12 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Activity</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <FormControl component="fieldset" >
          
          <RadioGroup
          // inputRef={this.seniorCitizen}
            aria-label="Activity"
            //name="citizen"
            
            value={this.state.activity}
            onClick={this.activity}
          >
            
            <FormControlLabel value="Yes" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl>
   
       </Grid>

</Grid>
{/* 13 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>

 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Liability<span>*</span></Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <FormControl component="fieldset" >
          
          <RadioGroup
          // inputRef={this.seniorCitizen}
            aria-label="Liability"
            //name="citizen"
            
            value={this.state.liability}
            onClick={this.liability}
          >
            
            <FormControlLabel value="Yes" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl>
     
     </Grid>
</Grid>
</Grid>
{/* 2nd row */}
<Grid container spacing={16} xs={12} style={{height: "auto"}}>
 {/* 21 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Share Bal.</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input inputRef={this.sharebal} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
      </Grid>
</Grid>
{/* 22 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Name</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                <Input inputRef={this.name} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
    </Grid>

</Grid>
{/* 23 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>

 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>House Name</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",position:"relative",bottom:"5px"}}>
    <Input inputRef={this.houseName} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
    </Grid>
</Grid>

</Grid>
 {/* 3rd row */}
 <Grid container spacing={16} xs={12} style={{height: "60px",    marginTop:"10px"}}>
            {/* 11 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Member No.</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input inputRef={this.MemberNo} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px" /* fontWeight: "300" */ }}></Input>
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
                            <Input inputRef={this.age} disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
                </Grid>
            
            </Grid>
            {/* 13 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Show closed Accounts?</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                <FormControl component="fieldset" >
          {/* <FormLabel component="legend">Options</FormLabel> */}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={this.state.bulk_sms} onChange={this.handleChange('bulk_sms')} value="bulk_sms" />
              }
              // label="Balance Enquiry"
            />
             </FormGroup>
             </FormControl>
                </Grid>
            </Grid>
            </Grid>


             {/* 4th row */}
             <Grid container spacing={16} xs={12} style={{height: "60px"}}>
            {/* 11 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Liability Summary</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                     
                              </Grid>
            </Grid>
            {/* 12 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Office</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                                </Grid>
            
            </Grid>
            {/* 13 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>View Image</Typography>
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
           <Grid item xs={12}> <Button variant="contained" color="primary" style={{backgroundColor:"#1890ff"}}  onClick={()=>this.props.generalDetails(this.state.sex,this.state.blood,"Btech", this.state.startDate.toISOString().substring(0,10),this.age.current.value,this.state.cardIssued,this.mobileNo.current.value,this.email.current.value,this.phoneNo.current.value,this.state.religion,this.state.caste,this.annualIncome.current.value, this.state.citizen,this.state.minor,this.state.cast,1)}>Next</Button></Grid>
            </Grid>
            


</Grid>
        
      </div>
    )
  }
}

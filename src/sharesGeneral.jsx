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
import CustomizedTable from './table1';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AlertDialog from './nominationAddDialog';
import SearchDialog from './nominationSearch';




const dropdownMenuProps = {
    menuStyle: {
      
      borderRadius: "6%",
      backgroundColor: 'lightgrey',
      width: "30%",
    },
  }

  let id = 0;
function createData(name, calories, fat, carbs,vit) {
  id += 1;
  return { id, name, calories, fat};
}

const rows = [
  createData('', '','',''),
  
];

var rowHeader = ["Si No","Nomination Id","Name","House Name","Relation"];

export default class SharesGeneral extends Component {
    constructor(props) {
        super(props);
        this.id = React.createRef();
    this.name = React.createRef();
    this.housename = React.createRef();
    this.place = React.createRef();
    this.city = React.createRef();
    this.distrct = React.createRef();
    this.age = React.createRef();
  
    this.oficeNo = React.createRef();
    this.EmpNo = React.createRef();
    this.address = React.createRef();
    this.intimation = React.createRef();
        this.state = {
            prefix:"",
            relation:"",
            dob:"",
            dept:"",
            enrollDate: new Date(),
            deptDate:new Date(),
            permanentEmployee:"",
            designation:"",
            expired:"",
            expiredDate:"",
            tablenew :rows,
          dob: new Date()
        };
        this.Date1Change = this.Date1Change.bind(this);
      }
      Date1Change(date) {
        this.setState({
          enrollDate: date
        });
      }
      deptChange(date) {
        this.setState({
          deptDate: date
        });
      }
    state = {
        branch: '',
        year:''
      };
      
      dept = event => {
        this.setState({ dept: event.target.value });
      };

      permanentEmployee = event => {
        this.setState({ permanentEmployee: event.target.value });
      };
designationChange = event => {
  this.setState({ designation: event.target.value });
};
expired= event => {
  this.setState({ expired: event.target.value });
};
expiredChange= event => {
  this.setState({ expired: event.target.value });
};
      handleChange = event => {
        this.setState({ branch: event.target.value });
      };


      prefix = event => {
        this.setState({ prefix: event.target.value });
      };
      relation = event => {
        this.setState({ relation: event.target.value });
      };

      savenew=()=>{
        let allValues = this.props.getAllValues();
    

    
       const post_data = {
    
    "MemNo":allValues[0].memberNo,
    "UniqueCustId" : allValues[0].cuId,
    "OpeningDate":"",
    "BrNo" : allValues[0].BRName,
    "BrDate" :allValues[0].BRDate,
    "OffId" :"",
    "GeneralNo" : allValues[0].generalNo,
    "PenNo" :"",
    "Designation" :"",
    "Department" :"",
    "PmtEmployeeYn" :"",
    "EnrollDate" : allValues[0].EnrollDate,
    "RetireDate" :"",
     "Part" :allValues[0].part,
    "IdCardNo" :allValues[0].idCardNo,
    "SerAreaCode" :allValues[0].serviceArea,
    "WardNo" : allValues[0].ward,
    "ApplAreaCode" :allValues[0].applArea,
    "FarmerType" : allValues[0].FarmerType,
    "AgriCreditLimit" : allValues[0].AgrCrLimit,
    "AgriLandArea" : allValues[0].AgrLandArea,
    "Recommend" :"",
    "ExpiryDetails" :"",
    "DummyYn" : "",
    "ClosingDate" :"",
    "OpeningResShare" : allValues[0].ResidualShare,
    "OpeningBalance" : allValues[0].Balance,
    "OpeningDividend" : allValues[0].Dividend,
    "ChkSumAcNo" :"",
    "ChkSumOpBal" :"",
    "NomType" :allValues[0].memberNo.subStr(4,1),
    "NomNo" :"",
    "NomRelation" :this.state.relation,
    "UniqueCustId" :this.id.current.value
      }
    
      console.log(JSON.stringify(post_data));
    
    //  const flag = fetch('http://localhost:11023/api/ShareMasterA/SaveShareMasterA',
    const flag = fetch('http://localhost:11023/api/ShareMasterA/SaveShareMasterA',


    {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(post_data)
        })
        .then((res) => {
          if (res.status === 200) {
            alert("Saved");
           
          }
          else {
             alert("Failed ");
          }
        }
        )
      }

      componentDidMount(){
        if (this.props.customerSharesData[0]) {
          this.oficeNo.current.value=this.props.customerSharesData[0]["UNIQUE_CUST_ID"];
    //      this.setState({Fstname:this.props.customerSharesData[0]["PREFIX"]});

        }


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
    <Grid item spacing={16} xs={2} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>ID</Typography>
        
      </Grid>
      <Grid item spacing={16} xs={2} style={{height: "auto"}}>
        {/* <Fab color="primary" aria-label="Add" style={{width:"35px",height:"17px"}} >
        <AddIcon />
      </Fab> */}
      <AlertDialog/>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
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
           
 
      <Input inputRef={this.id} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"103px"/* fontWeight: "300" */ }}></Input>
     </Grid>
     <Grid item spacing={16} xs={4} style={{height: "auto"}}>
     <SearchDialog/>
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

                   value={this.state.prefix}

                   onChange={this.prefix}
                   input={
                     <OutlinedInput style={{backgroundColor:"green"}}
                       labelWidth={this.state.labelWidth}
                       dropDownMenuProps={dropdownMenuProps}
                       name="prefix"
                       id="outlined-age-simple"
                     />
                   }
                 >

                   <MenuItem value="Price Discount">Mr</MenuItem>
                   <MenuItem value="Percentage Discount">Mrs</MenuItem>
                   <MenuItem value="Free Product">Ms</MenuItem>

                 </Select>
                 <div className="changewidth" style={{display:"inline"}}>
                 <Input inputRef={this.name} disableUnderline="true" style={{ backgroundColor:"white",marginBottom:"3px",color: "#000000", fontSize: "16px",marginLeft:"5px",width:"112px" }}></Input>
     </div>
     </Grid> 

</Grid>
{/* 13 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>

 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Relation<span>*</span></Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Select
       style={{
         width: "97%",height: "30px",padding:"0px",backgroundColor:"white"
       }}

       value={this.state.relation}

       onChange={this.relation}
       input={
         <OutlinedInput
           labelWidth={this.state.labelWidth}
           dropDownMenuProps={dropdownMenuProps}
           name="relation"
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
{/* 2nd row */}
<Grid container spacing={16} xs={12} style={{height: "auto"}}>
 {/* 21 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>House Name<span>*</span></Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input inputRef={this.housename} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
        </Grid>
</Grid>
{/* 22 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Place</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input inputRef={this.place} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
    </Grid>

</Grid>
{/* 23 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>

 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>City</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input inputRef={this.city} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
    </Grid>
</Grid>

</Grid>


{/* 3rd row */}
<Grid container spacing={16} xs={12} style={{height: "auto",marginTop:"24px"}}>
 {/* 21 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>District</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input inputRef={this.distrct} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
        </Grid>
</Grid>
{/* 22 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Date of Birth</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <DatePicker style={{marginLeft:"10px",width: "60%",height: "30px",padding:"3px"}}
        selected={this.state.dob}
        onChange={this.Date1Change}
      />
    </Grid>

</Grid>
{/* 23 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>

 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Age</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input inputRef={this.age} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
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



{/* <CustomizedTable rt={this.state.tablenew}  ty={rowHeader} /> */}





<Grid container spacing={16} xs={12} style={{height: "auto"}}>
<Typography component="div" style={{ color: "#000000", fontSize: "16px",textAlign:"left",paddingTop:"3px",marginBottom:"20px",marginTop:"20px",fontWeight:"bold" }}>Employment</Typography>
</Grid>



<Grid container spacing={16} xs={12} style={{height: "60px"}}>
{/* 11 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Office No.</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    
      <Input inputRef={this.oficeNo}  disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
     
     </Grid> 
</Grid>
{/* 12 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Department</Typography>
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
     <Select
       style={{
         width: "97%",height: "30px",padding:"0px",backgroundColor:"white"
       }}

       value={this.state.dept}

       onChange={this.dept}
       input={
         <OutlinedInput
           labelWidth={this.state.labelWidth}
           dropDownMenuProps={dropdownMenuProps}
           name="dept"
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
{/* 13 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>

 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Enroll Date<span>*</span></Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    
      <DatePicker style={{marginLeft:"10px",width: "60%",height: "30px",padding:"3px"}}
        selected={this.state.enrollDate}
        onChange={this.Date1Change}
      />
     </Grid> 
</Grid>
</Grid>
{/* 2nd row */}
<Grid container spacing={16} xs={12} style={{height: "auto"}}>
 {/* 21 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Department Date</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <DatePicker style={{marginLeft:"10px",width: "60%",height: "30px",padding:"3px"}}
        selected={this.state.deptDate}
        onChange={this.deptChange}
      />
        </Grid>
</Grid>
{/* 22 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Permanent Emp. No.</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input inputRef={this.EmpNo}  disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
    </Grid>

</Grid>
{/* 23 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>

 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Address</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input inputRef={this.address}  disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
    </Grid>
</Grid>

</Grid>


{/* 3rd row */}
<Grid container spacing={16} xs={12} style={{height: "auto",marginTop:"24px"}}>
 {/* 21 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Permanent Employee?</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="PermanentEmployee"
            name="permanentEmployee"
            
            value={this.state.permanentEmployee}
            onClick={this.permanentEmployee}>
            
            <FormControlLabel value="permanentEmployee" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl>
        </Grid>
</Grid>
{/* 22 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Designation</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Select
       style={{
         width: "97%",height: "30px",padding:"0px",backgroundColor:"white"
       }}

       value={this.state.designation}

       onChange={this.designationChange}
       input={
         <OutlinedInput
           labelWidth={this.state.labelWidth}
           dropDownMenuProps={dropdownMenuProps}
           name="designation"
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
       
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
   
    </Grid>
</Grid>

</Grid>



<Grid container spacing={16} xs={12} style={{height: "auto"}}>
<Typography component="div" style={{ color: "#000000", fontSize: "16px",textAlign:"left",paddingTop:"3px",marginTop:"20px",marginBottom:"20px",fontWeight:"bold" }}>Expiry Details</Typography>
</Grid>

{/* 4th row */}
<Grid container spacing={16} xs={12} style={{height: "auto",marginTop:"24px"}}>
 {/* 21 row */}
 <Grid container spacing={16} xs={4} style={{height: "60px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Expired?</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="expired"
            name="expired"
            
            value={this.state.expired}
            onClick={this.expired}
          >
            
            <FormControlLabel value="citizen" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl>
        </Grid>
</Grid>
{/* 22 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>
 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Expired on</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <DatePicker style={{marginLeft:"10px",width: "60%",height: "30px",padding:"3px"}}
        selected={this.state.expiredDate}
        onChange={this.expiredChange}
      />
    </Grid>

</Grid>
{/* 23 row */}
<Grid container spacing={16} xs={4} style={{height: "40px"}}>

 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
 <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Intimaion</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input inputRef={this.intimation} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"173px"/* fontWeight: "300" */ }}></Input>
    </Grid>
</Grid>

</Grid>

<Grid container spacing={16} xs={12} style={{height: "40px",marginTop:"20px",marginBottom:"20px"}}>
<Button variant="contained" color="primary"onClick={this.savenew} style={{backgroundColor:"#1890ff",float:"right",marginRight:"14px",marginTop:"10px"}} >
                 save
              </Button>
</Grid>




</Grid>
      </div>
    )
  }
}

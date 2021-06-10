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
import FormGroup from '@material-ui/core/FormGroup';




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

export default class NominationView extends Component {
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
        this.state = {
            prefix:"",
            relation:"",
            dob:"",
            minor:"false",
            tablenew :rows,
          dob: new Date()
        };
        this.Date1Change = this.Date1Change.bind(this);
      }
      Date1Change(date) {
        this.setState({
          dob: date
        });
      }
    state = {
        branch: '',
        year:''
      };
      handleminor = name => event => {
        this.setState({ [name]: event.target.checked });
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



  render() {
    
    return (
      <div>
        <Grid container spacing={16} style={{height: "auto",marginTop:"24px"}}>

{/* 1st row */}
<Grid container spacing={16} xs={12} style={{height: "60px"}}>
{/* 11 row */}
<Grid container spacing={16} xs={6} style={{height: "40px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Nominee No.</Typography>
        
      
        {/* <Fab color="primary" aria-label="Add" style={{width:"35px",height:"17px"}} >
        <AddIcon />
      </Fab> */}
     
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
           
 
      <Input inputRef={this.id} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:"141px"/* fontWeight: "300" */ }}></Input>
     
     </Grid> 
</Grid>
{/* 12 row */}
<Grid container spacing={16} xs={6} style={{height: "40px"}}>
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
     
                 
                 <Input inputRef={this.name} disableUnderline="true" style={{ backgroundColor:"white",marginBottom:"3px",color: "#000000", fontSize: "16px",marginLeft:"5px",width:"141px" }}></Input>
    
     </Grid> 

</Grid>

</Grid>
{/* 2nd row */}










 








<Grid container spacing={16} xs={12} style={{height: "40px",marginTop:"0px",marginBottom:"20px"}}>
<Button variant="contained" color="primary"onClick={this.savenew} style={{backgroundColor:"#1890ff",float:"right",marginRight:"14px",marginTop:"10px"}} >
                 search
              </Button>
</Grid>




</Grid>
      </div>
    )
  }
}

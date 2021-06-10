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
  import PresentAddress from "./presentAddress";
  import PermanentAddress from "./permanentAddress";
  import Guardian from "./guardian";
  import LimitCardOperations from "./limitCardOperations";
  import "./login.css";
  import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import Checkbox from '@material-ui/core/Checkbox';
 


const dropdownMenuProps = {
    menuStyle: {
      
      borderRadius: "6%",
      backgroundColor: 'lightgrey',
      width: "30%",
    },
  }
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
  

 
export default class Entry extends Component {
    constructor(props) {
        super(props);
        this.custId = React.createRef();
        this.bdate = React.createRef();
        this.name2 = React.createRef();
        this.careOf = React.createRef();
        this.surName = React.createRef();
        this.customerPIN = React.createRef();
        this.transactionalsms = React.createRef();
        this.bulksms = React.createRef();
        this.permanentAddress={};
        this.PresentAddress={};
        this.identityDetails={};
        this.generalDetails={};
        this.transacCheck = 1;
        this.bulkCheck = 1;
        this.state = {
          bulk_sms: true,//checkbox
          transactional_sms:false,//checkbox
          startDate: new Date(),
          transac:"",
          bulk:"",
          branch: '',
          year:'',
          value: 0,
          type:"",
          co:"",
          Fname:"",
          customerid:"",
          count:0,
          nameCheck:true,
            conameCheck:true,
            surnameCheck:true
        };
        this.Date1Change = this.Date1Change.bind(this);
      }
      Date1Change(date) {
        this.setState({
          startDate: date
        });
      }
    
      generatePin = () => {

        var pin = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
     
        this.customerPIN.current.value = pin;
     
     
      }
      cstid=()=>{
        const flag = fetch("http://localhost:11023/api/uniquecustomer/generatecode?branch=0001"
            ).catch(res => {
             
            })
              .then((res) => {
             
            
                if (res.status === 200) {
        
                  res.json().then(res=> {
                    console.log(res, "first");
                    var result1 = [];
                    result1 = res;
                    console.log("customerID", result1)
                    var newvalue=JSON.parse(result1.data)
                   console.log(newvalue,"CustomerID obtained");
                   alert(newvalue);
                   this.setState({customerid:newvalue});          
                  
                  });
        
                }
                else {
                  alert("Failed to save");
                }
              }
              );
            }
      
      handleCheckboxChange = name=>event => {
        this.setState({ [name]: event.target.checked });
      };

      handleChange = name=>event => {
        this.setState({ [name]: event.target.checked });
      };

      type = event => {
        this.setState({ type: event.target.value });
      };

      Fname = event => {
        this.setState({ Fname: event.target.value });
      };

      co = event => {
        this.setState({ co: event.target.value });
      };
      handleChangeValue = (event, value) => {
  
        this.setState({ value });
      };
      validationname=(e)=>{
        // alert(e.target.value.substring(0,3));
        if(e.target.value.length>0)
      {
      var nme=new RegExp(/^[a-zA-Z., ]+$/);
      if((e.target.value.match(nme)))
      {
        var patt=new RegExp(/([a-zA-Z])\1\1\1/);
        if((!e.target.value.match(patt)))
         {
          this.setState({nameCheck:true});
           e.target.style = "border: 1px solid white !important;";
         }
       else
         {
          this.setState({nameCheck:false});
           e.target.style ="border: 1px solid red !important;";
         }
      }
      else
      {
        this.setState({nameCheck:false});
        e.target.style ="border: 1px solid red !important;";
      }
      }
      else
      {
        this.setState({nameCheck:true});
        e.target.style = "border: 1px solid white !important;";
      }
      
    }
      validationconame=(e)=>{
        // alert(e.target.value.substring(0,3));
        if(e.target.value.length>0)
        {
        var nme=new RegExp(/^[a-zA-Z]+$/);
        if((e.target.value.match(nme)))
        {
          var patt=new RegExp(/([a-zA-Z])\1\1\1/);
          if((!e.target.value.match(patt)))
           {
            this.setState({conameCheck:true});
             e.target.style = "border: 1px solid white !important;";
           }
         else
           {
            this.setState({conameCheck:false});
             e.target.style ="border: 1px solid red !important;";
           }
        }
        else
        {
          this.setState({conameCheck:false});
          e.target.style ="border: 1px solid red !important;";
        }
        }
        else
        {
          this.setState({conameCheck:true});
          e.target.style = "border: 1px solid white !important;";
        }
        
      }
      validationsurname=(e)=>{
        // alert(e.target.value.substring(0,3));
        if(e.target.value.length>0)
        {
        var nme=new RegExp(/^[a-zA-Z]+$/);
        if((e.target.value.match(nme)))
        {
          var patt=new RegExp(/([a-zA-Z])\1\1\1/);
          if((!e.target.value.match(patt)))
           {
            this.setState({surnameCheck:true});
             e.target.style = "border: 1px solid white !important;";
           }
         else
           {
            this.setState({surnameCheck:false});
             e.target.style ="border: 1px solid red !important;";
           }
        }
        else
        {
          this.setState({surnameCheck:false});
          e.target.style ="border: 1px solid red !important;";
        }
        }
        else
        {
          this.setState({surnameCheck:true});
          e.target.style = "border: 1px solid white !important;";
        }  
      }
componentDidMount(){
   this.cstid();
    this.setState({value:0})
    console.log(this.props.CustomerEdit,"edit")
    if(!(Object.entries(this.props.CustomerEdit).length === 0 && this.props.CustomerEdit.constructor === Object)){

//       this.custId.current.value = this.props.CustomerEdit.uniqueCustId;
//       this.setState({type :this.props.CustomerEdit.custType});
//      // this.setState({startDate : new Date(this.props.CustomerEdit.openingDate)});
//       this.setState({Fname : this.props.CustomerEdit.prefix});
//         this.name2.current.value = this.props.CustomerEdit.custName;
//   this.setState({co :this.props.CustomerEdit.FHRelation});
//   this.careOf.current.value = this.props.CustomerEdit.cFHName;
//   this.surName.current.value = this.props.CustomerEdit.urName;
//  this.customerPIN.current.value = this.props.CustomerEdit.ustPin;
//   this.setState({transactional_sms : this.props.CustomerEdit.TransSmsYn});
//   this.setState({bulk_sms: this.props.CustomerEdit.BulkSmsYn});

this.custId.current.value = this.props.CustomerEdit.uniqueCustId;
     this.setState({type :this.props.CustomerEdit.custType});
    // this.setState({startDate : new Date(this.props.CustomerEdit.openingDate)});
     this.setState({Fname : this.props.CustomerEdit.prefix});
       this.name2.current.value = this.props.CustomerEdit.custName;
 this.setState({co :this.props.CustomerEdit.fhRelation});
 this.careOf.current.value = this.props.CustomerEdit.fhName;
 this.surName.current.value = this.props.CustomerEdit.surName;
this.customerPIN.current.value = this.props.CustomerEdit.custPin;
 this.setState({transactional_sms : this.props.CustomerEdit.transSmsYn});
 this.setState({bulk_sms: this.props.CustomerEdit.bulkSmsYn});
    }
//   else if(window.localStorage.getItem("Entry")){
//       let Entry =JSON.parse( window.localStorage.getItem("Entry"));
//     //  console.log(permanentAddress,"object2");
    


//       this.custId.current.value = Entry.custId;
//       this.setState({type :Entry.type});
//       this.setState({startDate : new Date(Entry.startDate)});
//       this.setState({Fname : Entry.Fname});
//         this.name2.current.value = Entry.name2;
//   this.setState({co :Entry.co});
//   this.careOf.current.value = Entry.careOf;
//   this.surName.current.value = (Entry.surName)?Entry.surName:"";
//  this.customerPIN.current.value = Entry. customerPIN;
//   this.setState({transactional_sms : Entry.transactionalsms});
//   this.setState({bulk_sms: Entry.bulksms});

// }

    
}

transac=(event)=>{
  // console.log(event.target.value,this.check,"cjekfb")
  if(this.transacCheck % 2 != 0){
    this.setState({ transac: event.target.value });
    this.transacCheck++;

  }
  else{
    this.setState({ transac: "" });
    this.transacCheck++;
  }


}
bulk=(event)=>{
  console.log(event.target.value,"cjekfb")
  if(this.bulkCheck % 2 != 0){
    this.setState({ bulk: event.target.value });
    this.bulkCheck++;

  }
  else{
    this.setState({ bulk: "" });
    this.bulkCheck++;
  }


}

limitCardValues=(balanceEnquiry,withdrawal,deposit,customer_enquiry,mini_statement,purchase,value)=>{
  console.log(balanceEnquiry,withdrawal,deposit,customer_enquiry,mini_statement,purchase,"parent")
  this.limitCard = {balanceEnquiry:(balanceEnquiry)?balanceEnquiry:"",withdrawal:(withdrawal)?withdrawal:"",deposit:(deposit)?deposit:"",customer_enquiry:(customer_enquiry)?customer_enquiry:"",
    mini_statement:(mini_statement)?mini_statement:"",purchase:(purchase)?purchase:""};
    if(value){ 
       this.setState({value:value})
  }
}

PermanentAddressValues=(houseName,street,place,city,pin,state,state1array,district,district1array,country,houseName2,street2,place2,city2,pin2,state2,state2array,district2,district2array,country2,value)=>{
  console.log(houseName,street,place,city,pin,state,district,country,houseName2,street2,place2,city2,pin2,state2,district2,country2,"parent")
  this.permanentAddress = {houseName:(houseName)?houseName:"",street:(street)?street:"",place:(place)?place:"",city:(city)?city:"",pin:(pin)?pin:"",state:(state)?state :"",state1array:(state1array)?state1array :"",district:(district)?district:"",district1array:(district1array)?district1array:"",country:(country)?country :"",houseName2:(houseName2)?houseName2 :"",street2:(street2)?street2:"",place2:(place2)?place2:"",city2:(city2)?city2 :"",pin2:(pin2)?pin2 :"",state2:(state2)?state2:"",state2array:(state2array)?state2array:"",district2:(district2)?district2:"",district2array:(district2array)?district2array:"",country2:(country2)?country2:""};
  //console.log(this.PermanentAddress.houseName,"hi there")
  if(value){ 
     this.setState({value:value})
 // console.log(this.PermanentAddress.houseName,"hi there")
//  var test2Object={HouseName:this.permanentAddress.houseName,Street:this.permanentAddress.street,Place:this.permanentAddress.place,City: this.permanentAddress.city,
//   Pin:this.permanentAddress.pin,States:this.permanentAddress.states,District:this.permanentAddress.district,Country:this.permanentAddress.country,HouseName2:this.permanentAddress.houseName2,Street2:this.permanentAddress.street2,Place2:this.permanentAddress.place2,
//   City2:this.permanentAddress.city2,Pin2:this.permanentAddress.pin2,States2:this.permanentAddress.states2,District2:this.permanentAddress.district2,Country2:this.permanentAddress.country2}
//   window.localStorage.setItem("permanentAddress",JSON.stringify(test2Object))
}

}
PresentAddressValues=(houseName,street,place,city,pin,state,district,country,value)=>{
  console.log(houseName,street,place,city,pin,state,district,country,"parent")
  this.PresentAddress = {houseName:houseName,street:street,place:place,city:city,pin:pin,state:state,district:district,country:country};
  if(value){
     this.setState({value:value})
  
}

}
identityDetailsValues=(pan,electionNo,drivingNo,passportNo,aadharNo,nprNo,id,age,crCardNo,rationCardNo,paySlip,itCertificate,electrciyBill,telephoneBill,bnkStatement,certFromOther,value)=>{
  console.log(pan,electionNo,drivingNo,passportNo,aadharNo,nprNo,id,age,crCardNo,rationCardNo,paySlip,itCertificate,electrciyBill,telephoneBill,bnkStatement,certFromOther,value,"parent")
  this.identityDetails = {pan:(pan)?pan:"",electionNo:(electionNo)?electionNo:"",passportNo:(passportNo)?passportNo:"",drivingNo:(drivingNo)?drivingNo:"",aadharNo:(aadharNo)?aadharNo:"",nprNo:(nprNo)?nprNo:"",id:(id)?id:"",age:(age)?age:"",crCardNo:(crCardNo)?crCardNo:"",rationCardNo:(rationCardNo)?rationCardNo:"",paySlip:(paySlip)?paySlip:"",itCertificate:(itCertificate)?itCertificate:"",electrciyBill:(electrciyBill)?electrciyBill:"",telephoneBill:(telephoneBill)?telephoneBill:"",bnkStatement:(bnkStatement)?bnkStatement:"",certFromOther:(certFromOther)?certFromOther:"",};
  if(value){ 
     this.setState({value:value})
  var testObject ={pan:this.identityDetails.pan, ElectionId:this.identityDetails.electionNo, DrivingNo:this.identityDetails.drivingNo,PassportNo:this.identityDetails.passportNo,AadharNo:this.identityDetails.aadharNo,
    nprNo:this.identityDetails.nprNo,OtherId:this.identityDetails.id,Age:this.identityDetails.age,CreditCardNo:this.identityDetails.crCardNo,RationCardNo:this.identityDetails.rationCardNo,Payslip:this.identityDetails.paySlip,
    ItCertfcate:this.identityDetails.itCertificate,ElectricityBill:this.identityDetails.electrciyBill,TelephoneBill:this.identityDetails.telephoneBill,Bankstatement:this.identityDetails.bnkStatement,CertiicateFromOther:this.identityDetails.certFromOther};
  window.localStorage.setItem("identityDetails",JSON.stringify(testObject))
}

}
generalDetailsValues=(sex,blood,prof,birthDate,age,cardIssued,mobileNo,email,phoneNo,religion,caste,allCaste,annualIncome,seniorCitizen,scst,value)=>{
   console.log(sex,blood,prof,birthDate,age,cardIssued,mobileNo,email,phoneNo,religion,caste,annualIncome,seniorCitizen,scst,allCaste,"parent")
  this.generalDetails={sex:(sex)?sex:"",blood:(blood)?blood:"",prof:(prof)?prof:"",birthDate:(birthDate)?birthDate:"",age:(age)?age:"",cardIssued:(cardIssued)?cardIssued:"",mobileNo:(mobileNo)?mobileNo:"",email:(email)?email:"",phoneNo:(phoneNo)?phoneNo:"",religion:(religion)?religion:"",caste:(caste)?caste:"",allCaste:allCaste,annualIncome:(annualIncome)?annualIncome:"",seniorCitizen:(seniorCitizen)?seniorCitizen:"",scst:(scst)?scst:""};
 //this.generalDetails={allCaste:allCaste} ;
 if(value){ 
     this.setState({value:value})
  var test1Object={Sex:this.generalDetails.sex,Blood:this.generalDetails.blood,Prof:this.generalDetails.prof,BirthDate: this.generalDetails.startDate,
    Age:this.generalDetails.age,CardIssued:this.generalDetails.cardIssued,MobileNo:this.generalDetails.mobileNo,Email:this.generalDetails.email,PhoneNo:this.generalDetails.phoneNo,Religion:this.generalDetails.religion,Caste:this.generalDetails.caste,allCaste:this.generalDetails.allCaste,
    AnnualIncome:this.generalDetails.annualIncome,SeniorCitizen:this.generalDetails.citizen,Minor:this.generalDetails.minor,Scst:this.generalDetails.cast}
    window.localStorage.setItem("generalDetails",JSON.stringify(test1Object))
  }
}

getPermanentAddress =()=>{
  return this.PermanentAddress;
}

getAllValues =()=>{
  console.log(this.generalDetails,":this.generalDetails")
  return [this.identityDetails,this.permanentAddress,this.PresentAddress,this.generalDetails,{custId:this.custId.current.value,type:this.state.type,startDate:this.state.startDate.toISOString().substring(0,10),Fname:this.state.Fname,name2:this.name2.current.value,
  co:this.state.co,careOf:this.careOf.current.value,surName:this.surName.current.value,customerPIN:this.customerPIN.current.value,transactionalsms:this.state.transactional_sms,bulksms:this.state.bulk_sms},this.limitCard];
}
tabValue=(value)=>{
this.setState({value:value})
}
  render() {
    const { value } = this.state;
  console.log(this.state.nameCheck,this.state.conameCheck,this.state.surnameCheck,"check valkues")

    return (
      <div>
        <Grid container spacing={16} style={{height: "245px", overflowX: "hidden" }}>
       
        <Grid container xs={12} style={{height: "91px",paddingTop:"30px"}}>
        <Grid container spacing={16} xs={4} style={{height: "40px"}}>
        {/* <Grid item xs={4} style={{height:"40px",display:"flex",flexDirection:"row",padding:"6px" }}> */}
        <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Cust.ID</Typography>
        </Grid>
        <Grid item spacing={16} xs={8} style={{height: "auto"}}>
        <Input inputRef={this.custId} value={this.state.customerid}   className="increasewidth" disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000" ,fontSize: "16px" /* fontWeight: "300" */ }}></Input>
        </Grid>
        </Grid>
        <Grid container spacing={16} xs={4} style={{height: "40px"}}>
        <Grid container spacing={16} xs={4} style={{height: "40px"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Type</Typography>
        </Grid>
        <Grid item spacing={16} xs={8} style={{height: "auto"}}>
        <Select className="increasewidth"
                   style={{
                     width: "179px",height: "30px",padding:"0px",backgroundColor:"white"
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

                   <MenuItem value="P">Person</MenuItem>
                   <MenuItem value="I">Institution</MenuItem>

                 </Select>
                 </Grid>
          
        </Grid>
        <Grid container spacing={16} xs={4} style={{height: "40px"}}>
        <Grid container spacing={16} xs={4} style={{height: "40px"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px",marginRight:"36px" }}>Date</Typography>
       </Grid>
       <Grid item spacing={16} xs={8} style={{height: "auto"}}>
        <DatePicker  style={{marginLeft:"10px",width: "60%",height: "20px",padding:"3px"}}
        selected={this.state.startDate}
        onChange={this.Date1Change}
      />
      </Grid>
        </Grid>
        </Grid>

        <Grid container xs={12} style={{height: "63px"}}>
        <Grid container spacing={16} xs={4} style={{height: "40px"}}>
        <Grid container spacing={16} xs={4} style={{height: "40px"}}>

        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Name</Typography>
       
       </Grid>
       <Grid item spacing={16} xs={8} style={{height: "auto"}}>
        <Select className={"smallDropdown"}
                   style={{
                      height: "30px",padding:"0px",backgroundColor:"white"
                   }}

                   value={this.state.Fname}

                   onChange={this.Fname}
                   input={
                     <OutlinedInput style={{backgroundColor:"green"}}
                       labelWidth={this.state.labelWidth}
                       dropDownMenuProps={dropdownMenuProps}
                       name="Fname"
                       id="outlined-age-simple"
                     />
                   }
                 >

                   <MenuItem value="Mr">Mr.</MenuItem>
                   <MenuItem value="Mrs">Mrs.</MenuItem>
                   <MenuItem value="Ms">Ms.</MenuItem>
                   <MenuItem value="Miss">Miss.</MenuItem>
                   <MenuItem value="ku">Kum.</MenuItem>
                   <MenuItem value="sr">Sri.</MenuItem>
                   <MenuItem value="sm">Smt.</MenuItem>
                   <MenuItem value="M/s">M/s.</MenuItem>
                   <MenuItem value="Mst">Mstr.</MenuItem>
                   <MenuItem value="ba">Baby.</MenuItem>
                   <MenuItem value="re">Rev.</MenuItem>
                   <MenuItem value="dr">Dr.</MenuItem>
                   <MenuItem value="adv">Adv.</MenuItem>
                   <MenuItem value="shg">SHG.</MenuItem>
                   <MenuItem value="kud">KUD.</MenuItem>

                 </Select>
                 <Input onChange={this.validationname.bind(this)} inputRef={this.name2} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",marginLeft:"5px",width:"100px" }}></Input>
    </Grid>
    </Grid>

     <Grid container spacing={16} xs={4} style={{height: "40px"}}>
        <Grid container spacing={16} xs={4} style={{height: "40px"}}>
    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>C/o</Typography>
       </Grid>
       <Grid item spacing={16} xs={8} style={{height: "auto"}}>
        <Select className={"smallDropdown"}
                   style={{
                     width: "70px",height: "30px",padding:"0px",backgroundColor:"white"
                   }}

                   value={this.state.co}

                   onChange={this.co}
                   input={
                     <OutlinedInput
                       labelWidth={this.state.labelWidth}
                       dropDownMenuProps={dropdownMenuProps}
                       name="co"
                       id="outlined-age-simple"
                     />
                   }
                 >

                   <MenuItem value="F">Father</MenuItem>
                   <MenuItem value="H">Husband</MenuItem>
                   <MenuItem value="M">Mother</MenuItem>

                 </Select>
                 <Input onChange={this.validationconame.bind(this)} inputRef={this.careOf} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",marginLeft:"4px",width:"100px" }}></Input>
    </Grid>
    </Grid>
    <Grid container spacing={16} xs={4} style={{height: "40px"}}>
        <Grid container spacing={16} xs={4} style={{height: "40px"}}>
    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Surname</Typography>
    </Grid>
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Input onChange={this.validationsurname.bind(this)} defaultValue='' inputRef={this.surName} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",width:  "179px"}}></Input>
    </Grid>
    </Grid>
  

        </Grid>
        {/* <Grid container style={{backgroundColor:"red",height:"40px"}}>
        
        </Grid> */}
        {/* <Grid container xs={12} style={{backgroundColor:"blue",height:"40px"}}>KJH
        </Grid> */}

<Grid container xs={12} style={{height: "91px"}}>
        <Grid container spacing={16} xs={4} style={{height: "40px"}}>
        <Grid container spacing={16} xs={4} style={{height: "40px"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Customer PIN</Typography>
        </Grid>
        <Grid item spacing={16} xs={8} style={{height: "auto"}}>
        <Input inputRef={this.customerPIN} disableUnderline="true" style={{ backgroundColor:"white",color: "#000000", fontSize: "16px"/* fontWeight: "300" */ }}></Input>
        <Button variant="contained" color="primary"onClick={this.generatePin} style={{backgroundColor:"#1890ff",width:"100px",fontSize:"8px",marginTop:"9px", padding:"6px"}} >
        Generate PIN</Button>
        </Grid>
        </Grid>
        
        <Grid container spacing={16} xs={8} style={{height: "40px"}}>
        <Grid container spacing={16} xs={3} style={{height: "40px"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"9px" }}>Transactional SMS  </Typography>
       </Grid>
       <Grid item spacing={16} xs={3} style={{height: "auto"}}>
        {/* <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="transac"
            
            value={this.state.transac}
            onClick={this.transac}
          >
            
            <FormControlLabel value="transac" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl> */}
        <FormControl component="fieldset" >
          {/* <FormLabel component="legend">Options</FormLabel> */}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox  checked={this.state.transactional_sms} onChange={this.handleCheckboxChange('transactional_sms')} value="transactional_sms" />
              }
              // label="Balance Enquiry"
            />
             </FormGroup>
             </FormControl>

</Grid>
        {/* </Grid> */}
       {/* <Grid container spacing={16} xs={4} style={{height: "40px"}}> */}
        <Grid container spacing={16} xs={2} style={{height: "40px"}}>
     
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"9px" }}>Bulk SMS  </Typography>
        </Grid>
        <Grid item spacing={16} xs={3} style={{height: "auto",position:"relative",bottom:"5px"}}>
        {/* <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="bulk"
            
            value={this.state.bulk}
            onClick={this.bulk}
          >
            
            <FormControlLabel value="bulk" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl> */}
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
        </Grid>
        

       
        {/* <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        General Details
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                               <GeneralDetails/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                             Identity Details List 1
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                             <Identity_details_list1/>
                </AccordionItemPanel>
            </AccordionItem><AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                            Permanent Address 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                             <PermanentAddress/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                             Present Address
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                             <PresentAddress/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                            Guardian
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                             <Guardian/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                            Limit Card Operations
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                             <LimitCardOperations/>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion> */}

<AppBar position="static" color="default" style={{width:"100%",paddingTop:"0px",marginTop: "21px"}}>
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
            <Tab label="Address" />
            {/* <Tab label="Present Address" /> */}
            <Tab label="Limit Card Operations" />
            
            {/* <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" /> */}
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><GeneralDetails getAllValues={this.getAllValues} generalDetails={this.generalDetailsValues} CustomerEdit={this.props.CustomerEdit} getAllValues={this.getAllValues}/></TabContainer>}
        {value === 1 && <TabContainer><Identity_details_list1 getAllValues={this.getAllValues} identityDetails={this.identityDetailsValues} CustomerEdit={this.props.CustomerEdit}/></TabContainer>}
        {value === 2 && <TabContainer><PermanentAddress getAllValues={this.getAllValues} PermanentAddress={this.PermanentAddressValues} CustomerEdit={this.props.CustomerEdit}/></TabContainer>}
        {/* {value === 3 && <TabContainer><PresentAddress PresentAddressValues={this.PresentAddressValues} getPermanentAddress={this.getPermanentAddress}/></TabContainer>} */}
        {value === 3 && <TabContainer><LimitCardOperations saveEnable={this.state.nameCheck&&this.state.conameCheck&&this.state.surnameCheck} getAllValues={this.getAllValues} CustomerEdit={this.props.CustomerEdit} limitCardValues={this.limitCardValues} /></TabContainer>}



       
        
      </div>
    )
  }
}

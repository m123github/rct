import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button'; 
import Grid from '@material-ui/core/Grid';  



const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

class LimitCardOperations extends React.Component {
  state = {
  //  gilad: true,
  balance_enquiry:true, //checkbox1
  //  jason: false,
  withdrawal: false, //checkbox2
  //  antoine: false,
  deposit:false, //checbox3
  //  jason1:false,
  customer_enquiry:false, //checkbox4
  //  antoine1:false,
  mini_statement: false, //checkbox5
    jason2:false,
   // antoine1:false,
   purchase:false, //checkbox6
  };

  // handleChange = name => event => {
  //   this.setState({ [name]: event.target.checked });
  // };

  handleChangeBalanceenquiry = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeWithdrawal= name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeDeposit = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeCustomerEnquiry = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeMiniStatement = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangePurchase= name => event => {
    this.setState({ [name]: event.target.checked });
  };
  save=()=>{

    let allValues = this.props.getAllValues();
   
   
   console.log(allValues[1],"addresss details");
   const post_data = {
"UniqueCustId":allValues[4].custId,
"CustType":allValues[4].type,
"Prefix":allValues[4].Fname,
"CustName":allValues[4].name2,
"Sex":allValues[3].sex,
"OpeningDate":allValues[4].startDate,
"Age":allValues[3].age,
"Dob":allValues[3].birthDate,
"SurName":(allValues[4].surName)?allValues[4].surName:"",
"FHName":allValues[4].careOf,
"FHRelation":allValues[4].co,
"Phone":allValues[3].phoneNo,
"MobileNo":allValues[3].mobileNo,
"Email":allValues[3].email,
"AnnualIncome":allValues[3].annualIncome,
"Religion":allValues[3].religion,
"CasteCode":allValues[3].caste,
"BackwardYn":"",
"ScstYn":allValues[3].scst,
 "MinorYn":(allValues[3].seniorCitizen == "Minor")?"Y":"N",
//"MinorYn":"lklo",
"SeniorYn":(allValues[3].seniorCitizen != "Minor")?"Y":"N",

"Profession":allValues[3].prof,
"BGroup":allValues[3].blood,
"PermanentHouse":allValues[1].houseName,
"PermanentStreet":allValues[1].street,
"PermanentPlace":allValues[1].place,
"PermanentCity":allValues[1].city,
"PermanentPin":allValues[1].pin,
"PermanentCountryId":allValues[1].country,
"PermanentStateId":allValues[1].state,
"PermanentDistrictId":allValues[1].district,
"PresentHouse":allValues[1].houseName2,
"PresentStreet":allValues[1].street2,
"PresentPlace":allValues[1].place2,
"PresentCity":allValues[1].city2,
"PresentPin":allValues[1].pin2,
"PresentCountryId":allValues[1].country2,
"PresentStateId":allValues[1].state2,
"PresentDistrictId":allValues[1].district2,
//"MinorYn":allValues[3].minor,
"GName":"",
"GAddressHouse":"",
"GRelation":"",
"GAddressStreet":"",
"GAddressPlace":"",
"GAddressCity":"",
"GAddressPin":"",
"Pan":allValues[0].pan,
"AdharNo":allValues[0].aadharNo,
"NprNo":allValues[0].nprNo,
"ElectionIdCardNo":allValues[0].electionNo,
"RationCardNo":"",
"DrivingLicence":allValues[0].drivingNo,
"PassportNo":allValues[0].PassportNo,
"CustPin":allValues[4].customerPIN,
"BulkSmsYn":(allValues[4].bulksms)?"Y":"N",
"TransSmsYn":(allValues[4].transactionalsms)?"Y":"N",
"CardIssuedYn":(allValues[3].cardIssued)?"Y":"N",
"AtmStatus":"",
"IdFromOther":"",
"CrCardStmt":"",
"PaySlip":"",
"ItCert":"",
"ElectricityBill":"",
"TelephoneBill":"",
   "BankStmt":this.state.mini_statement,
//"BankStmt":allValues[5].mini_statement,
"CertFromOther":""

  }

  console.log(JSON.stringify(post_data));

  const flag = fetch('http://localhost:11023/api/uniquecustomer/savedata',
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
    if(!(Object.entries(this.props.CustomerEdit).length === 0 && this.props.CustomerEdit.constructor === Object)){
          
      this.setState({balance_enquiry : ""});
      this.setState({withdrawal : ""});
      this.setState({deposit : ""});
      this.setState({customer_enquiry : ""});
      this.setState({mini_statement : this.props.CustomerEdit.bankStmt});
      this.setState({purchase : ""});
  
      }
    else {
    
      let allValues = this.props.getAllValues();
      console.log(allValues[5],"all5")
  if(allValues[5]){
    this.setState({balance_enquiry : allValues[5].balanceEnquiry});
    this.setState({withdrawal : allValues[5].withdrawal});
    this.setState({deposit : allValues[5].deposit});
    this.setState({customer_enquiry : allValues[5].customer_enquiry});
    this.setState({mini_statement : allValues[5].mini_statement});
    this.setState({purchase : allValues[5].mini_statement});
  }
    }

}
componentWillUnmount(){
  this.props.limitCardValues(this.state.balance_enquiry,this.state.withdrawal,this.state.deposit,this.state.customer_enquiry,this.state.mini_statement,this.state.purchase)
}


  render() {
    const { classes } = this.props;
    const { gilad, jason, antoine ,jason1,antoine1,jason3,antoine2} = this.state;
    const error = [gilad, jason, antoine].filter(v => v).length !== 2;

    return (
      <React.Fragment className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Options</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={this.state.balance_enquiry} onChange={this.handleChangeBalanceenquiry('balance_enquiry')} value="balance_enquiry" />
              }
              label="Balance Enquiry"
            />
            <FormControlLabel
              control={
                <Checkbox checked={this.state.withdrawal} onChange={this.handleChangeWithdrawal('withdrawal')} value="withdrawal" />
              }
              label="Withdrawal"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.deposit}
                  onChange={this.handleChangeDeposit('deposit')}
                  value="deposit"
                />
              }
              label="Deposit"
            />
             <FormControlLabel
              control={
                <Checkbox checked={this.state.customer_enquiry} onChange={this.handleChangeCustomerEnquiry('customer_enquiry')} value="customer_enquiry" />
              }
              label="Customer Enquiry"
            />
            <FormControlLabel
              control={
                <Checkbox checked={this.state.mini_statement} onChange={this.handleChangeMiniStatement('mini_statement')} value="mini_statement" />
              }
              label="Mini Statement"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.purchase}
                  onChange={this.handleChangePurchase('purchase')}
                  value="purchase"
                />
              }
              label="Purchase"
            />
          </FormGroup>
          {/* <FormHelperText>Be careful</FormHelperText> */}
        </FormControl>
         {/* 4th rows */}
 <Grid container spacing={16} xs={12} style={{position:"absolute",right:"38px",bottom:"70px",maxWidth:"84px"}}>
           <Grid item xs={12}> <Button variant="contained" color="primary" style={{backgroundColor:"#1890ff"}} disabled={(this.props.saveEnable)?false:true} onClick={this.save}>Save</Button></Grid>
            </Grid>
       
      </React.Fragment>
    );
  }
}

LimitCardOperations.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LimitCardOperations);
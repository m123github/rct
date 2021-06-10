import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'; 


export default class Identity_details_list1 extends Component {
    constructor(props) {
        super(props);
        this.pan = React.createRef();
        this.electionNo = React.createRef();
        this.drivingNo = React.createRef();
        this.passportNo = React.createRef();
        this.aadharNo = React.createRef();
        this.nprNo = React.createRef();
        this.id = React.createRef();
        this.age = React.createRef();
        this.crCardNo = React.createRef();
        this.rationCardNo = React.createRef();
        this.paySlip = React.createRef();
        this.itCertificate = React.createRef();
        this.electrciyBill = React.createRef();
        this.telephoneBill = React.createRef();
        this.bnkStatement = React.createRef();
        this.certFromOther = React.createRef();
      
      }
      componentDidMount(){
        if(!(Object.entries(this.props.CustomerEdit).length === 0 && this.props.CustomerEdit.constructor === Object)){
           
            this.pan.current.value = this.props.CustomerEdit.pan;
            this.electionNo.current.value = this.props.CustomerEdit.electionIdCardNo ;
            this.drivingNo.current.value = this.props.CustomerEdit.drivingLicence;
            this.passportNo.current.value = this.props.CustomerEdit.passportNo;
            this.aadharNo.current.value = this.props.CustomerEdit.adharNo;
            this.nprNo.current.value = this.props.CustomerEdit.nprNo;
             this.id.current.value = this.props.CustomerEdit.idFromOther;
            this.age.current.value = this.props.CustomerEdit.age;
             this.crCardNo.current.value = this.props.CustomerEdit.crCardStmt;
             this.rationCardNo.current.value = this.props.CustomerEdit.rationCardNo;
             this.paySlip.current.value =this.props.CustomerEdit.paySlip;
             this.itCertificate.current.value = this.props.CustomerEdit.itCert;
             this.electrciyBill.current.value = this.props.CustomerEdit.electricityBill;
             this.telephoneBill.current.value = this.props.CustomerEdit.telephoneBill;
             this.bnkStatement.current.value = this.props.CustomerEdit.bankStmt;
             this.certFromOther.current.value = this.props.CustomerEdit.certFromOther;
        }
         else {
            let allValues = this.props.getAllValues();

          this.pan.current.value = (allValues[0].pan)?allValues[0].pan: "";
          this.electionNo.current.value = (allValues[0].electionNo)?allValues[0].electionNo :"" ;
          this.drivingNo.current.value = (allValues[0].drivingNo)?allValues[0].drivingNo :"";
          this.passportNo.current.value = (allValues[0].passportNo)?allValues[0].passportNo : "";
          this.aadharNo.current.value = (allValues[0].aadharNo)?allValues[0].aadharNo : "";
          this.nprNo.current.value = (allValues[0].nprNo)?allValues[0].nprNo :"";
          this.id.current.value = (allValues[0].id)?allValues[0].id :"";
          this.age.current.value = (allValues[0].age)?allValues[0].age :"";
          this.crCardNo.current.value = (allValues[0].crCardNo) ? allValues[0].crCardNo :"";
          this.rationCardNo.current.value = (allValues[0].rationCardNo)? allValues[0].rationCardNo :"";
          this.paySlip.current.value =(allValues[0].paySlip)? allValues[0].paySlip :"";
          this.itCertificate.current.value = (allValues[0].itCertificate)? allValues[0].itCertificate :"";
          this.electrciyBill.current.value = (allValues[0].electrciyBill)? allValues[0].electrciyBill :"";
          this.telephoneBill.current.value = (allValues[0].telephoneBill)? allValues[0].telephoneBill :"";
          this.bnkStatement.current.value = (allValues[0].bnkStatement)?allValues[0].bnkStatement :"";
          this.certFromOther.current.value = (allValues[0].certFromOther)?allValues[0].certFromOther :"";
      }

      }
      componentWillUnmount(){
        this.props.identityDetails(this.pan.current.value,this.electionNo.current.value,this.drivingNo.current.value,this.passportNo.current.value,this.aadharNo.current.value,this.nprNo.current.value,this.id.current.value,this.age.current.value,
            this.crCardNo.current.value,this.rationCardNo.current.value,
            this.paySlip.current.value,this.itCertificate.current.value,this.electrciyBill.current.value,this.telephoneBill.current.value,this.bnkStatement.current.value,this.certFromOther.current.value)
      }
  render() {
    return (
      <React.Fragment>

            <Grid container spacing={16} style={{height: "auto"}}>

            {/* 1st row */}
            <Grid container spacing={16} xs={12} style={{height: "91px",paddingTop:"30px"}}>
            {/* 11 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>PAN</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input inputRef={this.pan} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            {/* 12 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Election ID No.</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{}}>
                            <Input inputRef={this.electionNo} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            
            </Grid>
            {/* 13 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Driving Lic. No.</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input inputRef={this.drivingNo} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            </Grid>
            {/* 2nd row */}
            <Grid container spacing={16} xs={12} style={{height: "62px"}}>
             {/* 21 row */}
             <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Passport No.</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input  inputRef={this.passportNo} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            {/* 22 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Aadhar No.</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input inputRef={this.aadharNo} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            
            </Grid>
            {/* 23 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>NPR No.</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input inputRef={this.nprNo} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            
            </Grid>
            {/* 3rd rows */}
            <Grid container spacing={16} xs={12} style={{height: "91px"}}>
             {/* 31 row */}
             <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>ID from others</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input inputRef={this.id} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            {/* 32 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            {/* typoghraphy */}
            <Grid item spacing={16} xs={4} style={{height: "40px"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Age Today</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "40px"}}>
                            <Input inputRef={this.age} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            
            </Grid>
            {/* 33 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "40px"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Cr. Card Statement</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "40px"}}>
                            <Input inputRef={this.crCardNo} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>


            {/* 4th row */}
            <Grid container spacing={16} xs={12} style={{height: "91px",paddingTop:"30px",marginLeft:"1px"}}>
            {/* 41 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Ration Card No.</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input inputRef={this.rationCardNo} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            {/* 42 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Pay Slip</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{}}>
                            <Input inputRef={this.paySlip} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            
            </Grid>
            {/* 43 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>IT Certificate</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input inputRef={this.itCertificate} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            </Grid>

           {/* 5th row */}

            <Grid container spacing={16} xs={12} style={{height: "65px",marginLeft:"1px"}}>
            {/* 51 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Electricity Bill</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input inputRef={this.electrciyBill} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            {/* 52 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Telephone Bill</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{}}>
                            <Input inputRef={this.telephoneBill} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            
            </Grid>
            {/* 53 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Bank Statement</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input inputRef={this.bnkStatement} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            </Grid>


{/* 6th row */}
            <Grid container spacing={16} xs={12} style={{height: "91px",marginLeft:"1px"}}>
            {/* 61 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Cert. from other</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input inputRef={this.certFromOther} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            {/* 62 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
             {/* typoghraphy */}
             
            
            </Grid>
            {/* 63 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
            
            </Grid>
            </Grid>




            
            {/* 4th rows */}
            <Grid container spacing={16} xs={12} style={{position:"absolute",right:"38px",bottom:"70px",maxWidth:"84px"}}>
           <Grid item xs={12}> <Button variant="contained" color="primary" style={{backgroundColor:"#1890ff"}} onClick={()=>this.props.identityDetails(this.pan.current.value,this.electionNo.current.value,this.drivingNo.current.value,
            this.passportNo.current.value,this.aadharNo.current.value,this.nprNo.current.value,this.id.current.value,this.age.current.value,this.crCardNo.current.value,this.rationCardNo.current.value,
            this.paySlip.current.value,this.itCertificate.current.value,this.electrciyBill.current.value,this.telephoneBill.current.value,this.bnkStatement.current.value,this.certFromOther.current.value,2)}>Next</Button></Grid>
            </Grid>
            
            
            
            </Grid>
            
            
            </Grid>
      </React.Fragment>
    )
  }
}





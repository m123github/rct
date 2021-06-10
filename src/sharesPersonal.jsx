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


var moment = require('moment');
const dropdownMenuProps = {
  menuStyle: {

    borderRadius: "6%",
    backgroundColor: 'lightgrey',
    width: "30%",
  },
}
export default class SharesPersonal extends Component {

  constructor(props) {
    super(props);
    this.memberNo = React.createRef();
    this.generalNo = React.createRef();
    this.cuId = React.createRef();
    this.name22 = React.createRef();
    this.surname = React.createRef();
    this.age2 = React.createRef();
    this.rel = React.createRef();
    this.hsname = React.createRef();
    this.street3 = React.createRef();
    this.place3 = React.createRef();
    this.city3 = React.createRef();
    this.mbNo = React.createRef();
    this.idCardNo = React.createRef();
    this.BRName = React.createRef();
    this.AgrCrLimit = React.createRef();
    this.AgrLandArea = React.createRef();
    this.Balance = React.createRef();
    this.ResidualShare = React.createRef();
    this.Dividend = React.createRef();






    this.state = {
      EnrollDate: new Date(),
      BirthDate: new Date(),
      BRDate: new Date()

    };
    this.EnrollDateChange = this.EnrollDateChange.bind(this);

  }


  EnrollDateChange = (date) => {
    this.setState({
      EnrollDate: date
    });
  }

  BRDateChange = (date) => {
    this.setState({
      BRDate: date
    });
  }


  BirthDateChange = (date) => {
    console.log(date, "birthdate");
    this.setState({
      BirthDate: date

    });
  }


  state = {
    Fstname: "",
    Rlgn: "",
    caste2: "",
    profession2: "",
    part: "",
    serviceArea: "",
    applArea: "",
    ward: "",
    FarmerType: ""
  };




  Fstname = event => {
    this.setState({ Fstname: event.target.value });
  };
  Rlgn = event => {
    this.setState({ Rlgn: event.target.value });
  };
  caste2 = event => {
    this.setState({ caste2: event.target.value });
  };
  profession2 = event => {
    this.setState({ profession2: event.target.value });
  };
  part = event => {
    this.setState({ part: event.target.value });
  };
  serviceArea = event => {
    this.setState({ serviceArea: event.target.value });
  };
  applArea = event => {
    this.setState({ serviceArea: event.target.value });
  };
  FarmerType = event => {
    this.setState({ FarmerType: event.target.value });
  };


  componentDidMount() {
    //console.log(moment.utc(moment(this.props.customerSharesData[0]["brdate"],'DD-MM-YYYY').format('MM-DD-YYYY')).toDate(),"toDate")
    // console.log(this.props.customerSharesData[0]["ENROLL_DATE"]["_d"],"YGFYY");

    // console.log(moment(this.props.customerSharesData[0]["ENROLL_DATE"],'DD-MM-YYYY').format('MM-DD-YYYY'),"fftft");

    // console.log(moment(moment(this.props.customerSharesData[0]["ENROLL_DATE"]["_d"], 'MM-DD-YYYY')).format('DD-MM-YYYY'))


    if (this.props.customerSharesData[0]) {
      console.log(this.props.customerSharesData[0], "this.props.customerSharesData[0]")
      console.log(this.props.customerSharesData[0].shares["GeneralNo"]);
      // moment(this.props.customerSharesData[0]["brdate"],'DD-MM-YYYY').format('MM-DD-YYYY')
      //console.log(this.props.customerSharesData[0],new Date(this.props.customerSharesData[0]),"this.props.customerSharesData")
      //console.log(moment.utc(moment(this.props.customerSharesData[0]["brdate"],'DD-MM-YYYY').format('MM-DD-YYYY')).toDate(),thinew Date(this.props.customerSharesData[0]["brdate"]),"Enroll date")
      this.memberNo.current.value = this.props.customerSharesData[0].shares["MemNo"];
      // this.setState({ EnrollDate:moment(this.props.customerSharesData[0]["ENROLL_DATE"])["_d"] });
      // this.setState({ EnrollDate:moment(moment(this.props.customerSharesData[0]["ENROLL_DATE"]["_d"]), 'MM-DD-YYYY').format('DD-MM-YYYY')});

      this.generalNo.current.value = this.props.customerSharesData[0].shares["GeneralNo"];
      this.cuId.current.value = this.props.customerSharesData[0].shares["UniqueCustId"];
      this.setState({ Fstname: this.props.customerSharesData[0].shares["Prefix"] });
      this.name22.current.value = this.props.customerSharesData[0].unique["CustName"];
      this.surname.current.value = this.props.customerSharesData[0].unique["SurName"];




      // console.log(moment.utc(moment(this.props.customerSharesData[0].shares["brdate"],'YYYY-MM-dd').format('MM-DD-YYYY')).toDate(),'uuu')

      //console.log(this.props.customerSharesData[0].shares["BrDate"].substring(0, 10), "6789");
      var CX = Date.parse(moment(this.props.customerSharesData[0].shares["BrDate"].substring(0, 10), "YYYY-MM-DD").zone(330));
      //alert(CX, "99");
      this.setState({ BirthDate: CX });
      //moment.utc(moment(this.props.customerSharesData[0].shares["BrDate"].substring(0, 10), 'YYYY-MM-dd').format('DD-MM-YYYY')).toDate() });

      // console.log(this.state.BirthDate, "5678");
      this.age2.current.value = this.props.customerSharesData[0].unique["Age"];
      this.rel.current.value = this.props.customerSharesData[0].unique["FHRelation"];
      this.hsname.current.value = this.props.customerSharesData[0].unique["PermanentHouse"];
      this.street3.current.value = this.props.customerSharesData[0].unique["PermanentStreet"];
      this.place3.current.value = this.props.customerSharesData[0].unique["PermanentPlace"];
      this.city3.current.value = this.props.customerSharesData[0].unique["PermanentCity"];
      this.setState({ Rlgn: this.props.customerSharesData[0].unique["Relegion"] });
      this.setState({ caste2: this.props.customerSharesData[0].unique["CasteCode"] });
      this.setState({ profession2: this.props.customerSharesData[0].unique["Profession"] });
      this.mbNo.current.value = this.props.customerSharesData[0].unique["MobileNo"];
      this.setState({ part: this.props.customerSharesData[0].unique["Part"] });
      this.setState({ serviceArea: this.props.customerSharesData[0].shares["SerAreaCode"] });
      this.idCardNo.current.value = this.props.customerSharesData[0].shares["IdCardNo"];
      this.setState({ applArea: this.props.customerSharesData[0].shares["ApplicationArea"] });
      //this.setState({BRDate:this.props.customerSharesData[0].shares["BrDate"]});
      this.BRName.current.value = this.props.customerSharesData[0].shares["BrNo"];
      this.AgrCrLimit.current.value = this.props.customerSharesData[0].shares["AgriCreditLimit"];
      this.setState({ ward: this.props.customerSharesData[0].shares["WardNo"] });
      this.AgrLandArea.current.value = this.props.customerSharesData[0].shares["AgriLandArea"];
      this.setState({ FarmerType: this.props.customerSharesData[0].shares["FarmerType"] });
      this.Balance.current.value = this.props.customerSharesData[0].shares["OpeningBalance"];
      this.ResidualShare.current.value = this.props.customerSharesData[0].shares["OpeningResShare"];
      this.Dividend.current.value = this.props.customerSharesData[0].shares["OpeningDividend"];


    }


  }


  render() {
    return (

      <div>
        <Grid container spacing={16} style={{ height: "auto", marginTop: "24px" }}>


          {/* 1st row */}
          <Grid container spacing={16} xs={12} style={{ height: "60px" }}>
            {/* 11 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Member No.</Typography>
              </Grid>

              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
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
                <Input inputRef={this.memberNo} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px", width: "173px"/* fontWeight: "300" */ }}></Input>

              </Grid>
            </Grid>
            {/* 12 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Enroll Date<span>*</span></Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
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

                <DatePicker style={{ marginLeft: "10px", width: "60%", height: "30px", padding: "3px" }}
                  selected={this.state.EnrollDate}
                  onChange={this.EnrollDateChange}
                />

              </Grid>

            </Grid>

            {/* 13 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>

              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>General No.</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
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
                <Input inputRef={this.generalNo} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px", width: "173px"/* fontWeight: "300" */ }}></Input>
              </Grid>
            </Grid>
          </Grid>


          <Grid container spacing={16} xs={12} style={{ height: "auto" }}>
            <Typography component="div" style={{ color: "#000000", fontSize: "16px", textAlign: "left", paddingTop: "3px", marginBottom: "30px", fontWeight: "bold" }}>Customer Details</Typography>
          </Grid>
          {/* 2nd row */}
          <Grid container spacing={16} xs={12} style={{ height: "auto" }}>


            {/* 21 row */}
            <Grid container spacing={16} xs={4} style={{ height: "60px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Cust. ID<span>*</span></Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <Input inputRef={this.cuId} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px", width: "173px"/* fontWeight: "300" */ }}></Input>
              </Grid>
            </Grid>
            {/* 22 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Name</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>


                <Select className={"smallDropdown"}
                  style={{
                    height: "30px", padding: "0px", backgroundColor: "white"
                  }}

                  value={this.state.Fstname}

                  onChange={this.Fstname}
                  input={
                    <OutlinedInput style={{ backgroundColor: "green" }}
                      labelWidth={this.state.labelWidth}
                      dropDownMenuProps={dropdownMenuProps}
                      name="Fstname"
                      id="outlined-age-simple"
                    />
                  }
                >

                  <MenuItem value="Price Discount">Mr</MenuItem>
                  <MenuItem value="Percentage Discount">Mrs</MenuItem>
                  <MenuItem value="Free Product">Ms</MenuItem>

                </Select>

                <div className="changewidth" style={{ display: "inline" }}>
                  <Input inputRef={this.name22} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px", marginLeft: "5px", width: "112px" }}></Input>
                </div>
              </Grid>

            </Grid>
            {/* 23 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>

              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Surname</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <Input inputRef={this.surname} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px", width: "173px"/* fontWeight: "300" */ }}></Input>
              </Grid>
            </Grid>

          </Grid>
          {/* 3rd row */}
          <Grid container spacing={16} xs={12} style={{ height: "60px", marginTop: "10px" }}>
            {/* 11 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Date of Birth</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <DatePicker style={{ marginLeft: "10px", width: "60%", height: "30px", padding: "3px" }}
                  selected={this.state.BirthDate}
                  onChange={this.BirthDateChange}
                />

              </Grid>
            </Grid>
            {/* 12 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Age</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <Input inputRef={this.age2} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px", width: "173px"/* fontWeight: "300" */ }}></Input>
              </Grid>

            </Grid>
            {/* 13 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>

              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Fath/Hus/Moth</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <Input inputRef={this.rel} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px", width: "173px"/* fontWeight: "300" */ }}></Input>
              </Grid>
            </Grid>
          </Grid>


          {/* 4th row */}
          <Grid container spacing={16} xs={12} style={{ height: "60px" }}>
            {/* 11 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>House Name</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <Input inputRef={this.hsname} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px", width: "173px"/* fontWeight: "300" */ }}></Input>
              </Grid>
            </Grid>
            {/* 12 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Street</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>

                <Input inputRef={this.street3} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
              </Grid>

            </Grid>
            {/* 13 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>

              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Place</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>

                <Input inputRef={this.place3} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>

              </Grid>
            </Grid>
          </Grid>
          {/* 5th rows */}
          <Grid container spacing={16} xs={12} style={{ height: "auto", marginTop: "10px" }}>
            {/* 31 row */}
            <Grid container spacing={16} xs={4} style={{ height: "60px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>City</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", bottom: "5px" }}>
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

                <Input inputRef={this.city3} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
              </Grid>
            </Grid>
            {/* 32 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Religon</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", bottom: "10px" }}>
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
                    width: "60%", height: "30px", padding: "0px", backgroundColor: "white"
                  }}

                  value={this.state.Rlgn}

                  onChange={this.Rlgn}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      dropDownMenuProps={dropdownMenuProps}
                      name="Rlgn"
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
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Caste</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", bottom: "6px" }}>

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
                    width: "60%", height: "30px", padding: "0px", backgroundColor: "white"
                  }}

                  value={this.state.caste2}

                  onChange={this.caste2}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.caste2}
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


          {/* 6th rows */}
          <Grid container spacing={16} xs={12} style={{ height: "auto", marginTop: "10px" }}>
            {/* 31 row */}
            <Grid container spacing={16} xs={4} style={{ height: "60px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Profession</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", bottom: "5px" }}>

                <Select
                  style={{
                    width: "60%", height: "30px", padding: "0px", backgroundColor: "white"
                  }}

                  value={this.state.profession2}

                  onChange={this.profession2}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      dropDownMenuProps={dropdownMenuProps}
                      name="profession2"
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
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>
                  mobile No</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", position: "relative", bottom: "10px" }}>

                <Input inputRef={this.mbNo} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px", marginTop: "10px" /* fontWeight: "300" */ }}></Input>
              </Grid>
            </Grid>
            {/* 33 row */}



          </Grid>



          <Grid container spacing={16} xs={12} style={{ height: "auto" }}>
            <Typography component="div" style={{ color: "#000000", fontSize: "16px", textAlign: "left", paddingTop: "3px", marginBottom: "20px", fontWeight: "bold", marginTop: "20px" }}>Other Details</Typography>
          </Grid>
          <Grid container spacing={16} xs={12} style={{ height: "auto", marginTop: "10px" }}>
            {/* 31 row */}
            <Grid container spacing={16} xs={4} style={{ height: "60px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Part</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", bottom: "5px" }}>
                <Select
                  style={{
                    width: "60%", height: "30px", padding: "0px", backgroundColor: "white"
                  }}

                  value={this.state.part}

                  onChange={this.part}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      dropDownMenuProps={dropdownMenuProps}
                      name="part"
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
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Service Area</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", bottom: "10px" }}>
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
                    width: "60%", height: "30px", padding: "0px", backgroundColor: "white"
                  }}

                  value={this.state.serviceArea}

                  onChange={this.serviceArea}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      dropDownMenuProps={dropdownMenuProps}
                      name="serviceArea"
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
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>ID Card No.</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", bottom: "6px" }}>

                <Input inputRef={this.idCardNo} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>



              </Grid>

            </Grid>

          </Grid>



          <Grid container spacing={16} xs={12} style={{ height: "auto", marginTop: "10px" }}>
            {/* 31 row */}
            <Grid container spacing={16} xs={4} style={{ height: "60px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Appl. Area</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", bottom: "5px" }}>
                <Select
                  style={{
                    width: "60%", height: "30px", padding: "0px", backgroundColor: "white"
                  }}

                  value={this.state.applArea}

                  onChange={this.applArea}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      dropDownMenuProps={dropdownMenuProps}
                      name="applArea"
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
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>B.R Date</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", bottom: "10px" }}>
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

                <DatePicker style={{ marginLeft: "10px", width: "60%", height: "30px", padding: "3px" }}
                  selected={this.state.BRDate}
                  onChange={this.BRDateChange}
                />


              </Grid>
            </Grid>
            {/* 33 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>B.R. Name</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", position: "relative", bottom: "6px" }}>



                <Input inputRef={this.BRName} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>

              </Grid>

            </Grid>

          </Grid>



          <Grid container spacing={16} xs={12} style={{ height: "auto", marginTop: "10px" }}>
            {/* 31 row */}
            <Grid container spacing={16} xs={4} style={{ height: "60px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Agr.cr.Limit</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", bottom: "5px" }}>
                <Input inputRef={this.AgrCrLimit} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>


              </Grid>
            </Grid>
            {/* 32 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Ward</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", bottom: "10px" }}>
                <Select
                  style={{
                    width: "60%", height: "30px", padding: "0px", backgroundColor: "white"
                  }}

                  value={this.state.ward}

                  onChange={this.ward}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      dropDownMenuProps={dropdownMenuProps}
                      name="ward"
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
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Agrl.Land Area</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", position: "relative", bottom: "6px" }}>

                <Input inputRef={this.AgrLandArea} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>



              </Grid>

            </Grid>

          </Grid>






          <Grid container spacing={16} xs={12} style={{ height: "auto", marginTop: "10px" }}>
            {/* 31 row */}
            <Grid container spacing={16} xs={4} style={{ height: "60px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Farmer Type</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", bottom: "5px" }}>
                <Select
                  style={{
                    width: "60%", height: "30px", padding: "0px", backgroundColor: "white"
                  }}

                  value={this.state.FarmerType}

                  onChange={this.FarmerType}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      dropDownMenuProps={dropdownMenuProps}
                      name="FarmerType"
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
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>

              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", bottom: "10px" }}>



              </Grid>
            </Grid>
            {/* 33 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>

              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", position: "relative", bottom: "6px" }}>





              </Grid>

            </Grid>

          </Grid>





          <Grid container spacing={16} xs={12} style={{ height: "auto", marginTop: "20px" }}>
            <Typography component="div" style={{ color: "#000000", fontSize: "16px", textAlign: "left", paddingTop: "3px", marginBottom: "30px", fontWeight: "bold" }}>Opening Details</Typography>
          </Grid>
          <Grid container spacing={16} xs={12} style={{ height: "auto", marginTop: "10px" }}>
            {/* 31 row */}
            <Grid container spacing={16} xs={4} style={{ height: "60px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Balance</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", bottom: "5px" }}>
                <Input inputRef={this.Balance} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>


              </Grid>
            </Grid>
            {/* 32 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Residual Share</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", bottom: "10px" }}>
                <Input inputRef={this.ResidualShare} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>




              </Grid>
            </Grid>
            {/* 33 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Dividend</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", position: "relative", bottom: "6px" }}>

                <Input inputRef={this.Dividend} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>



              </Grid>

            </Grid>

          </Grid>

          <Grid container spacing={16} xs={12} style={{ height: "40px", marginTop: "20px", marginBottom: "20px" }}>
            <Button variant="contained" color="primary" onClick={() => this.props.PersonalDetails(this.memberNo.current.value, this.state.EnrollDate, this.generalNo.current.value, this.cuId.current.value,
              "fstname", "surname", "BirthDate", "age2", "rel", "hsname", "street3", "place3", "city3", "Rlgn", "caste2", "profession2", "mbNo", this.state.part, this.state.serviceArea,
              this.idCardNo.current.value, this.state.applArea, this.state.BRDate, this.BRName.current.value, this.AgrCrLimit.current.value, this.state.ward, this.AgrLandArea.current.value,
              this.state.FarmerType, this.Balance.current.value, this.ResidualShare.current.value, this.Dividend.current.value, 1)} style={{ backgroundColor: "#1890ff", float: "right", marginRight: "14px", marginTop: "10px" }} >
              Next
              </Button>
          </Grid>



        </Grid>
      </div>
    )
  }
}

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

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Radiobutton from './radiobutton';

var moment = require('moment');


const dropdownMenuProps = {
  menuStyle: {

    borderRadius: "6%",
    backgroundColor: 'lightgrey',
    width: "30%",
  },
}


export default class GeneralDetails extends Component {
  constructor(props) {
    super(props);
    this.birthDate = React.createRef();
    this.age = React.createRef();
    this.cardIssued = React.createRef();
    this.mobileNo = React.createRef();
    this.email = React.createRef();
    this.phoneNo = React.createRef();
    this.annualIncome = React.createRef();
    this.seniorCitizen = React.createRef();
    this.minor = React.createRef();
    this.scst = React.createRef();


    this.editCheck = 0;
    this.cardCheck = 1;
    this.citizenCheck = 1;
    this.minorCheck = 1;
    this.castCheck = 1;
    this.state = {
      startDate: "",
      prof: "",
      emailCheck: true,
      mobileCheck: true,
      profOptions: [],
      minor: "",
      //cast:"No",
      citizen: "",
      caste: "",
      religion: "",
      sex: "",
      blood: "",
      resultArray: [{ Profession1: "", Code: "" }],
      religionArray: [{ Descr: "", Code: "" }],
      casteArray: [{ Descr: "", Code: "" }],
      // cardIssued:"No",
      cardIssued: false,//checkbox
      cast: "N",//checkbox
      citizen: "",//for radio button from child
      count: 0
    };
    this.Date1Change = this.Date1Change.bind(this);
  }
  radiobutton = (a) => {
    console.log(a, "radio")
    this.setState({ citizen: a })
  }
  Date1Change(date) {
    this.setState({
      startDate: date
    });
    var now = moment().format("YYYY-MM-DD");
    console.log(now)
    var birth = moment(date).format("YYYY-MM-DD");
    console.log(birth)
    if(birth>now)
    {
      alert("yess");
      console.log(this.birthDate,"hi")
      //this.birthDate.event.target.style = "border: 1px solid red !important;";
      //e.target.style = "border: 1px solid red !important;";
    }
    else
    {
      alert("nooo");
     //e.target.style = "border: 1px solid white !important;";
    }
  }
  state = {
    branch: '',
    year: ''
  };

  minorClick = (event) => {
    console.log(event.target.value, "value of minor")
    if (this.minorCheck % 2 == 0) {
      this.setState({ minor: "No" });
      this.minorCheck++;

    }
    else {
      this.setState({ minor: event.target.value });
      this.minorCheck++;
    }


  }
  citizen = (event) => {
    console.log(event.target.value, "value of citzen")
    if (this.citizenCheck % 2 == 0) {
      this.setState({ citizen: "N" });
      this.citizenCheck++;

    }
    else {
      this.setState({ citizen: event.target.value });
      this.citizenCheck++;
    }


  }
  handlecast = name => event => {
    this.setState({ [name]: event.target.checked?"N":"Y" });
  };
  handlecardIssued = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  card = (event) => {
    console.log(event.target.value, "Value of card")
    if (this.cardCheck % 2 == 0) {
      this.setState({ cardIssued: "No" });
      this.cardCheck++;

    }
    else {
      this.setState({ cardIssued: event.target.value });
      this.cardCheck++;
    }


  }


  castClick = (event) => {
    console.log(event.target.value, "Value of Cast")
    if (this.castCheck % 2 == 0) {
      this.setState({ cast: "No" });
      this.castCheck++;


    }
    else {
      this.setState({ cast: event.target.value });
      this.castCheck++;
    }


  }


  handleChange = event => {
    this.setState({ branch: event.target.value });
  };

  sex = event => {
    this.setState({ sex: event.target.value });
  };

  blood = event => {
    this.setState({ blood: event.target.value });
  };

  SelectReligion = event => {
    console.log(event, event.target.value, "selected event")
    this.setState({ religion: event.target.value });
    setTimeout(() => {
      this.casteOptions1();
    }, 100);

    console.log(this.state.religion, "bvalue")
  };
  SelectCaste = event => {

    console.log("select cast")
    this.setState({ caste: event.target.value });
  };
  SelectProfes = event => {
    console.log(event.target.value,"selected profession")
    this.setState({ prof: event.target.value });
  }
  ProfOptions1 = () => {
    const flag = fetch("http://localhost:11023/api/uniquecustomer/getprofession"
    ).catch(res => {

    })
      .then((res) => {


        if (res.status === 200) {
          res.json().then(res => {
            console.log(res, "first");
            var result1 = [];
            result1 = res;
            console.log("profession array", result1)
            var resultArray = JSON.parse(result1.data)
            console.log(resultArray, "yyy");
            this.setState({ resultArray });






          });

        }
        else {
          alert("Failed to save");
        }
      }
      );
  }
  religionOptions1 = () => {
    const flag = fetch("http://localhost:11023/api/uniquecustomer/getreligion"
    ).catch(res => {

    })
      .then((res) => {


        if (res.status === 200) {

          res.json().then(res => {
            console.log(res, "first");
            var result1 = [];
            result1 = res;
            console.log("gahds", result1)
            var religionArray = JSON.parse(result1.data)
            console.log(religionArray, "religion array when page loads")
            this.setState({ religionArray });






          });

        }
        else {
          alert("Failed to save");
        }
      }
      );
  }
  casteOptions1 = () => {
    console.log(this.state.religion, "reli")
    const postdata = {
      religcode: this.state.religion

    }
    const flag = fetch(`http://localhost:11023/api/uniquecustomer/getcast?religcode=${this.state.religion}`
    ).catch(res => {

    })
      .then((res) => {


        if (res.status === 200) {

          res.json().then(res => {
            console.log(res, "first");
            var result1 = [];
            result1 = res;
            console.log("gahds", result1)
            var casteArray = JSON.parse(result1.data)

            this.setState({ casteArray });






          });

        }
        else {
          alert("Failed to save");
        }
      }
      );
  }
  validationmob = (e) => {
    // alert(e.target.value.substring(0,3));
    if (e.target.value.length > 0) {
      var exp = new RegExp(/([0-9])\1\1\1\1\1/);
      var patt = new RegExp(/^[789]\d{9}$/);
      if ((!e.target.value.match(patt))) {
        this.setState({ mobileCheck: false });
        e.target.style = "border: 1px solid red !important;";
      }
      //  else
      //    {console.log("3")
      //    e.target.style ="border: 1px solid red !important;";
      //    }
      else if (((e.target.value).substring(1, 3) === '23')) {
        this.setState({ mobileCheck: false });
        e.target.style = "border: 1px solid red !important;";
      }
      //  else{console.log("4")
      //  e.target.style = "border: 1px solid white !important;";
      //  }
      else if (((e.target.value).substring(1, 2) === '0') || ((e.target.value).substring(1, 4) === '234') || ((e.target.value).substring(1, 4) === '212') || ((e.target.value).substring(1, 4) === '254')) {
        this.setState({ mobileCheck: false });
        e.target.style = "border: 1px solid red !important;";
      }
      //  else{console.log("6")
      //  e.target.style = "border: 1px solid red !important;";
      //  }

      else if ((e.target.value.match(exp))) {
        this.setState({ mobileCheck: false });
        e.target.style = "border: 1px solid red !important;";
      }
      else {
        this.setState({ mobileCheck: true });
        e.target.style = "border: 1px solid white !important;";
      }
    }
    else {
      this.setState({ mobileCheck: true });
      e.target.style = "border: 1px solid white !important;";
    }
  }
  validationemail = (e) => {
    if (e.target.value.length > 0) {
      var email = new RegExp(/(\S+)@(\S+)\.(\S+)/);
      if ((e.target.value.match(email))) {
        this.setState({ emailCheck: true });
        e.target.style = "border: 1px solid white !important;";
      }
      else {
        this.setState({ emailCheck: false });
        e.target.style = "border: 1px solid red !important;";
      }
    }
    else {
      this.setState({ emailCheck: true });
      e.target.style = "border: 1px solid white !important;";
    }

    //     if(this.state.emailvalid === 0)
    //     {
    //       e.target.style ="border: 1px solid red !important;";
    //     }

    //  else{
    //   e.target.style ="border: 1px solid white !important;";
    //  }
  }
    
  
  componentDidMount() {
    this.ProfOptions1();
    this.religionOptions1();
    console.log(new Date());
    if (!(Object.entries(this.props.CustomerEdit).length === 0 && this.props.CustomerEdit.constructor === Object)) {
     
      this.setState({ sex: this.props.CustomerEdit.sex });
      this.setState({ blood: this.props.CustomerEdit.bGroup });
      this.setState({ prof: this.props.CustomerEdit.profession });
      //this.setState({startDate : this.props.CustomerEdit.Dob});
      this.age.current.value = this.props.CustomerEdit.age;
      this.setState({ cardIssued: this.props.CustomerEdit.cardIssuedYn });
      this.mobileNo.current.value = this.props.CustomerEdit.mobileNo;
      this.email.current.value = this.props.CustomerEdit.email;
      this.phoneNo.current.value = this.props.CustomerEdit.phone;
      this.setState({ religion: this.props.CustomerEdit.religion });
      this.setState({ caste: this.props.CustomerEdit.casteCode });
      this.annualIncome.current.value = this.props.CustomerEdit.annualIncome;
      this.setState({ citizen: (this.props.CustomerEdit.seniorYn == "Y") ? "Y" : "N" });
      // this.setState({minor : this.props.CustomerEdit.MinorYn});
      this.setState({ cast: this.props.CustomerEdit.scstYn });

    }
    else {
      let allValues = this.props.getAllValues();
      console.log(allValues[3].allCaste,allValues[3],"allValues[3].allCaste!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      this.setState({casteArray:(allValues[3].allCaste)?allValues[3].allCaste:[]})
      this.setState({ sex: allValues[3].sex });
      this.setState({ blood: allValues[3].blood });
      this.setState({ prof: allValues[3].prof });
      this.setState({ startDate: allValues[3].birthDate });
      this.age.current.value = (allValues[3].age) ? allValues[3].age : "";
      this.setState({ cardIssued: allValues[3].cardIssued });
      this.mobileNo.current.value = (allValues[3].mobileNo) ? allValues[3].mobileNo : "";
      this.email.current.value = (allValues[3].email) ? allValues[3].email : "";
      this.phoneNo.current.value = (allValues[3].phoneNo) ? allValues[3].phoneNo : "";
      this.setState({ religion: allValues[3].religion });
      this.setState({ caste: allValues[3].caste });
      this.annualIncome.current.value = (allValues[3].annualIncome) ? allValues[3].annualIncome : "";
      this.setState({ citizen: allValues[3].seniorCitizen });
      // this.setState({minor : allValues[3].minor});
      this.setState({ cast: allValues[3].scst });
    }

  }

  componentWillUnmount() {
    if(this.state.mobileCheck == true && this.state.emailCheck == true)
    {
    this.props.generalDetails(this.state.sex, this.state.blood,this.state.prof, this.state.startDate, this.age.current.value, this.state.cardIssued, this.mobileNo.current.value, this.email.current.value, this.phoneNo.current.value, this.state.religion, this.state.caste,this.state.casteArray, this.annualIncome.current.value, this.state.citizen, this.state.cast)
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
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Sex</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <Select
                  style={{
                    width: "179px", height: "30px", padding: "0px", backgroundColor: "white"
                  }}

                  value={this.state.sex}

                  onChange={this.sex}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      dropDownMenuProps={dropdownMenuProps}
                      name="sex"
                      id="outlined-age-simple"
                    />
                  }
                >

                  <MenuItem value="M">Male</MenuItem>
                  <MenuItem value="F">Female</MenuItem>
                  {/* <MenuItem value="Free Product">A+ve</MenuItem> */}

                </Select>    </Grid>
            </Grid>
            {/* 12 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Blood Group</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <Select
                  style={{
                    width: "179px", height: "30px", padding: "0px", backgroundColor: "white"
                  }}

                  value={this.state.blood}

                  onChange={this.blood}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      dropDownMenuProps={dropdownMenuProps}
                      name="blood"
                      id="outlined-age-simple"
                    />
                  }
                >

                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                  <MenuItem value="AB-">AB-</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="O-">O-</MenuItem>

                </Select>    </Grid>

            </Grid>
            {/* 13 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>

              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Profession<span>*</span></Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <Select
                  style={{
                    width: "179px", height: "30px", padding: "0px", backgroundColor: "white"
                  }}

                  value={this.state.prof}

                  onChange={this.SelectProfes}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      dropDownMenuProps={dropdownMenuProps}
                      name="prof"
                      id="outlined-age-simple"
                    />
                  }
                >
                  {
                    this.state.resultArray.map(values => (
                      <MenuItem value={values.Code}>{values.Profession1}</MenuItem>
                    ))
                  }



                </Select>    </Grid>
            </Grid>
          </Grid>
          {/* 2nd row */}
          <Grid container spacing={16} xs={12} style={{ height: "auto" }}>
            {/* 21 row */}
            <Grid container spacing={16} xs={4} style={{ height: "60px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Date of Birth<span>*</span></Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <DatePicker inputRef={this.birthDate} style={{ marginLeft: "10px", width: "60%", height: "30px", padding: "3px" }}
                  selected={this.state.startDate}
                  onChange={this.Date1Change}
                />    </Grid>
            </Grid>
            {/* 22 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Age</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <Input inputRef={this.age} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px", width: "179px"/* fontWeight: "300" */ }}></Input>
              </Grid>

            </Grid>
            {/* 23 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>

              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Card issued?</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", position: "relative", bottom: "5px" }}>
                {/* <FormControl inputRef={this.cardIssued} component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            //name="citizen"
            
            value={this.state.cardIssued}
            onClick={this.card}
          >
            
            <FormControlLabel value="Yes" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl> */}
                <FormControl component="fieldset" >
                  {/* <FormLabel component="legend">Options</FormLabel> */}
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={this.state.cardIssued} onChange={this.handlecardIssued('cardIssued')} value="cardIssued" />
                      }
                    // label="Balance Enquiry"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
            </Grid>

          </Grid>
          {/* 3rd row */}
          <Grid container spacing={16} xs={12} style={{ height: "60px", marginTop: "10px" }}>
            {/* 11 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Mobile No.</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <Input onChange={this.validationmob.bind(this)} inputRef={this.mobileNo} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px", width: "179px" /* fontWeight: "300" */ }}></Input>
              </Grid>
            </Grid>
            {/* 12 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Email ID</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <Input onChange={this.validationemail.bind(this)} inputRef={this.email} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px", width: "179px"/* fontWeight: "300" */ }}></Input>
              </Grid>

            </Grid>
            {/* 13 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>

              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Phone No.</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <Input inputRef={this.phoneNo} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
              </Grid>
            </Grid>
          </Grid>


          {/* 4th row */}
          <Grid container spacing={16} xs={12} style={{ height: "60px" }}>
            {/* 11 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Religion</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <Select
                  style={{
                    width: "179px", height: "30px", padding: "0px", backgroundColor: "white"
                  }}
                  value={this.state.religion}

                  onChange={this.SelectReligion}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      dropDownMenuProps={dropdownMenuProps}
                      name="religion"
                      id="outlined-age-simple"
                    />
                  }
                >

                  {
                    this.state.religionArray.map(values => (
                      <MenuItem value={values.Code}>{values.Descr}</MenuItem>
                    ))
                  }


                </Select>                </Grid>
            </Grid>
            {/* 12 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Caste</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <Select
                  style={{
                    width: "179px", height: "30px", padding: "0px", backgroundColor: "white"
                  }}

                  value={this.state.caste}

                  onChange={this.SelectCaste}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      dropDownMenuProps={dropdownMenuProps}
                      name="caste"
                      id="outlined-age-simple"
                    />
                  }
                >

                  {
                    this.state.casteArray.map(values => (
                      <MenuItem value={values.Code}>{values.Descr}</MenuItem>
                    ))
                  }


                </Select>                </Grid>

            </Grid>
            {/* 13 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>

              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Anual Income</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto" }}>
                <Input inputRef={this.annualIncome} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
              </Grid>
            </Grid>
          </Grid>
          {/* 5th rows */}
          <Grid container spacing={16} xs={12} style={{ height: "auto" }}>
            {/* 31 row */}
            <Grid container spacing={16} xs={4} style={{ height: "60px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Senior citizen?</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", position: "relative", bottom: "5px" }}>
                <Radiobutton radio={this.radiobutton} radiogeneral={this.state.citizen}></Radiobutton>
              </Grid>
            </Grid>
            {/* 32 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                {/* <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Minor?</Typography> */}
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", position: "relative", bottom: "10px" }}>
                {/* <FormControl component="fieldset" >
          
          <RadioGroup
           // inputRef={this.minor}
            aria-label="Gender"
            //name="minor"
            
            value={this.state.minor}
            onClick={this.minorClick}
          >
            
            <FormControlLabel value="Yes" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl> */}
              </Grid>
            </Grid>
            {/* 33 row */}
            <Grid container spacing={16} xs={4} style={{ height: "40px" }}>
              {/* typoghraphy */}
              <Grid item spacing={16} xs={4} style={{ height: "auto" }}>
                <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>SC/ST?</Typography>
              </Grid>
              {/* component */}
              <Grid item spacing={16} xs={8} style={{ height: "auto", position: "relative", bottom: "6px" }}>

                {/* <FormControl component="fieldset" >
          
          <RadioGroup 
          inputRef={this.scst}
            aria-label="Gender"
            name="cast"
            
            
            value={this.state.cast}
            onClick={this.castClick}
          >
            
            <FormControlLabel value="Yes" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl> */}
                <FormControl component="fieldset" >
                  {/* <FormLabel component="legend">Options</FormLabel> */}
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={this.state.cast} onChange={this.handlecast('cast')} value="cast" />
                      }
                    // label="Balance Enquiry"
                    />
                  </FormGroup>
                </FormControl>



              </Grid>

            </Grid>

          </Grid>
          {/* 4th rows */}
          <Grid container spacing={16} xs={12} style={{ position: "absolute", right: "38px", bottom: "70px", maxWidth: "84px" }}>
            <Grid item xs={12}> <Button variant="contained" disabled={(this.state.mobileCheck == true && this.state.emailCheck == true) ? false : true} color="primary" style={{ backgroundColor: "#1890ff" }} onClick={() => this.props.generalDetails(this.state.sex, this.state.blood, this.state.prof, this.state.startDate, this.age.current.value, this.state.cardIssued, this.mobileNo.current.value, this.email.current.value, this.phoneNo.current.value, this.state.religion, this.state.caste,this.state.casteArray, this.annualIncome.current.value, this.state.citizen, this.state.cast, 1)}>Next</Button></Grid>
          </Grid>



        </Grid>

      </div>
    )
  }
}

import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { whileStatement } from '@babel/types';
import Button from '@material-ui/core/Button';
import "./login.css";
import YearPicker from "react-year-picker";
import { NavLink } from 'react-router-dom'



const dropdownMenuProps = {
  menuStyle: {
    border: "2px solid black",
    borderRadius: "6%",
    backgroundColor: 'lightgrey',
    width: "30%",
  },
}
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.Username = React.createRef();
    this.Password = React.createRef();
    this.OTP = React.createRef();
    this.DateChange = this.DateChange.bind(this);
  }
  state = {
    branch: '',
    year:''
  };
  DateChange(date) {
    console.log(date);
  }

  handleChange = event => {
    this.setState({ branch: event.target.value });
  };
  // handleChange1 = event => {
  //   this.setState({ year: event.target.value });
  // };
saveLoginDetails=()=>{
  console.log(this.Username.current.value,this.Password.current.value,this.OTP.current.value,this.state.branch,this.state.year)
}
componentDidMount(){
  // const flag = fetch("http://ec2-13-126-203-186.ap-south-1.compute.amazonaws.com:8090/Scheme/GetAllSchemes"
  //           ).catch(res => {
             
  //           })
  //             .then((res) => {
             
            
  //               if (res.status === 200) {
        
  //                 res.json().then(res=> {
  //                   console.log(res, "first");
  //                   var result1 = [];
  //                   result1 = res;
  //                   console.log("gahds", result1)
        
  //                   const suggestion = result1.map((obj) => (
        
  //                     {
        
  //                       value: obj.SchemeID,
  //                       label: obj.SchemeName,
        
  //                     }))
  //                   console.log("sugg" , suggestion);
                 
        
  //                   this.setState({ Schemelist: suggestion });
                  
    
  //                 });
        
  //               }
  //               else {
  //                 alert("Failed to save");
  //               }
  //             }
  //             );
            
}
  render() {
    return (
      <div>
        <React.Fragment>
      <Grid container spacing={16} style={{height: "48.7rem", overflowX: "hidden" }} className="loginbackground-image">
      
        {/* 1st column */}
        <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
          <Grid container style={{ height: "50%", fontFamily: 'Muli' }}>
          <Grid item xs={12} style={{display:"flex" }}>
            <Grid item xs={2} style={{}}>
            {/* <img src="./golf.jpg" alt="golf"/> */}
            <img src={require('./images/logo1.png')} style={{paddingLeft:"29px"}} />
            </Grid>
            <Grid item xs={10} style={{ }}>
              <Typography component="div" style={{ color: "#0a549e",fontWeight:"bold", fontSize: "23px",paddingTop:"19px" }}>NAIVE PLUS SOFTWARE SOLUTIONS PVT LTD.</Typography>
            </Grid>
            </Grid>
            <Grid item xs={12}>
            <Typography component="div" style={{ color: "black", fontSize: "23px",paddingTop:"16px",textAlign:"center" }}>Co-Bank+</Typography>
            <Typography component="div" style={{ color: "black", fontSize: "16px",paddingTop:"16px",textAlign:"center" }}>A complete online banking
             software for co-operative sector</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* 2nd column */}
        <Grid item xs={6} style={{display: "flex", alignItems: "center" }}>
          {/* <Grid container style={{ height: "70%" ,backgroundColor: "pink", display: "flex" }}> */}
         

            <Grid container xs={12} style={{ backgroundColor: "#00000045", display: "flex", alignItems: "center",paddingTop:"26px",paddingBottom:"43px" }}>
            <Grid item xs={12} style={{ marginBottom:"25px" }}>
           
              <Typography component="div" style={{ color: "white", fontSize: "16px",textAlign:"center" }}>Demo Co-Operative Bank</Typography>
            
              
              <Typography component="div" style={{ color: "white", fontSize: "16px",textAlign:"center" }}>Date :May 02,2019</Typography>
             
              <Typography component="div" style={{ color: "white", fontSize: "16px",textAlign:"center" }}>Version :2.65</Typography>
              </Grid>

              <Grid container xs={12} style={{display:"flex",height:"3em" }}>

                <Grid item xs={6} style={{  }}>
                  <Typography component="div" style={{ color: "white", fontSize: "16px",marginLeft:"115px" }}>User Name</Typography>
                </Grid>
                <Grid item xs={6} style={{}}>
                <Input inputRef={this.Username} style={{ backgroundColor:"white",color: "#000000",opacity:"1", fontSize: "16px", /* fontWeight: "300" */ }}></Input>
                </Grid>
              </Grid>




              <Grid item xs={12} style={{ height:"3em",display:"flex"}}>
                <Grid item xs={6} style={{ }}>
                  <Typography component="div" style={{ color: "white", fontSize: "16px",marginLeft:"115px" }}>Password</Typography>
                </Grid>
                <Grid item xs={6} style={{ }}>
                <Input inputRef={this.Password} style={{backgroundColor:"white",color:"#000000"}}></Input>
                </Grid>
              </Grid>

              <Grid item xs={12} style={{height:"3em",display:"flex" }}>
                <Grid item xs={6} style={{ }}>
                  <Typography component="div" style={{ color: "white", fontSize: "16px",marginLeft:"115px" }}>Request OTP</Typography>
                  
                </Grid>
                <Grid item xs={6} style={{ }}>
                <Input inputRef={this.OTP} style={{backgroundColor:"white"}}></Input>
                </Grid>
              </Grid>

              <Grid item xs={12} style={{height:"3em",display:"flex" }}>
                <Grid item xs={6} style={{ }}>
                  <Typography component="div" style={{color: "white", fontSize: "16px",marginLeft:"115px" }}>Branch</Typography>
                </Grid>
                <Grid item xs={6} style={{  }}>
                {/* <Select
            value={this.state.age}
            onChange={this.handleChange}
            >
              <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            
            </Select> */}
            <Select
                   style={{
                     width: "179px",backgroundColor:"white",height: "32px",padding:"4px"
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

                   <MenuItem value="Price Discount">Price Discount</MenuItem>
                   <MenuItem value="Percentage Discount">Percentage Discount</MenuItem>
                   <MenuItem value="Free Product">Free Product</MenuItem>

                 </Select>
          
                </Grid>
              </Grid>

              <Grid item xs={12} style={{height:"3em",display:"flex" }}>
                <Grid item xs={6} style={{ }}>
                  <Typography component="div" style={{ color: "white", fontSize: "16px",marginLeft:"115px" }}>Fin. year</Typography>
                </Grid>
                <Grid item xs={6} style={{  }}  className={"yearPicker"}>
                {/* <Select
                   style={{
                     width: "60%",height: "49%",backgroundColor:"white"
                   }}

                   value={this.state.year}

                   onChange={this.handleChange1}
                   input={
                     <OutlinedInput
                       labelWidth={this.state.labelWidth}
                       dropDownMenuProps={dropdownMenuProps}
                       name="year"
                       id="outlined-age-simple"
                     />
                   }
                 >

                   <MenuItem value="Price Discount">Price Discount</MenuItem>
                   <MenuItem value="Percentage Discount">Percentage Discount</MenuItem>
                   <MenuItem value="Free Product">Free Product</MenuItem>

                 </Select> */}
                 <YearPicker onChange={this.DateChange} />
                </Grid>
              </Grid>

              <Grid container xs={12} style={{display:"flex",height:"2em",justifyContent:"center" }}>
              <Grid item xs={6}></Grid>
              <Grid item xs={6}>
              <NavLink to="/dashboard">
              <Button variant="contained" color="primary"onClick={this.saveLoginDetails} style={{backgroundColor:"#1890ff",float:"right",marginRight:"149px"}} >
                 Login
              </Button></NavLink>
              </Grid>
              </Grid>


            </Grid>
          </Grid>
        </Grid>

      {/* </Grid> */}

    </React.Fragment>
      </div>
    )
  }
  }

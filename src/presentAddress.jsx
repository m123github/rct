import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from '@material-ui/core/Button'; 
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';




const dropdownMenuProps = {
    menuStyle: {
      
      borderRadius: "6%",
      backgroundColor: 'lightgrey',
      width: "30%",
    },
  }

export default class PresentAddress extends Component {
  constructor(props) {
    super(props);
    this.houseName = React.createRef();
    this.street = React.createRef();
    this.place = React.createRef();
    this.city = React.createRef();
    this.pin = React.createRef();
    this.sameCheck = 1;
  
  }
    state = {
        branch: '',
        year:'',
        states:"",
        district:"",
        country:"",
        same:""
      };

      componentWillUnmount(){
        this.props.PresentAddressValues(this.houseName.current.value,this.street.current.value,this.place.current.value,this.city.current.value,this.pin.current.value,this.state.states,this.state.district,this.state.country)
      }

      same=(event)=>{
        console.log(event.target.value,"cjekfb")
        if(this.sameCheck % 2 != 0){
          this.setState({ same: event.target.value });
          this.sameCheck++;

          let permanetAddress = this.props.getPermanentAddress();
          console.log(permanetAddress,"permanetAddress")
          this.houseName.current.value = permanetAddress.houseName;
          this.street.current.value = permanetAddress.street;
          this.place.current.value = permanetAddress.place;
          this.city.current.value = permanetAddress.city;
          this.pin.current.value = permanetAddress.pin;
          this.setState({states:permanetAddress.state,district:permanetAddress.district,country:permanetAddress.country})
      
        }
        else{
          this.setState({ same: "" });
          this.sameCheck++;
          this.houseName.current.value = "";
          this.street.current.value = "";
          this.place.current.value = "";
          this.city.current.value = "";
          this.pin.current.value = "";
          this.setState({states:"",district:"",country:""})
        }
      
      
      }
      
    
      handleChange = event => {
        this.setState({ branch: event.target.value });
      };

      
    
      country = event => {
        this.setState({ country: event.target.value });
      };

      
    
      district = event => {
        this.setState({ district: event.target.value });
      };

      
    
      states = event => {
        this.setState({ states: event.target.value });
      };
  render() {
    return (
      <React.Fragment>

            <Grid container spacing={16} style={{height: "auto",marginTop:"20px"}}>

            {/* 1st row */}
            <Grid container spacing={16} xs={12} style={{height: "60px"}}>
            {/* 11 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>House Name </Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input  inputRef={this.houseName} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            {/* 12 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Street </Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input inputRef={this.street} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            
            </Grid>
            {/* 13 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Place</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input inputRef={this.place} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            </Grid>
            {/* 2nd row */}
            <Grid container spacing={16} xs={12} style={{height: "auto"}}>
             {/* 21 row */}
             <Grid container spacing={16} xs={4} style={{height: "60px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>City</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input inputRef={this.city} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            {/* 22 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>PIN</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input inputRef={this.pin} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px"/* fontWeight: "300" */ }}></Input>
                </Grid>
            
            </Grid>
            {/* 23 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>District</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                <Select
                   style={{
                     width: "60%",height: "20px",padding:"0px",backgroundColor:"white"
                   }}

                   value={this.state.district}

                   onChange={this.district}
                   input={
                     <OutlinedInput
                       labelWidth={this.state.labelWidth}
                       dropDownMenuProps={dropdownMenuProps}
                       name="district"
                       id="outlined-age-simple"
                     />
                   }
                 >

                   <MenuItem value="Price Discount">Thiruvananthapuram</MenuItem>
                   <MenuItem value="Percentage Discount">Kannur</MenuItem>
                   <MenuItem value="Free Product">Thrissur</MenuItem>

                 </Select>
                </Grid>
            </Grid>
            
            </Grid>
            {/* 3rd rows */}
            <Grid container spacing={16} xs={12} style={{height: "auto",marginTop:"10px"}}>
             {/* 31 row */}
             <Grid container spacing={16} xs={4} style={{height: "60px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>State</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                <Select
                   style={{
                     width: "60%",height: "20px",padding:"0px",backgroundColor:"white"
                   }}

                   value={this.state.states}

                   onChange={this.states}
                   input={
                     <OutlinedInput
                       labelWidth={this.state.labelWidth}
                       dropDownMenuProps={dropdownMenuProps}
                       name="states"
                       id="outlined-age-simple"
                     />
                   }
                 >

                   <MenuItem value="Price Discount">Kerala</MenuItem>
                   <MenuItem value="Percentage Discount">Delhi</MenuItem>
                   <MenuItem value="Free Product">Gujarat</MenuItem>

                 </Select>
                </Grid>
            </Grid>
            {/* 32 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
           {/* typoghraphy */}
           <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Country</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                <Select
                   style={{
                     width: "60%",height: "20px",padding:"0px",backgroundColor:"white"
                   }}

                   value={this.state.country}

                   onChange={this.country}
                   input={
                     <OutlinedInput
                       labelWidth={this.state.labelWidth}
                       dropDownMenuProps={dropdownMenuProps}
                       name="country"
                       id="outlined-age-simple"
                     />
                   }
                 >

                   <MenuItem value="Price Discount">India</MenuItem>
                   <MenuItem value="Percentage Discount">Iran</MenuItem>
                   <MenuItem value="Free Product">Syria</MenuItem>

                 </Select>                </Grid>
            
            </Grid>
            {/* 33 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             
            </Grid>
            
            </Grid>
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
{/* typoghraphy */}
<Grid item spacing={16} xs={4} style={{height: "auto",marginLeft:"-8px"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Same</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto",position:"relative",bottom:"6px"}}>
    
    <FormControl component="fieldset" >
          
          <RadioGroup
            aria-label="Gender"
            name="same"
            
            value={this.state.same}
            onClick={this.same}
          >
            
            <FormControlLabel value="same" control={<Radio />} label="" />
            
          </RadioGroup>
        </FormControl>


              </Grid> 
 
</Grid>
             {/* 4th row */}
             <Grid container spacing={16} xs={12} style={{position:"absolute",right:"38px",bottom:"70px",maxWidth:"84px"}}>
           <Grid item xs={12}> <Button variant="contained" color="primary" style={{backgroundColor:"#1890ff"}} onClick={()=>this.props.PresentAddressValues(this.houseName.current.value,this.street.current.value,this.place.current.value,this.city.current.value,this.pin.current.value,this.state.states,this.state.district,this.state.country,4)}>Next</Button></Grid>
            </Grid>
            
            
            </Grid>
      </React.Fragment>
    )
  }
}
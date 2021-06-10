import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from "@material-ui/core/OutlinedInput";



const dropdownMenuProps = {
    menuStyle: {
      
      borderRadius: "6%",
      backgroundColor: 'lightgrey',
      width: "30%",
    },
  }


export default class Guardian extends Component {

    state = {
        branch: '',
        year:''
      };

  render() {
    return (
      <React.Fragment>

            <Grid container spacing={16} style={{height: "auto"}}>

            {/* 1st row */}
            <Grid container spacing={16} xs={12} style={{height: "60px"}}>
            {/* 11 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}> Name </Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",marginLeft:"37px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            {/* 12 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Relation </Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                <Select
                   style={{
                     width: "60%",height: "20px",padding:"3px",backgroundColor:"white",marginLeft:"10px"
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

                 </Select>                </Grid>
            
            </Grid>
            {/* 13 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>House Name</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",marginLeft:"37px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            </Grid>
            {/* 2nd row */}
            <Grid container spacing={16} xs={12} style={{height: "auto"}}>
             {/* 21 row */}
             <Grid container spacing={16} xs={4} style={{height: "60px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Place</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",marginLeft:"37px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            </Grid>
            {/* 22 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>City</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",marginLeft:"37px" /* fontWeight: "300" */ }}></Input>
                </Grid>
            
            </Grid>
            {/* 23 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Distric</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                <Select
                   style={{
                     width: "60%",height: "20px",padding:"3px",backgroundColor:"white",marginLeft:"10px"
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

                 </Select>
                </Grid>
            </Grid>
            
            </Grid>
            {/* 3rd rows */}
            <Grid container spacing={16} xs={12} style={{height: "auto"}}>
             {/* 31 row */}
             <Grid container spacing={16} xs={4} style={{height: "60px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>PIN</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                <Input  style={{ backgroundColor:"white",color: "#000000", fontSize: "16px",marginLeft:"37px" /* fontWeight: "300" */ }}></Input>

                </Grid>
            </Grid>
            {/* 32 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
          
            
            </Grid>
            {/* 33 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             
            </Grid>
            
            </Grid>
            
            
            </Grid>
      </React.Fragment>
    )
  }
}
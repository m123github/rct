import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import OutlinedInput from "@material-ui/core/OutlinedInput";

import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import "./login.css";


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const dropdownMenuProps = {
  menuStyle: {
    
    borderRadius: "6%",
    backgroundColor: 'lightgrey',
    width: "30%",
  },
}




// function typereport( event) {
//   this.setState({ typereport: event.target.value });
// };

function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const [typereport, settypereport] = useState("");
  const [orderby, setorderby]= useState("");
  const [caste, setcaste]= useState("");

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleChange(event) {
    // setValue(event.target.value);
   }
  return (
    <div className="reportunique" style={{height:"200px"}}>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}

<FormControl component="fieldset" >
        {/* <FormLabel component="legend">Gender</FormLabel> */}
        <RadioGroup onClick={handleClickOpen}
          aria-label="gender"
          name="gender2"
          
        //   value={value}
        onChange={handleChange}
        >
          <FormControlLabel
            value="female"
            control={<Radio color="primary" />}
            label="Customer List"
            labelPlacement="start"
          />
          </RadioGroup>
        {/* <FormHelperText>labelPlacement start</FormHelperText> */}
      </FormControl>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Customer List"}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-slide-description"> */}
            {/* Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running. */}
            <Grid container spacing={16} style={{height: "auto",marginTop:"24px"}}>

{/* 1st row */}
<Grid container spacing={16} xs={12} style={{height: "60px",width:"800px"}}>
{/* 11 row */}
<Grid container spacing={16} xs={6} style={{height: "40px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Type</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Select
       style={{
         width: "88%",height: "30px",padding:"0px",backgroundColor:"white"
       }}

       value={typereport}

       onChange={(e)=>{settypereport(e.target.value)}}
       input={
         <OutlinedInput
         
           dropDownMenuProps={dropdownMenuProps}
           name="typereport"
           id="outlined-age-simple"
         />
       }
     >

       <MenuItem value="male">male</MenuItem>
       <MenuItem value="Female">Female</MenuItem>
       {/* <MenuItem value="Free Product">A+ve</MenuItem> */}

     </Select>
      </Grid>
</Grid>
{/* 12 row */}
<Grid container spacing={16} xs={6} style={{height: "40px"}}>
 {/* typoghraphy */}
 <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Order by</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Select
       style={{
         width: "88%",height: "30px",padding:"0px",backgroundColor:"white"
       }}

       value={orderby}

       onChange={(e)=>{setorderby(e.target.value)}}
       input={
         <OutlinedInput
         
           dropDownMenuProps={dropdownMenuProps}
           name="orderby"
           id="outlined-age-simple"
         />
       }
     >

       <MenuItem value="male">male</MenuItem>
       <MenuItem value="Female">Female</MenuItem>
       {/* <MenuItem value="Free Product">A+ve</MenuItem> */}

     </Select>
   </Grid>

</Grid>
{/* 13 row */}
</Grid>


<Grid container spacing={16} xs={12} style={{height: "60px",width:"800px"}}>
{/* 11 row */}
<Grid container spacing={16} xs={6} style={{height: "40px"}}>
{/* typoghraphy */}
    <Grid item spacing={16} xs={4} style={{height: "auto"}}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Caste</Typography>
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
    <Select
       style={{
         width: "88%",height: "30px",padding:"0px",backgroundColor:"white"
       }}

       value={caste}

       onChange={(e)=>{setcaste(e.target.value)}}
       input={
         <OutlinedInput
         
           dropDownMenuProps={dropdownMenuProps}
           name="caste"
           id="outlined-age-simple"
         />
       }
     >

       <MenuItem value="male">male</MenuItem>
       <MenuItem value="Female">Female</MenuItem>
       {/* <MenuItem value="Free Product">A+ve</MenuItem> */}

     </Select>
      </Grid>
</Grid>
{/* 12 row */}
<Grid container spacing={16} xs={6} style={{height: "40px"}}>
 {/* typoghraphy */}
   <Grid item spacing={16} xs={4} style={{height: "auto"}}>
       
    </Grid>
    {/* component */}
    <Grid item spacing={16} xs={8} style={{height: "auto"}}>
   
   </Grid>
</Grid>

</Grid>
{/* <Grid container spacing={16} xs={12} style={{position:"absolute",right:"38px",bottom:"70px",maxWidth:"84px"}}>
           <Grid item xs={12}> <Button variant="contained" color="primary" style={{backgroundColor:"#1890ff"}}>Next</Button></Grid>
            </Grid> */}
            <Grid container spacing={16} xs={12} style={{height: "41px",width:"800px",justifyContent:"flex-end"}}>
            <Button variant="contained" color="primary" style={{backgroundColor:"#1890ff"}}>Show</Button>
            </Grid>
</Grid>
          {/* </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button> */}

        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialogSlide;
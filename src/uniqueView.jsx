import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import DatePicker from "react-datepicker";
import Button from '@material-ui/core/Button'; 
import CustomPaginationActionsTable from "./table1";
import "./style1.css";

const dropdownMenuProps = {
    menuStyle: {
      
      borderRadius: "6%",
      backgroundColor: 'lightgrey',
      width: "30%",
    },
  }

export default class UniqueView extends Component {
  constructor(props){
    super(props);
    this.house = React.createRef();
    this.name = React.createRef();
    this.cusID = React.createRef();
    this.header = ["Cust.ID", "Name", "House", "Opened On", "Street", "SurName", "MobileNo:", "Card?", "B SMS?", "PIN?"];
  }
  state = {
    tabelValues: [], noRows: [], branch: "", UNIQUE_CUST_ID: "", FixedRows: []
  }

  UNIQUE_CUST_ID=(value)=>{
    this.setState({UNIQUE_CUST_ID:value})
  }
  fetchValues=()=>{
   
     const post_data = {"Branch":this.state.branch,"Id":(this.cusID.current.value)?this.cusID.current.value:"FALSE","Name":(this.name.current.value)?this.name.current.value:"FALSE","House":(this.house.current.value)?this.house.current.value:"FALSE"}
   // const post_data = {"Branch":"1","Id":"FALSE","Name":"JULIE","House":"FALSE"};

  const flag1 = fetch("http://localhost:11023/api/uniquecustomer/fetchUniqueCustomerDetails",
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post_data)
  })
  .catch(res => {
   
  })
    .then((res) => {
     
      if (res.status === 200) {

          res.json().then(ree => {
            // console.log(ree, "first");

            var result1 = [];
            ree.map(row => {
              //console.log(row,"row")

              var obj = row;
              var result = Object.keys(obj).map(function (key) {
                return [Number(key), obj[key]];
              });

              // console.log(result);
              result1.push(result)

            })


            this.setState({ tabelValues: ree, noRows: result1, FixedRows: result1 })
          });

      }
      else {
        alert("Failed to save");
      }
    }
    );
  }
delete =()=>{

  const flag = fetch(`http://localhost:11023/api/uniquecustomer/delete?id=${this.state.UNIQUE_CUST_ID}`
  ).catch(res => {
   
  })
    .then((res) => {
   
  
      if (res.status === 200) {

        res.json().then(res=> {
          console.log(res, "first");
              this.fetchValues();   
        
        });

      }
      else {
        alert("Failed to save");
      }
    }
    );
  

}

edit =()=>{
console.log(`http://localhost:11023/api/uniquecustomer/getUniqueCustomer?id=${this.state.UNIQUE_CUST_ID}`,"url")
  const flag = fetch(`http://localhost:11023/api/uniquecustomer/getUniqueCustomer?id=${this.state.UNIQUE_CUST_ID}`
  ).catch(res => {
   
  })
    .then((res) => {
   
  
      if (res.status === 200) {

          res.json().then(res => {
              console.log(res, "customer detail");
            
            this.props.CustomerEdit(res);
          });

      }
      else {
        alert("Failed to save");
      }
    }
    );
  

}

  branch = event => {
    this.setState({ branch: event.target.value });
  };

  filterByName = (event) => {


    var { noRows } = this.state;
    var { FixedRows } = this.state;


    if (noRows.length > 0 && event.target.value.length > 0) {



      var TempArray = Object.assign([], FixedRows);

      var FilteredArray = TempArray.filter(x =>

        this.house.current.value.length > 0 ? x[1][1].startsWith(event.target.value.toUpperCase()) && x[2][1].startsWith(this.house.current.value.toUpperCase()) : x[1][1].startsWith(event.target.value.toUpperCase()));

      //  console.log(FilteredArray, "Filtered");
      this.setState({ noRows: FilteredArray });

      // }
    }

    else {
      this.setState({ noRows: FixedRows });
    }



  }



  filterByHouse = (event) => {


    var { noRows } = this.state;
    var { FixedRows } = this.state;


    if (noRows.length > 0 && event.target.value.length > 0) {



      var TempArray = Object.assign([], FixedRows);

      var FilteredArray = TempArray.filter(x =>

        this.name.current.value.length > 0 ? x[2][1].startsWith(event.target.value.toUpperCase()) && x[1][1].startsWith(this.name.current.value.toUpperCase()) : x[2][1].startsWith(event.target.value.toUpperCase()));

      //  console.log(FilteredArray, "Filtered");
      this.setState({ noRows: FilteredArray });

      // }
    }

    else {
      this.setState({ noRows: FixedRows });
    }



  }
  render() {
    return (
      <React.Fragment>
        <Grid container style={{ justifyContent: "center", fontSize: "25px", paddingBottom: "14px" }}>Unique Customer Info</Grid>
        <Grid container>
          <Grid container style={{ alignItems: "center" }}>
            <Grid item xs={4} style={{ height: "40px", display: "flex", flexDirection: "row", padding: "6px" }}>
              <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px", marginRight: "18px" }}>Branch</Typography>
              <Select className="increasewidth"
                style={{
                  width: "48%", height: "30px", padding: "0px", backgroundColor: "white", marginLeft: "10px"
                }}

                  value={this.state.branch}

                    onChange={this.branch}
                   input={
                     <OutlinedInput
                      //  labelWidth={this.state.labelWidth}
                       dropDownMenuProps={dropdownMenuProps}
                       name="branch"
                       id="outlined-age-simple"
                     />
                   }
                 >

                   <MenuItem value="1">1</MenuItem>
                   <MenuItem value="2">2</MenuItem>
                   <MenuItem value="3">3</MenuItem>
                   <MenuItem value="4">4</MenuItem>
                   <MenuItem value="5">5</MenuItem>

                 </Select>
          
        </Grid>

        <Grid item xs={4} style={{height:"40px",display:"flex",flexDirection:"row",padding:"6px" }}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Customer ID</Typography>
        <Input inputRef={this.cusID} className="increasewidth" disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000" ,fontSize: "16px",marginLeft:"34px" /* fontWeight: "300" */ }}></Input>
        </Grid>
        <Grid item xs={4} style={{height:"40px",display:"flex",flexDirection:"row",padding:"6px" }}>
        <Button variant="contained" onClick={this.fetchValues} color="primary" style={{backgroundColor:"#1890ff",width:"100px",fontSize:"12px",marginLeft:"9px",padding:"6px"}} >
        Search</Button></Grid>
                    </Grid>
                    <Grid container>
                    <Grid item xs={4} style={{height:"40px",display:"flex",flexDirection:"row",padding:"6px" }}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Name</Typography>
        <Input inputRef={this.name} onKeyUp={this.filterByName} className="increasewidth" disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000" ,fontSize: "16px",marginLeft:"34px" /* fontWeight: "300" */ }}></Input>
        </Grid>
        <Grid item xs={4} style={{height:"40px",display:"flex",flexDirection:"row",padding:"6px" }}>
        <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px",marginRight:"35px" }}>House</Typography>
        <Input inputRef={this.house} onKeyUp={this.filterByHouse} className="increasewidth" disableUnderline="true"  style={{ backgroundColor:"white",color: "#000000" ,fontSize: "16px",marginLeft:"34px" /* fontWeight: "300" */ }}></Input>
        </Grid>
                        
                    </Grid>
                </Grid>
                <Grid container>
                <CustomPaginationActionsTable rt={this.state.tabelValues} ty={this.header} noRows={this.state.noRows} UNIQUE_CUST_ID={this.UNIQUE_CUST_ID} uniqueCustomer={1}/>
                </Grid>
                <Grid container style={{justifyContent:"flex-end",marginTop:"10px"}}>
                <Grid item xs={1} style={{height:"40px",display:"flex",flexDirection:"row",padding:"6px" }}>
        <Button variant="contained" onClick={this.edit} color="primary" style={{backgroundColor:"#1890ff",width:"100px",fontSize:"12px",marginLeft:"9px",padding:"6px"}} >
        Edit</Button></Grid>
        <Grid item xs={1} style={{height:"40px",display:"flex",flexDirection:"row",padding:"6px" }}>
        <Button onClick={this.delete} variant="contained" color="primary" style={{backgroundColor:"#1890ff",width:"100px",fontSize:"12px",marginLeft:"9px",padding:"6px"}} >
        Delete</Button></Grid>
                </Grid>
                
            </React.Fragment>
        )
    }
}
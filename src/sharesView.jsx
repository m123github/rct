import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import DatePicker from "react-datepicker";
import Button from '@material-ui/core/Button';
import CustomPaginationActionsTable from "./table1"
import "./style1.css"
const dropdownMenuProps = {
  menuStyle: {

    borderRadius: "6%",
    backgroundColor: 'lightgrey',
    width: "30%",
  },
}
export default class SharesView extends Component {
  constructor(props) {
    super(props);
    this.house = React.createRef();
    this.name = React.createRef();
    this.memNo = React.createRef();
    this.branch = React.createRef();
    this.type = React.createRef();
    this.header = ["Member No.", "Name", "House", "Sur Name", "Date", "Closed on", "Balance", "Mobile No.", "Cust.ID"];
  }
  state = {
    tabelValues: [], noRows: [], SHARE_C_MEMNO: "", FixedRows: [], prefix: "A",
  }
  UNIQUE_CUST_ID = (value) => {
    this.setState({ SHARE_C_MEMNO: value })
  }
  fetchValues = () => {
    const post_data = { "Type": this.type.current.value, "Branch": this.branch.current.value, "MemberNo": (this.memNo.current.value) ? this.memNo.current.value : "FALSE", "Name": (this.name.current.value) ? this.name.current.value : "FALSE", "House": (this.house.current.value) ? this.house.current.value : "FALSE" }
    // const post_data = {"Branch":"1","Id":"FALSE","Name":"JULIE","House":"FALSE"};

    const flag1 = fetch("http://localhost:11023/api/sharemastera/fetchsharemasterdetails",
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
  delete = () => {
    const flag = fetch(`http://localhost:11023/api/sharemastera/deleteshare?id=${this.state.SHARE_C_MEMNO}`
    ).catch(res => {

    })
      .then((res) => {


        if (res.status === 200) {
          res.json().then(res => {
            //      console.log(res, "first");
            this.fetchValues();

          });
        }
        else {
          alert("Failed to save");
        }
      }
      );

  }
  edit = () => {
    //console.log(`http://localhost:11023/api/uniquecustomer/getUniqueCustomer?id=${this.state.SHARE_C_MEMNO}`,"url")
    //const post_data = {"MemberNo":this.state.SHARE_C_MEMNO}
    //console.log(post_data);
    // const post_data = {"Branch":"1","Id":"FALSE","Name":"JULIE","House":"FALSE"};
    const flag1 = fetch(`http://localhost:11023/api/ShareMasterA/GetAllShareData?memberno=${this.state.SHARE_C_MEMNO}&nomtype=B`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          //'Content-Type': 'application/json',
        },
        // body: JSON.stringify(post_data)
      }).catch(res => {

      })
      .then((res) => {


        if (res.status === 200) {
          res.json().then(res => {
            console.log(res, "customer detail");

            this.props.gettingViewData(res);
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
        <Grid container style={{ justifyContent: "center", fontSize: "25px", paddingBottom: "14px" }}>A Class Shares</Grid>
        <Grid container>
          <Grid container style={{ alignItems: "center" }}>
            <Grid item xs={12} md={1} style={{ height: "40px", display: "flex", flexDirection: "row", padding: "6px" }}>
              <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "right", paddingTop: "3px" /* marginRight: "18px"*/ }}>Prefix</Typography>
            </Grid>
            <Grid item item xs={12} md={2}>
              <Input inputRef={this.type} disableUnderline="true" value={this.state.prefix} disabled={true} style={{ backgroundColor: "white", color: "#000000", fontSize: "16px", width: "156px", textAlign: "center" }}></Input>
            </Grid>
            <Grid item xs={12} md={1} style={{ height: "40px", display: "flex", flexDirection: "row", padding: "6px" }}>
              <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Branch</Typography>
            </Grid>
            <Grid item item xs={12} md={2}>
              <Input inputRef={this.branch} disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px", width: "156px"/* fontWeight: "300" */ }}></Input>

            </Grid>
            <Grid item xs={12} md={1} style={{ height: "40px", display: "flex", flexDirection: "row", padding: "6px" }}>
              <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Member No.</Typography>
            </Grid>
            <Grid item item xs={12} md={2}>
              <Input inputRef={this.memNo} /*className="increasewidth"*/ disableUnderline="true" style={{ backgroundColor: "white", color: "#000000", fontSize: "16px", width: "156px" /* fontWeight: "300" */ }}></Input>
            </Grid>
            <Grid item xs={12} md={3} style={{ height: "40px", display: "flex", flexDirection: "row", padding: "6px" }}>
              <Button variant="contained" onClick={this.fetchValues} color="primary" style={{ backgroundColor: "#1890ff", width: "100px", fontSize: "12px", padding: "6px" }} >
                Search</Button>
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: "17px" }}>
            <Grid item xs={12} md={1} style={{ height: "40px", display: "flex", flexDirection: "row", padding: "6px" }}>

              <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>Name</Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Input inputRef={this.name} onKeyUp={this.filterByName} disableUnderline="true" style={{ backgroundColor: "white", width: "156px", color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
            </Grid>
            <Grid item xs={12} md={1} style={{ height: "40px", display: "flex", flexDirection: "row", padding: "6px" }}>

              <Typography component="div" style={{ color: "#000000", fontSize: "13px", textAlign: "left", paddingTop: "3px" }}>House</Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Input inputRef={this.house} onKeyUp={this.filterByHouse} disableUnderline="true" style={{ width: "156px", backgroundColor: "white", color: "#000000", fontSize: "16px"/* fontWeight: "300" */ }}></Input>
            </Grid>

          </Grid>
        </Grid>
        <Grid container>
          <CustomPaginationActionsTable rt={this.state.tabelValues} ty={this.header} noRows={this.state.noRows} UNIQUE_CUST_ID={this.UNIQUE_CUST_ID} uniqueCustomer={1} />
        </Grid>
        <Grid container style={{ justifyContent: "flex-end", marginTop: "10px" }}>
          <Grid item xs={1} style={{ height: "40px", display: "flex", flexDirection: "row", padding: "6px" }}>
            <Button variant="contained" onClick={this.edit} color="primary" style={{ backgroundColor: "#1890ff", width: "100px", fontSize: "12px", marginLeft: "9px", padding: "6px" }} >
              Edit</Button></Grid>
          <Grid item xs={1} style={{ height: "40px", display: "flex", flexDirection: "row", padding: "6px" }}>
            <Button onClick={this.delete} variant="contained" color="primary" style={{ backgroundColor: "#1890ff", width: "100px", fontSize: "12px", marginLeft: "9px", padding: "6px" }} >
              Delete</Button></Grid>
        </Grid>

      </React.Fragment>
    )
  }
}
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
import "./login.css";


const dropdownMenuProps = {
    menuStyle: {
      
      borderRadius: "6%",
      backgroundColor: 'lightgrey',
      width: "30%",
    },
  }

export default class PermanentAddress extends Component {
  constructor(props) {
    super(props);
    this.houseName = React.createRef();
    this.street = React.createRef();
    this.place = React.createRef();
    this.city = React.createRef();
    this.pin = React.createRef();
    this.houseName2 = React.createRef();
    this.street2 = React.createRef();
    this.place2 = React.createRef();
    this.city2 = React.createRef();
    this.pin2 = React.createRef();
    this.sameCheck = 1;
  
  }
    state = {
        branch: '',
        year:'',
        states:"",
        district:"",
        country:"",
        district2:"",
        states2:"",
        country2:"",
        same:"",
        countryArray:[{Descr:"",CountryId:""}],
        stateArray:[{Descr:"",StateId:""}],
        districtArray:[{Descr:"",DistrictId:""}],
        country2Array:[{Descr:"",CountryId:""}],
        state2Array:[{Descr:"",StateId:""}],
        district2Array:[{Descr:"",DistrictId:""}],
        districtelementdisabled:true,
        district1disabled:true,
        count:0,
        permanentCheck:true,
          presentCheck:true,
      };

      componentDidMount(){
        this.countryOptions();
        this.country2Options();
        if(!(Object.entries(this.props.CustomerEdit).length === 0 && this.props.CustomerEdit.constructor === Object)){
               console.log(this.props.CustomerEdit.houseName,"housename");
        //  this.houseName.current.value = (this.props.CustomerEdit.houseName)?this.props.CustomerEdit.houseName:"";
        //  this.street.current.value = this.props.CustomerEdit.street;
        //   this.place.current.value = this.props.CustomerEdit.place;
        //   this.city.current.value = this.props.CustomerEdit.city;
        //   this.pin.current.value = this.props.CustomerEdit.pin;
        //   this.setState({states :  this.props.CustomerEdit.states});
        //   this.setState({district :  this.props.CustomerEdit.district});
        //   this.setState({country:  this.props.CustomerEdit.country});
        //   this.houseName2.current.value=  this.props.CustomerEdit.houseName2;
        //   this.street2.current.value =  this.props.CustomerEdit.street2;
        //   this.place2.current.value = this.props.CustomerEdit.place2;
        //   this.city2.current.value =  this.props.CustomerEdit.city2;
        //   this.pin2.current.value =  this.props.CustomerEdit.pin2;
        //   this.setState({states2 :  this.props.CustomerEdit.states2});
        //   this.setState({district2 :  this.props.CustomerEdit.district2});
        //   this.setState({country2  : this.props.CustomerEdit.country2});
        this.houseName.current.value = this.props.CustomerEdit.permanentHouse;
        this.street.current.value = this.props.CustomerEdit.permanentStreet;
         this.place.current.value = this.props.CustomerEdit.permanentPlace;
         this.city.current.value = this.props.CustomerEdit.permanentCity;
         this.pin.current.value = this.props.CustomerEdit.permanentPin;
         this.setState({states :  this.props.CustomerEdit.permanentStateId});
         this.setState({district :  this.props.CustomerEdit.permanentDistrictId});
         this.setState({country:  this.props.CustomerEdit.permanentCountryId});
         this.houseName2.current.value=  this.props.CustomerEdit.presentHouse;
         this.street2.current.value =  this.props.CustomerEdit.presentStreet;
         this.place2.current.value = this.props.CustomerEdit.presentPlace;
         this.city2.current.value =  this.props.CustomerEdit.presentCity;
         this.pin2.current.value =  this.props.CustomerEdit.presentPin;
         this.setState({states2 :  this.props.CustomerEdit.presentStateId});
         this.setState({district2 :  this.props.CustomerEdit.presentDistrictId});
         this.setState({country2  : this.props.CustomerEdit.presentCountryId});
          }
       else{
      
        let allValues = this.props.getAllValues();
        this.setState({stateArray:(allValues[1].state1array)?allValues[1].state1array:[]})
        this.setState({districtArray:(allValues[1].district1array)?allValues[1].district1array:[]})
        this.setState({state2Array:(allValues[1].state2array)?allValues[1].state2array:[]})
        this.setState({district2Array:(allValues[1].district2array)?allValues[1].district2array:[]})
       this.houseName.current.value = (allValues[1].houseName)?allValues[1].houseName :"";
       this.street.current.value = (allValues[1].street)?allValues[1].street:"";
        this.place.current.value = (allValues[1].place)?allValues[1].place:"";
        this.city.current.value = (allValues[1].city)?allValues[1].city:"";
        this.pin.current.value = (allValues[1].pin)?allValues[1].pin:"";
        this.setState({states :  allValues[1].state});
        this.setState({district :  allValues[1].district});
        this.setState({country:  allValues[1].country});
        this.houseName2.current.value=  (allValues[1].houseName2)?allValues[1].houseName2:"";
        this.street2.current.value =  (allValues[1].street2)?allValues[1].street2:"";
        this.place2.current.value =(allValues[1].place2)?allValues[1].place2:"";
        this.city2.current.value =  (allValues[1].city2)?allValues[1].city2:"";
        this.pin2.current.value =  (allValues[1].pin2)?allValues[1].pin2:"";
        this.setState({states2 :  allValues[1].state2});
        this.setState({district2 :  allValues[1].district2});
        this.setState({country2  : allValues[1].country2});
        }

    }



componentWillUnmount(){
  if(this.state.permanentCheck==true && this.state.presentCheck==true)
  {
  this.props.PermanentAddress(this.houseName.current.value,this.street.current.value,this.place.current.value,this.city.current.value,this.pin.current.value,this.state.states,this.state.stateArray,this.state.district,this.state.districtArray,this.state.country,this.houseName2.current.value,this.street2.current.value,this.place2.current.value,this.city2.current.value,this.pin2.current.value,this.state.states2,this.state.state2Array,this.state.district2,this.state.district2Array,this.state.country2)
  }
}

same=(event)=>{
  console.log(event.target.value,"cjekfb")
  if(this.sameCheck % 2 != 0){
    this.setState({ state2Array:this.state.stateArray,district2Array:this.state.districtArray,same: event.target.value });
    this.sameCheck++;

    // let permanetAddress = this.props.getPermanentAddress();
    // console.log(permanetAddress,"permanetAddress")
    this.houseName2.current.value = this.houseName.current.value;
    this.street2.current.value = this.street.current.value;
    this.place2.current.value = this.place.current.value;
    this.city2.current.value = this.city.current.value;
    this.pin2.current.value = this.pin.current.value;
    this.setState({country2:this.state.country,states2:this.state.states,district2:this.state.district})

  }
  else{
    this.setState({ same: "" });
    this.sameCheck++;
    this.houseName2.current.value = "";
    this.street2.current.value = "";
    this.place2.current.value = "";
    this.city2.current.value = "";
    this.pin2.current.value = "";
    this.setState({states2:"",district2:"",country2:""})
  }


}
      
    
      handleChange = event => {
        this.setState({ branch: event.target.value });
      };

      
    
      country = event => {
        this.setState({ country: event.target.value });
      };
      district2 = event => {
        this.setState({ district2: event.target.value });
      };
      states2 = event => {
        this.setState({ states2: event.target.value });
      };
      country2 = event => {
        this.setState({ country2: event.target.value });
      };

    
      district = event => {
        this.setState({ district: event.target.value });
      };

      
    
      states = event => {
        this.setState({ states: event.target.value });
      };


      SelectCountry = event => {
        this.setState({district1disabled:true,district:"0"});
        //this.district.value=0;
        console.log(event,event.target.value,"selected event")
        this.setState({ country: event.target.value });
        setTimeout(() => {
          this.stateOptions();
        }, 100);
      
        console.log(this.state.country,"bvalue")
      };
      SelectState = event => {
        this.setState({district1disabled:false});
        console.log(event,"event selected",event.target.value,"state selected")
        this.setState({ states: event.target.value });
        setTimeout(() => {
          this.districtOptions();
        }, 100);
      
        console.log(this.state.states,"bvalue")
      };
      SelectDistrict=event=>{
        this.setState({district: event.target.value }); 
      }
      SelectCountry2 = event => {
        this.setState({districtelementdisabled:true,district2:"0"});
        //this.state.district2=0;
        console.log(event,event.target.value,"selected event")
        this.setState({ country2: event.target.value});
        setTimeout(() => {
          this.state2Options();
        }, 100);
      
        console.log(this.state.country2,"bvalue")
      };
      SelectState2 = event => {
        this.setState({districtelementdisabled:false});
        console.log(event,event.target.value,"selected event")
        this.setState({ states2: event.target.value });
        setTimeout(() => {
          this.district2Options();
        }, 100);
      
        console.log(this.state.states2,"bvalue")
      };
      SelectDistrict2=event=>{
        this.setState({district2: event.target.value }); 
      }
      validationhname1=(e)=>{
        // alert(e.target.value.substring(0,3));
        if(e.target.value.length>0)
      {
      var nme=new RegExp(/^[a-zA-Z]+$/);
      if((e.target.value.match(nme)))
      {
        var patt=new RegExp(/([a-zA-Z])\1\1\1/);
        if((!e.target.value.match(patt)))
         {
          this.setState({permanentCheck:true});
           e.target.style = "border: 1px solid white !important;";
         }
       else
         {
          this.setState({permanentCheck:false});
           e.target.style ="border: 1px solid red !important;";
         }
      }
      else
      {this.setState({permanentCheck:false});
        e.target.style ="border: 1px solid red !important;";
      }
      }
      else
      {
        e.target.style = "border: 1px solid white !important;";
      }
      
    }
    validationhname2=(e)=>{
      // alert(e.target.value.substring(0,3));
      if(e.target.value.length>0)
    {
    var nme=new RegExp(/^[a-zA-Z]+$/);
    if((e.target.value.match(nme)))
    {
      var patt=new RegExp(/([a-zA-Z])\1\1\1/);
      if((!e.target.value.match(patt)))
       {
        this.setState({presentCheck:true});
         e.target.style = "border: 1px solid white !important;";
       }
     else
       {
        this.setState({presentCheck:false});
         e.target.style ="border: 1px solid red !important;";
       }
    }
    else
    {
      this.setState({presentCheck:false});
      e.target.style ="border: 1px solid red !important;";
    }
    }
    else
    {
      e.target.style = "border: 1px solid white !important;";
    }
    
  }
      countryOptions=()=>{
        const flag = fetch("http://localhost:11023/api/uniquecustomer/getcountry"
            ).catch(res => {
             
            })
              .then((res) => {
             
            
                if (res.status === 200) {
        
                  res.json().then(res=> {
                    console.log(res, "first");
                    var result1 = [];
                    result1 = res;
                    console.log("gahds", result1)
                    var countryArray=JSON.parse(result1.data)
                   console.log(countryArray,"religion array when page loads")
                   this.setState({countryArray});
        
                    
                 
        
                  
                  
                  });
        
                }
                else {
                  alert("Failed to save");
                }
              }
              );
            }
            stateOptions=()=>{
              console.log(this.state.country,"reli")
              const postdata={
                id:this.state.country

              }
              const flag = fetch(`http://localhost:11023/api/uniquecustomer/getstate?id=${this.state.country}`
                  ).catch(res => {
                   
                  })
                    .then((res) => {
                   
                  
                      if (res.status === 200) {
              
                        res.json().then(res=> {
                          console.log(res, "first");
                          var result1 = [];
                          result1 = res;
                          console.log("gahds", result1)
                          var stateArray=JSON.parse(result1.data)
                         
                         this.setState({stateArray});

                        });
              
                      }
                      else {
                        alert("Failed to save");
                      }
                    }
                    );
                  }

                  districtOptions=()=>{
                    console.log(this.state.states,"reli")
                    const postdata={
                      id:this.state.states
      
                    }
                    const flag = fetch(`http://localhost:11023/api/uniquecustomer/getdistrict?id=${this.state.states}`
                        ).catch(res => {
                         
                        })
                          .then((res) => {
                         
                        
                            if (res.status === 200) {
                    
                              res.json().then(res=> {
                                console.log(res, "first");
                                var result1 = [];
                                result1 = res;
                                console.log("gahds", result1)
                                var districtArray=JSON.parse(result1.data)
                               
                               this.setState({districtArray});
                    
                                
                             
                    
                              
                              
                              });
                    
                            }
                            else {
                              alert("Failed to save");
                            }
                          }
                          );
                        }
                        country2Options=()=>{
                          const flag = fetch("http://localhost:11023/api/uniquecustomer/getcountry"
                              ).catch(res => {
                               
                              })
                                .then((res) => {
                               
                              
                                  if (res.status === 200) {
                          
                                    res.json().then(res=> {
                                      console.log(res, "first");
                                      var result1 = [];
                                      result1 = res;
                                      console.log("gahds", result1)
                                      var country2Array=JSON.parse(result1.data)
                                     console.log(country2Array,"religion array when page loads")
                                     this.setState({country2Array});
                          
                                      
                                   
                          
                                    
                                    
                                    });
                          
                                  }
                                  else {
                                    alert("Failed to save");
                                  }
                                }
                                );
                              }
                              state2Options=()=>{
                                console.log(this.state.country2,"reli")
                                const postdata={
                                  id:this.state.country2
                  
                                }
                                const flag = fetch(`http://localhost:11023/api/uniquecustomer/getstate?id=${this.state.country2}`
                                    ).catch(res => {
                                     
                                    })
                                      .then((res) => {
                                     
                                    
                                        if (res.status === 200) {
                                
                                          res.json().then(res=> {
                                            console.log(res, "first");
                                            var result1 = [];
                                            result1 = res;
                                            console.log("gahds", result1)
                                            var state2Array=JSON.parse(result1.data)
                                           
                                           this.setState({state2Array});
                  
                                          });
                                
                                        }
                                        else {
                                          alert("Failed to save");
                                        }
                                      }
                                      );
                                    }
                  
                                    district2Options=()=>{
                                      console.log(this.state.states2,"reli")
                                      const postdata={
                                        id:this.state.states2
                        
                                      }
                                      const flag = fetch(`http://localhost:11023/api/uniquecustomer/getdistrict?id=${this.state.states2}`
                                          ).catch(res => {
                                           
                                          })
                                            .then((res) => {
                                           
                                          
                                              if (res.status === 200) {
                                      
                                                res.json().then(res=> {
                                                  console.log(res, "first");
                                                  var result1 = [];
                                                  result1 = res;
                                                  console.log("gahds", result1)
                                                  var district2Array=JSON.parse(result1.data)
                                                 
                                                 this.setState({district2Array});
                                      
                                                  
                                               
                                      
                                                
                                                
                                                });
                                      
                                              }
                                              else {
                                                alert("Failed to save");
                                              }
                                            }
                                            );
                                          }



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
                            <Input onChange={this.validationhname1.bind(this)}   inputRef={this.houseName} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
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
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Country</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                <Select
                   style={{
                     width: "179px",height: "30px",padding:"0px",backgroundColor:"white"
                   }}

                   ref ={(input) =>{this.country1 = input;}}
                   onChange={this.SelectCountry}
       value={this.state.country}
        input={
          <OutlinedInput
            labelWidth={this.state.labelWidth}
            dropDownMenuProps={dropdownMenuProps}
            name="countryArray"
            id="outlined-age-simple"
          />
        }
      >
 {
   this.state.countryArray.map(values=>(
     <MenuItem value={values.CountryId}>{values.Descr}</MenuItem>
   ))
 }

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
                     width: "179px",height: "30px",padding:"0px",backgroundColor:"white"
                   }}

                   ref ={(input) =>{this.state1 = input;}}
                   value={this.state.states}

                   onChange={this.SelectState}
                   input={
                     <OutlinedInput
                       labelWidth={this.state.labelWidth}
                       dropDownMenuProps={dropdownMenuProps}
                       name="states"
                       id="outlined-age-simple"
                     />
                   }
                 >
                 {
                  this.state.stateArray.map(values=>(
                    <MenuItem value={values.StateId}>{values.Descr}</MenuItem>
                  ))
                }

                 </Select>
                </Grid>
            </Grid>
            {/* 32 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
           {/* typoghraphy */}
           <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>District</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                
                 <Select
                   style={{
                     width: "179px",height: "30px",padding:"0px",backgroundColor:"white"
                   }}

                   ref ={(input) =>{this.district1 = input;}}
                  
                   value={this.state.district}
                   disabled={this.state.district1disabled}
                   onChange={this.SelectDistrict}
                   input={
                     <OutlinedInput
                       labelWidth={this.state.labelWidth}
                       dropDownMenuProps={dropdownMenuProps}
                       name="district"
                       id="outlined-age-simple"
                     />
                   }
                 >
                   <MenuItem value={0}>Select</MenuItem>
                   {
                     
                  this.state.districtArray.map(values=>(
                    <MenuItem value={values.DistrictId}>{values.Descr}</MenuItem>
                  ))
                }

                 </Select>
                                 </Grid>
            
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

<Grid container spacing={16} xs={12} style={{height: "60px",marginTop:"25px"}}>
            {/* 11 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            {/* typoghraphy */}
                <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>House Name </Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                            <Input onChange={this.validationhname2.bind(this)} inputRef={this.houseName2} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
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
                            <Input inputRef={this.street2} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
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
                            <Input inputRef={this.place2} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
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
                            <Input inputRef={this.city2} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px" /* fontWeight: "300" */ }}></Input>
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
                            <Input inputRef={this.pin2} style={{ backgroundColor:"white",color: "#000000", fontSize: "16px"/* fontWeight: "300" */ }}></Input>
                </Grid>
            
            </Grid>
            {/* 23 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             {/* typoghraphy */}
             <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>Country</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                <Select
                   style={{
                     width: "179px",height: "30px",padding:"0px",backgroundColor:"white"
                   }}

                   ref ={(input) =>{this.countryelement = input;}}
                   onChange={this.SelectCountry2}
                   value={this.state.country2}
                    input={
                      <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        dropDownMenuProps={dropdownMenuProps}
                        name="countryArray"
                        id="outlined-age-simple"
                      />
                    }
                  >
             {
               this.state.country2Array.map(values=>(
                 <MenuItem value={values.CountryId}>{values.Descr}</MenuItem>
               ))
             }

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
                     width: "179px",height: "30px",padding:"0px",backgroundColor:"white"
                   }}

                   ref ={(input) =>{this.stateelement = input;}}
                   value={this.state.states2}

                   onChange={this.SelectState2}
                   input={
                     <OutlinedInput
                       labelWidth={this.state.labelWidth}
                       dropDownMenuProps={dropdownMenuProps}
                       name="states"
                       id="outlined-age-simple"
                     />
                   }
                 >
                 {
                  this.state.state2Array.map(values=>(
                    <MenuItem value={values.StateId}>{values.Descr}</MenuItem>
                  ))
                }

                 </Select>
                </Grid>
            </Grid>
            {/* 32 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
           {/* typoghraphy */}
           <Grid item spacing={16} xs={4} style={{height: "auto"}}>
                    <Typography component="div" style={{ color: "#000000", fontSize: "13px",textAlign:"left",paddingTop:"3px" }}>District</Typography>
                </Grid>
                {/* component */}
                <Grid item spacing={16} xs={8} style={{height: "auto"}}>
                <Select
                   style={{
                     width: "179px",height: "30px",padding:"0px",backgroundColor:"white"
                   }}

                   ref ={(input) =>{this.districtelement = input;}}
                   value={this.state.district2}
                   disabled={this.state.districtelementdisabled}
                   onChange={this.SelectDistrict2}
                   input={
                     <OutlinedInput
                       labelWidth={this.state.labelWidth}
                       dropDownMenuProps={dropdownMenuProps}
                       name="district"
                       id="outlined-age-simple"
                     />
                   }
                 >
                   <MenuItem value={0}>Select</MenuItem>
                   {
                  this.state.district2Array.map(values=>(
                    <MenuItem value={values.DistrictId}>{values.Descr}</MenuItem>
                  ))
                }

                 </Select>

                             </Grid>
            
            </Grid>
            {/* 33 row */}
            <Grid container spacing={16} xs={4} style={{height: "40px"}}>
            
             
            </Grid>
            
            </Grid>


             {/* 4th row */}
             <Grid container spacing={16} xs={12} style={{position:"absolute",right:"38px",bottom:"70px",maxWidth:"84px"}}>
           <Grid item xs={12}> <Button variant="contained" color="primary" style={{backgroundColor:"#1890ff"}} disabled={(this.state.permanentCheck==true && this.state.presentCheck==true)?false:true} onClick={()=>this.props.PermanentAddress(this.houseName.current.value,this.street.current.value,this.place.current.value,this.city.current.value,this.pin.current.value,this.state.states,this.state.stateArray,this.state.district,this.state.districtArray,this.state.country,this.houseName2.current.value,this.street2.current.value,this.place2.current.value,this.city2.current.value,this.pin2.current.value,this.state.states2,this.state.state2Array,this.state.district2,this.state.district2Array,this.state.country2,3)}>Next</Button></Grid>
            </Grid>
            
            
            </Grid>
      </React.Fragment>
    )
  }
}
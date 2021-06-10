
import { NavLink } from 'react-router-dom';

import React, { Component } from 'react'

export default class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        return (
            <React.Fragment>
                <section style={{height:"601px",width:"100%"}}>
  

  <ul style={{height:"724px",backgroundColor:"#3c86f1"}}>
      <li class="cd-accordion__item cd-accordion__item--has-children">
          <input class="cd-accordion__input" type="checkbox" name ="group-1" id="group-1"/>
          <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-1"><span style={{}}>Masters</span></label>

        <ul class="cd-accordion__sub cd-accordion__sub--l1" style={{backgroundColor:"#5997ef"}}>
            {(this.props.report == true)? <NavLink style={{ textDecoration: 'none' }} to="/dashboard/reportUnique">   <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"hsla(215, 86%, 65%, 0.7)"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Unique Customer Info</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                  <NavLink style={{ textDecoration: 'none' }} to="/dashboard/Unique">
                    <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span style={{fontSize:"16px",paddingLeft:"20px"}}>Data Entry</span></a></li></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to="/dashboard/Activity">
                        <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span style={{fontSize:"16px",paddingLeft:"20px"}}>Activity/Liability</span></a></li></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to="/dashboard/Transactions">
                        <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span style={{fontSize:"16px",paddingLeft:"20px"}}>Transaction</span></a></li></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to="/dashboard/sms">
                        <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span style={{fontSize:"16px",paddingLeft:"20px"}}>Send SMS</span></a></li></NavLink>
          </ul>
      </li></NavLink> :     <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"4px",backgroundColor:"hsla(215, 86%, 65%, 0.7)"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Unique Customer Info</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                  <NavLink style={{ textDecoration: 'none' }} to="/dashboard/Unique">
                    <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span style={{fontSize:"16px",paddingLeft:"20px"}}>Data Entry</span></a></li></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to="/dashboard/Activity">
                        <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span style={{fontSize:"16px",paddingLeft:"20px"}}>Activity/Liability</span></a></li></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to="/dashboard/Transactions">
                        <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span style={{fontSize:"16px",paddingLeft:"20px"}}>Transaction</span></a></li></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to="/dashboard/sms">
                        <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span style={{fontSize:"16px",paddingLeft:"20px"}}>Send SMS</span></a></li></NavLink>
          </ul>
      </li>}
       
      
            <li class="cd-accordion__item cd-accordion__item--has-children" style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}}>
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-2" id="sub-group-2"/>
        <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-2"><span style={{fontSize:"16px"}}>Ledger Main A/c Heads</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item cd-accordion__item--has-children">
                          <input class="cd-accordion__input" type="checkbox" name ="sub-group-level-3" id="sub-group-level-3"/>
                          <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-level-3"><span>Sub Group Level 3</span></label>

                          <ul class="cd-accordion__sub cd-accordion__sub--l3">
                              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                          </ul>
                  </li>
                  {/* <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li> */}
        </ul>
            </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Ledger Sub A/c Heads</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Registers</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Service Area</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Service Ward</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Service Branch</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Loan Dependencies</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Safe Deposit Locker</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Others</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Declare Dividend</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
            {/* <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
          <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li> */}
        </ul>
  </li>

      <li class="cd-accordion__item cd-accordion__item--has-children">
          <input class="cd-accordion__input" type="checkbox" name ="group-2" id="group-2"/>
          <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-2"><span>Shares</span></label>

          <ul class="cd-accordion__sub cd-accordion__sub--l1" style={{backgroundColor:"#5997ef"}}>
            <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"hsla(215, 86%, 65%, 0.7)"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-21" id="sub-group-21"  />
                      <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-21"><span style={{fontSize:"16px"}}>A class Shares</span></label>

                          <ul class="cd-accordion__sub cd-accordion__sub--l2">
                              {this.props.aClassShares.map((value,index)=>(
                                <NavLink style={{ textDecoration: 'none' }} to={value.to}><li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span style={{fontSize:"16px",paddingLeft:"20px"}}>{value.label}</span></a></li></NavLink>

                              ))

                              }
                     
          </ul>
      </li>
      
            <li class="cd-accordion__item cd-accordion__item--has-children" style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}}>
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-22" id="sub-group-22"/>
        <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-22"><span style={{fontSize:"16px"}}>C Class Shares</span></label>

        <ul class="cd-accordion__sub cd-accordion__sub--l2">
                              {this.props.cClassShares.map((value,index)=>(
                                <NavLink style={{ textDecoration: 'none' }} to={value.to}><li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span style={{fontSize:"16px",paddingLeft:"20px"}}>{value.label}</span></a></li></NavLink>

                              ))

                              }
        </ul>
            </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Self Help Groups</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Government Shares</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Institutional Shares</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      
                  </ul>
      </li>

      <li class="cd-accordion__item cd-accordion__item--has-children">
          <input class="cd-accordion__input" type="checkbox" name ="group-3" id="group-3"/>
          <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-3"><span style={{}}>Deposit</span></label>

        <ul class="cd-accordion__sub cd-accordion__sub--l1" style={{backgroundColor:"#5997ef"}}>
            <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"hsla(215, 86%, 65%, 0.7)"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-3" id="sub-group-3"  />
                      <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-3"><span style={{fontSize:"16px"}}>Savings Bank</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                  <NavLink style={{ textDecoration: 'none' }} to="/dashboard/Savings">			<li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#3"><span style={{fontSize:"16px",paddingLeft:"20px"}}>Data Entry</span></a></li></NavLink>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span style={{fontSize:"16px",paddingLeft:"20px"}}>Agent Collecton</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span style={{fontSize:"16px",paddingLeft:"20px"}}>Cheque Issue</span></a></li>
                  <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span style={{fontSize:"16px",paddingLeft:"20px"}}>Cheque Stop Payment</span></a></li>
          <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span style={{fontSize:"16px",paddingLeft:"20px"}}>View Cheque Details</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span style={{fontSize:"16px",paddingLeft:"20px"}}>Status</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span style={{fontSize:"16px",paddingLeft:"20px"}}>Balance Position</span></a></li>
                              
                  </ul>
      </li>
      
            <li class="cd-accordion__item cd-accordion__item--has-children" style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}}>
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-2" id="sub-group-2"/>
        <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-2"><span style={{fontSize:"16px"}}>Fixed Deposit</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item cd-accordion__item--has-children">
                          <input class="cd-accordion__input" type="checkbox" name ="sub-group-level-3" id="sub-group-level-3"/>
                          <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-level-3"><span>Sub Group Level 3</span></label>

                          <ul class="cd-accordion__sub cd-accordion__sub--l3">
                              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                          </ul>
                  </li>
                  {/* <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li> */}
        </ul>
            </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Minor Savings Bank</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Recurring Deposit</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>FDCC</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Dhanya Deposit</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Special SB</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Special SBEMS</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      <li class="cd-accordion__item cd-accordion__item--has-children" style={{backgroundColor:"red !important"}} style={{paddingLeft:"18px",backgroundColor:"#5999f3b3"}} >
                <input class="cd-accordion__input" type="checkbox" name ="sub-group-1" id="sub-group-1"  />
              <label  class="cd-accordion__label cd-accordion__label--icon-folder x" for="sub-group-1"><span style={{fontSize:"16px"}}>Current Account </span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item "><a class="cd-accordion__label cd-accordion__label--icon-img " id="second" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" id="second"  href="#0"><span>Image</span></a></li>
                  </ul>
      </li>
      
      
            {/* <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
          <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li> */}
        </ul>
  </li>


      <li class="cd-accordion__item cd-accordion__item--has-children">
          <input class="cd-accordion__input" type="checkbox" name ="group-4" id="group-4"/>
          <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-4"><span>Loans</span></label>

          <ul class="cd-accordion__sub cd-accordion__sub--l1">
              <li class="cd-accordion__item cd-accordion__item--has-children">
                  <input class="cd-accordion__input" type="checkbox" name ="sub-group-3" id="sub-group-3"/>
                  <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-3"><span>Sub Group 3</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                  </ul>
              </li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
          </ul>
      </li>

  <li class="cd-accordion__item cd-accordion__item--has-children">
          <input class="cd-accordion__input" type="checkbox" name ="group-4" id="group-4"/>
          <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-4"><span>Chitty</span></label>

          <ul class="cd-accordion__sub cd-accordion__sub--l1">
              <li class="cd-accordion__item cd-accordion__item--has-children">
                  <input class="cd-accordion__input" type="checkbox" name ="sub-group-3" id="sub-group-3"/>
                  <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-3"><span>Sub Group 3</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                  </ul>
              </li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
          </ul>
      </li>


  <li class="cd-accordion__item cd-accordion__item--has-children">
          <input class="cd-accordion__input" type="checkbox" name ="group-4" id="group-4"/>
          <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-4"><span>G.D.S</span></label>

          <ul class="cd-accordion__sub cd-accordion__sub--l1">
              <li class="cd-accordion__item cd-accordion__item--has-children">
                  <input class="cd-accordion__input" type="checkbox" name ="sub-group-3" id="sub-group-3"/>
                  <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-3"><span>Sub Group 3</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                  </ul>
              </li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
          </ul>
      </li>


  <li class="cd-accordion__item cd-accordion__item--has-children">
          <input class="cd-accordion__input" type="checkbox" name ="group-4" id="group-4"/>
          <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-4"><span>Sales</span></label>

          <ul class="cd-accordion__sub cd-accordion__sub--l1">
              <li class="cd-accordion__item cd-accordion__item--has-children">
                  <input class="cd-accordion__input" type="checkbox" name ="sub-group-3" id="sub-group-3"/>
                  <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-3"><span>Sub Group 3</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                  </ul>
              </li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
          </ul>
      </li>


  <li class="cd-accordion__item cd-accordion__item--has-children">
          <input class="cd-accordion__input" type="checkbox" name ="group-4" id="group-4"/>
          <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-4"><span>Trading</span></label>

          <ul class="cd-accordion__sub cd-accordion__sub--l1">
              <li class="cd-accordion__item cd-accordion__item--has-children">
                  <input class="cd-accordion__input" type="checkbox" name ="sub-group-3" id="sub-group-3"/>
                  <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-3"><span>Sub Group 3</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                  </ul>
              </li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
          </ul>
      </li>


  <li class="cd-accordion__item cd-accordion__item--has-children">
          <input class="cd-accordion__input" type="checkbox" name ="group-4" id="group-4"/>
          <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-4"><span>Transactions</span></label>

          <ul class="cd-accordion__sub cd-accordion__sub--l1">
              <li class="cd-accordion__item cd-accordion__item--has-children">
                  <input class="cd-accordion__input" type="checkbox" name ="sub-group-3" id="sub-group-3"/>
                  <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-3"><span>Sub Group 3</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                  </ul>
              </li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
          </ul>
      </li>


  <li class="cd-accordion__item cd-accordion__item--has-children">
          <input class="cd-accordion__input" type="checkbox" name ="group-4" id="group-4"/>
          <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-4"><span>Pay Roll</span></label>

          <ul class="cd-accordion__sub cd-accordion__sub--l1">
              <li class="cd-accordion__item cd-accordion__item--has-children">
                  <input class="cd-accordion__input" type="checkbox" name ="sub-group-3" id="sub-group-3"/>
                  <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-3"><span>Sub Group 3</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                  </ul>
              </li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
          </ul>
      </li>


  <li class="cd-accordion__item cd-accordion__item--has-children">
          <input class="cd-accordion__input" type="checkbox" name ="group-4" id="group-4"/>
          <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-4"><span>Journals</span></label>

          <ul class="cd-accordion__sub cd-accordion__sub--l1">
              <li class="cd-accordion__item cd-accordion__item--has-children">
                  <input class="cd-accordion__input" type="checkbox" name ="sub-group-3" id="sub-group-3"/>
                  <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-3"><span>Sub Group 3</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                  </ul>
              </li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
          </ul>
      </li>


  <li class="cd-accordion__item cd-accordion__item--has-children">
          <input class="cd-accordion__input" type="checkbox" name ="group-4" id="group-4"/>
          <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-4"><span>Authentication</span></label>

          <ul class="cd-accordion__sub cd-accordion__sub--l1">
              <li class="cd-accordion__item cd-accordion__item--has-children">
                  <input class="cd-accordion__input" type="checkbox" name ="sub-group-3" id="sub-group-3"/>
                  <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-3"><span>Sub Group 3</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                  </ul>
              </li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
          </ul>
      </li>


  <li class="cd-accordion__item cd-accordion__item--has-children">
          <input class="cd-accordion__input" type="checkbox" name ="group-4" id="group-4"/>
          <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-4"><span>Utility</span></label>

          <ul class="cd-accordion__sub cd-accordion__sub--l1">
              <li class="cd-accordion__item cd-accordion__item--has-children">
                  <input class="cd-accordion__input" type="checkbox" name ="sub-group-3" id="sub-group-3"/>
                  <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-3"><span>Sub Group 3</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                  </ul>
              </li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
          </ul>
      </li>


  <li class="cd-accordion__item cd-accordion__item--has-children">
          <input class="cd-accordion__input" type="checkbox" name ="group-4" id="group-4"/>
          <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-4"><span>Tools</span></label>

          <ul class="cd-accordion__sub cd-accordion__sub--l1">
              <li class="cd-accordion__item cd-accordion__item--has-children">
                  <input class="cd-accordion__input" type="checkbox" name ="sub-group-3" id="sub-group-3"/>
                  <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-3"><span>Sub Group 3</span></label>

                  <ul class="cd-accordion__sub cd-accordion__sub--l2">
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                      <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
                  </ul>
              </li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
              <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="#0"><span>Image</span></a></li>
          </ul>
      </li>



  </ul>
</section>
                
            </React.Fragment>
        )
    }
}

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Entry from './Entry';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import "./login.css";
import Personal from './personal';
import "./style1.css";
import JointDepositors from './jointDepositors';
import Nominee from './nominee';
import SharesPersonal from './sharesPersonal';
import SharesGeneral from './sharesGeneral';
import SharesView from './sharesView';


function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  });

export default class AClassShares extends Component {
    state = {
        value: 0,customerSharesData:[]
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };

      PersonalDetailsValues=(memberNo,EnrollDate,generalNo,cuId,Fstname,surname,BirthDate,age2,rel,hsname,street3,place3,city3,Rlgn,caste2,profession2,mbNo,part,serviceArea,idCardNo,applArea,BRDate,
        BRName,AgrCrLimit,ward,AgrLandArea,FarmerType,Balance,ResidualShare,Dividend,value)=>{
        console.log(memberNo,EnrollDate,generalNo,cuId,Fstname,surname,BirthDate,age2,rel,hsname,street3,place3,city3,Rlgn,caste2,profession2,mbNo,part,serviceArea,idCardNo,applArea,BRDate,
          BRName,AgrCrLimit,ward,AgrLandArea,FarmerType,Balance,ResidualShare,Dividend,value,"parent")
       this.PersonalDetails={memberNo:memberNo,EnrollDate:EnrollDate,generalNo:generalNo,cuId:cuId,Fstname:Fstname,surname:surname,BirthDate:BirthDate,age2:age2,rel:rel,hsname:hsname,street3:street3,place3:place3,city3:city3,Rlgn:Rlgn,caste2:caste2,profession2:profession2,mbNo:mbNo,part:part,serviceArea:serviceArea,idCardNo:idCardNo,applArea:applArea,BRDate:BRDate,
        BRName:BRName,AgrCrLimit:AgrCrLimit,ward:ward,AgrLandArea:AgrLandArea,FarmerType:FarmerType,Balance:Balance,ResidualShare:ResidualShare,Dividend:Dividend};
       if(value){ this.setState({value:value})
      
       }
     }
     getAllValues =()=>{
      return [this.PersonalDetails];
    }
    tabValue=(value)=>{
    this.setState({value:value})
    }

    gettingViewData=(value)=>{
console.log(value,"values")
this.setState({value:0,customerSharesData:JSON.parse(value.memberDetails)})
    }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
        <React.Fragment>
      <div>
         <AppBar position="static" color="default" style={{width:"100%",paddingTop:"0px"}}>
          <Tabs style={{width:"100%"}}
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            scrollButtons="auto"
          >
            <Tab label="Personal" style={{fontWeight:"700"}} />
            <Tab label="General" style={{fontWeight:"700"}}/>
            <Tab label="View" style={{fontWeight:"700"}}/>
           
            
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><SharesPersonal customerSharesData={this.state.customerSharesData} PersonalDetails={this.PersonalDetailsValues}/></TabContainer>}
        {value === 1 && <TabContainer><SharesGeneral customerSharesData={this.state.customerSharesData} getAllValues={this.getAllValues}/></TabContainer>}
        {value === 2 && <TabContainer><SharesView gettingViewData={this.gettingViewData}/></TabContainer>}
        
      </div>
      </React.Fragment>
    )
  }
}

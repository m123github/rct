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


export default class Savingsbank extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
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
            <Tab label="Joint Depositors" style={{fontWeight:"700"}}/>
            <Tab label="Nominee" style={{fontWeight:"700"}}/>
            <Tab label="View" style={{fontWeight:"700"}}/>
            
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><Personal/></TabContainer>}
        {value === 1 && <TabContainer><JointDepositors/></TabContainer>}
        {value === 2 && <TabContainer><Nominee/></TabContainer>}
        {value === 3 && <TabContainer>Item Two</TabContainer>}
      </div>
      </React.Fragment>
    )
  }
}

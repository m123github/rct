import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import NominationEntry from './nominationEntry';
import NominationView from './nominationView';

function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

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
  
  
    function handleChange(event, newValue) {
      setValue(newValue);
    }

  return (
    <div>
      <Fab color="primary" aria-label="Add" onClick={handleClickOpen} style={{width:"35px",height:"17px"}} >
        <AddIcon />
      </Fab> 
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Nominations"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

          <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Entry" />
          <Tab label="View" />
          
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><NominationEntry/></TabContainer>}
      {value === 1 && <TabContainer><NominationView/></TabContainer>}
      
         
            {/* Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running. */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;
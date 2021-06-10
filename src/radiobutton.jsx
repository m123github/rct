import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing*3,
    },
    group: {
      margin: theme.spacing*1,
    },
  });
  
 class Radiobutton extends Component {

    constructor(props) {
        super(props);
        this.state = {
value:"",
        }
    }
    handleChange=(e)=>{ console.log("e",e.target.value)
        this.setState({value:e.target.value})
this.props.radio(e.target.value);
    }
    componentDidMount=()=>{
      if(this.props.radiogeneral!=""){
        this.setState({value:this.props.radiogeneral});}
    }
    render() {
        const {value} = this.state;
        const classes = this.props;
        console.log(value,this.props.radiogeneral);
        return (
            <div>
                
                <FormControl component="fieldset" className={classes.formControl}>
        {/* <FormLabel component="legend">Gender</FormLabel> */}
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
          value={(this.props.radiogeneral!="")?this.props.radiogeneral:value}
          onChange={this.handleChange}
        >
          <FormControlLabel value="Senior  Citizen" control={<Radio />} label="Senior  Citizen" />
          <FormControlLabel value="Minor" control={<Radio />} label="Minor" />
         
          {/* <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          /> */}
        </RadioGroup>
      </FormControl>
            </div>
        )
    }
    
}
export default withStyles(useStyles)(Radiobutton);

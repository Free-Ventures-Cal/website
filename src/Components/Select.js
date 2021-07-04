import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './../styles/Portfolio.css';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: '0 auto',
    minWidth: 240,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SimpleSelect(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    batch: 'Spring 2020', // this will be the default tab on load. SPELL CORRECTLY
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
  }));

  }

  useEffect(() => {
      console.log("this has been run")
      props.handleSideBarClick(values.batch);
  }, [values])

  let menuItems = props.options.map((option) => {
      return (<MenuItem value={option}>{option}</MenuItem>);
  });

  console.log("values", values);

  return (
    <span className="batchSelect">
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Select a Batch</InputLabel>
            <Select
              value={values.batch}
              onChange={handleChange}
              inputProps={{
                name: 'batch',
              }}
            >
                {menuItems}
            </Select>
          </FormControl>
        </form>
    </span>
  );
}

export default SimpleSelect;

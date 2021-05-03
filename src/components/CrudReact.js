import React, { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core/';
import {Link} from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
    const classes = useStyles();

    const [state, setState] = useState("");

    const [para, setParams] = useState("");

    const variables = {
        title: state,
        content: para
    }

    const onSubmit = e => {
        axios.post("http://localhost:4000/routes/get/", variables).then((response) => {
            e.preventDefault();
            console.log(response)
        })

    }

    
    return (
      <div >
        <form className={classes.root} noValidate autoComplete="off">

            <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(e)=>setState (e.target.value)} />
            <TextField id="outlined-basic" label="Content" variant="outlined" onChange={(e)=>setParams(e.target.value)} />
            <br/>
            <Button variant="contained" color="primary" onClick={onSubmit}>Submit</Button>            
        </form>
</div>
    );
}

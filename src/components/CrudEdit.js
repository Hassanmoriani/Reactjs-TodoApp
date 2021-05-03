import React from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  

function CrudEdit(props) {
    

    const [ title,setTitle ] = React.useState( props.location.state.data.title );
    const [ content,setContent ] = React.useState( props.location.state.data.content );    
    
    const edit =()=>{
        axios.post("http://localhost:4000/routes/edit/"+props.location.state.data._id, {
            title:title,
            content:content
        }).then((response)=>{
                if(response.status  === 200){
                props.history.goBack ();
                }
        });

    }

    return (
        <div style={{marginLeft:'450px'}}>
            <br/>
            <br/>
            <TextField value={title} id="outlined-basic" label="Title" variant="outlined" onChange={(e)=>setTitle (e.target.value)} />
            <TextField value={content} id="outlined-basic" label="Content" variant="outlined" onChange={(e)=>setContent(e.target.value)} />
            <br/>
            <br/>
            <Button variant="contained" color="primary" onClick={ (e)=>{ edit();  } }>Update</Button>

            {/* <input  value={title} onChange={(e)=>{ setTitle(e.target.value); }}  placeholder="enter title"/> <br/>
            <textarea value={content} onChange={(e)=>{ setContent(e.target.value); }}   placeholder="Enter content"/> <br/>
            <button  onClick={ (e)=>{ edit();  } }  >update</button> */}
        </div>
    )
}

export default CrudEdit

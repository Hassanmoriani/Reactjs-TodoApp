import React from 'react'
import axios from 'axios'

function Edit(props) {

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
        <div>
            <input  value={title} onChange={(e)=>{ setTitle(e.target.value) }}  placeholder="enter title"/> <br/>
            <textarea value={content} onChange={(e)=>{ setContent(e.target.value) }}   placeholder="Enter content"/> <br/>
            <button  onClick={ (e)=>{ edit();  } }  >update</button>
        </div>
    )
}

export default Edit

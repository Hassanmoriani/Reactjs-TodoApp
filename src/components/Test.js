import React,{ useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'



function Test() {

    const [state, setState] = useState("");

    const [para, setParams] =useState("");
    
    const variables ={
        title:state,
        content:para
    }
    const onSubmit = e => {
        axios.post("http://localhost:4000/routes/get/",variables).then((response)=>{
            e.preventDefault();
            console.log(response)
        })
  

    // axios.post('./components/test/localhost:3000/',variables).then(response =>{
    //     if(response.variables.success){
    //         setState("")
    //     }else{
    //         console.log('unable to post response')
    //     }
    // });

  
    
};
    // function result(){
    //     console.log(state,para)
    // }

  

    return (
        <div style={{border: '4px solid black' , background:'gray'}}>
            <h1>Title</h1>
            <input type="text" placeholder="Enter your title" onChange={(e)=>setState (e.target.value)}  ></input>
            <h2>Content</h2>
            <textarea rows="4" cols="50" onChange={(e)=>setParams(e.target.value)} />
                <br/>
            <input type="submit" onClick={onSubmit}
            ></input>
            <Link to="view">
            <button
            >show records</button>
            </Link>
        </div>
    )
    }

export default Test

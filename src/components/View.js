import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function View() {
    const [item,setItem] = React.useState([])
    // const [ editItem, setEditItem ] = React.useState();
    // const [item1,setItem1] = React.useState([])

    const getData = e =>{
        axios.get("http://localhost:4000/routes/get/").then((response)=>{
            e.preventDefault();
            setItem(response.data)
            // console.log(response.data);
            // document.write(response.data)
        })

        // const [state, setState]
    }

    function editRecord(id){
        axios.patch(`http://localhost:4000/routes/edit/${id}`).then((response)=>{
            // e.preventDefault();
            setItem(response.data)
            // console.log(response);
           
        })

    }

    function deleteRecord(id){
        axios.delete(`http://localhost:4000/routes/delete/${id}`).then((response)=>{
            // e.preventDefault();
            // setItem1(response.data)
            if(response.status === 200){
                const result = item.filter(item => item.id !== response.data_id)
                setItem(result)
            }
            console.log(response);
            
        })
        
    }

   
    //   const editdata=(id , title, content )=>{
    //     //   e.preventDefault();
    //       console.log( id,"id",title,"title",content,"content" );
    //   }  

   
    return (
        <div style={{ backgroundColor:'skyblue'}}>
            <button onClick={getData}> View record</button>
           {
               item.map((e,i)=>{
                   
                return  <div>  
                <span key={i}>{e.title} {e.content}
                <Link to={{
                    pathname: "/edit",
                    state: { data: e }
                }}>
                <button >Edit</button>
                </Link>
                    {/* <button onClick={()=>editRecord(e._id)}>Edit</button> */}
                    <button onClick={()=>deleteRecord(e._id)}>Delete</button>
                </span>
                    </div>
                })
           }
           
        </div>
    )
}

export default View

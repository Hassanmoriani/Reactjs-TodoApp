
import { Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React, { useState } from "react";
import Counter from './components/Counter'
import Test from './components/Test'
import View from './components/View'
import CrudReact from './components/CrudReact'
import ViewRecords from './components/ViewRecords'
import CrudEdit from './components/CrudEdit'
import Nav from './components/Nav'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Edit from './components/Edit';
import UseScene from './components/UseScene'

// import ValidationTextFields from './components/ValidationTextFields'
function App() {
  // const [state, setState] = useState("");
  // const handleChange =(e) =>{
  //   setState(e.target.value)
  //   setGet()
  //   console.log(e.target.value)
  // };

  // const onSubmit = (e) =>{
  //   setGet(e.target.value)

  //   console.log(e.target.value);
  // tyle={{width:'700px', margin: 'auto'}}
  // }  
  return (
        <Router>
    <div>
      {/* <UseScene/> */}
      {/* <Scene2/> */}
          <Nav/>
      {/* <Test/> */}
      <CrudReact/> 
       <ViewRecords/> 
        <Switch> 
         <Route path ='/CrudReact' component={CrudReact}/>
         <Route path ='/view' component={ViewRecords}/>
         <Route path ='/crudedit' component={CrudEdit}/> 
       {/* <Route path ="/view"  component={View} /> 
       <Route path ="/crudedit" component={CrudEdit} /> 
       {/* <Route path ="/edit" exact component={Edit} />
      {/* <h1>{state}</h1> */}
      {/* <input style={{width:'40%', marginTop: '100px'}}  type="text" id="name"  placeholder="Enter your Title here"
       onChange={handleChange}
      ></input> */}
      
      {/* <Editor 
   toolbarClassName="toolbarClassName"
   wrapperClassName="wrapperClassName"
   editorClassName="editorClassName"   
   
/>
<button style={{margin:"auto", borderRadius:"6px", color:"white", backgroundColor:'green'}}  > submit</button> */}
    {/* <Counter/> */}
    {/* <Test/> */}
    {/* <View/> */}
    </Switch>
    </div>
    </Router>
    
  

  );
}

export default App;

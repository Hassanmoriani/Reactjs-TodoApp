import React, {useState , useEffect } from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core/';


const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
 
  const [item,setItem] = useState([])
  
  const check = false
  useEffect(()=>{
    deleteRecord()},[true])

  useEffect(()=>{
getData()},[])

 const getData=(e)=>{
    axios.get("http://localhost:4000/routes/get/").then((response)=>{
        // e.preventDefault();
        setItem(response.data)
        console.log(  response.data )
        // console.log(response.data);
        // document.write(response.data)
    })

    // const [state, setState]
}

const editRecord=(id)=>{
    axios.patch(`http://localhost:4000/routes/edit/${id}`).then((response)=>{
        // e.preventDefault();
        setItem(response.data)
        // console.log(response);
       
    })

}

const deleteRecord=(id)=>{
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

// console.log(item);
  return (
      <>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Content</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {item.map((item) => (
            <StyledTableRow key={item._id}>
              <StyledTableCell component="th" scope="item">
                {item.title}
              </StyledTableCell>
              <StyledTableCell align="right">{item.content}</StyledTableCell>
              <StyledTableCell align="right" >
                <div>  
                  <Link  to={{pathname:'/crudedit',state:{data:item}}}>
              <Button     variant="contained" color="primary">Edit</Button>
                  
                  </Link>
              <Button variant="contained" color="secondary" onClick={()=>deleteRecord(item._id)} >Delete</Button>
              </div>
              </StyledTableCell>
            </StyledTableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
    <Link to="/view">
      {/* <Button variant="contained" onClick={()=>getData()}>Show Record</Button> */}
      </Link> 
    </>
  );
}


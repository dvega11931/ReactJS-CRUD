import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'; //esto se instala con comando npm 
import EditButton from '../EditButton';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button  from "@material-ui/core/Button";


export default class StudentList extends Component {


    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            redirect: false
        }
     }

    delete(){
        axios.get('http://localhost/ReactPHPCRUD/delete.php?id='+this.props.obj.sId)
        .then(
            this.setState({ redirect:true })
        )
        .catch(err => console.log(err))
    }

    render(){

        const {redirect} = this.state;
        if(redirect){
            return <Redirect to='/students'/>
        }

        return(
         
          <TableRow key={this.props.obj.sId}>

          <TableCell>{this.props.obj.sId}</TableCell>
          <TableCell>{this.props.obj.fName}</TableCell>
          <TableCell>{this.props.obj.lName}</TableCell>
          <TableCell>{this.props.obj.email}</TableCell>

          <TableCell> 
                    <EditButton 
                     url = {"/student/edit/" + this.props.obj.sId }
                     name = "Editar"
                     />
          </TableCell>
          <TableCell><Button onClick={this.delete} variant="contained" color="secondary">Eliminar</Button></TableCell>
          
        </TableRow>
         
        );
    }
}

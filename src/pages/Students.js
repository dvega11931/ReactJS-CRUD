import React, { Component } from 'react';
import axios from 'axios';
import RecordsList from '../components/students/RecordsList';
import AddButton from '../components/AddButton';


import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default class View extends Component {

    constructor(props){
        super(props);
        this.state = {students: []};
     }

     componentDidMount(){
        axios.get('http://localhost/ReactPHPCRUD/list.php')
        .then(response => {
            this.setState({students: response.data});
        })
        .catch(function(error){
            console.log(error);
        })
      }

     userList(){
         return this.state.students.map(function(object, i){
            return <RecordsList obj = {object} key={i} />;
         });
     }


    render(){
        return(
                <div>
                  <AddButton url= "/student/new" name = "Nuevo"/>
                  <Paper>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                            { this.userList() }
                        </TableBody>
                      </Table>
                  </Paper>
                </div>

        );
    }

}
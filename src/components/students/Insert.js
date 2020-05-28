import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import SubmitButton from '../SubmitButton';
export default class Insert extends Component {

    constructor(props){
       super(props);
       this.onChangeFirstName = this.onChangeFirstName.bind(this);
       this.onChangeLastName = this.onChangeLastName.bind(this);
       this.onChangeEmail = this.onChangeEmail.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
 
       this.state = {
            first_name: '',
            last_name: '',
            email: ''
       }
    }

    onChangeFirstName(e){
      this.setState({
        first_name: e.target.value
      });
    }

    onChangeLastName(e){
      this.setState({
        last_name: e.target.value
      });
    }

    onChangeEmail(e){
      this.setState({
        email: e.target.value
      });
    }

    onSubmit(e){
      e.preventDefault();

      const obj = {
         first_name: this.state.first_name,
         last_name: this.state.last_name,
         email: this.state.email
      };

      axios.post('http://localhost/ReactPHPCRUD/insert.php', obj)
      .then(res => console.log(res.data));
      //console.log(obj);

      this.state = ({
        first_name: '',
        last_name: '',
        email: ''
      })

    }

    render(){
        return(
          <div>   
    
           <form onSubmit={this.onSubmit}>

             <TextField label="Primer nombre" value={this.state.first_name}
               onChange={this.onChangeFirstName}/>

             <TextField label="Apellido" value={this.state.last_name}
               onChange={this.onChangeLastName}/>

             <TextField label="Correo" value={this.state.email}
                onChange={this.onChangeEmail}/>
     
             <SubmitButton name = "Guardar"/>

           </form>
           </div>
        );
    }
}
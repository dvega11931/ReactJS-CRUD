import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import NavBar from '../NavBar';
export default class Edit extends Component {

    constructor(props){
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
             first_name: '',
             last_name: '',
             email: '',
             redirect: false
        }
     }
 

     componentDidMount(){
        axios.get('http://localhost/ReactPHPCRUD/getById.php?id='+this.props.match.params.id)
        .then(response => {
            this.setState({
                first_name: response.data.fName,
                last_name: response.data.lName,
                email: response.data.email});
        })
        .catch(function(error){
            console.log(error);
        })
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
           //id = this.state.sId, 
           first_name: this.state.first_name,
           last_name: this.state.last_name,
           email: this.state.email
        };


        axios.post('http://localhost/ReactPHPCRUD/update.php?id='+this.props.match.params.id, obj)
        .then(
            res => console.log(res.data),
            this.setState({ redirect:true })
            ); 
      }

     render(){

        const {redirect} = this.state;
        if(redirect){
            return <Redirect to='/students'/>
        }

         return(
          
       <div>   
          <NavBar/>   

            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Primer nombre:</label>
                <input type="text" className="form-control" 
                value={this.state.first_name}
                onChange={this.onChangeFirstName} />
              </div>
 
              <div className="form-group">
                <label>Apellido:</label>
                <input type="text" className="form-control"
                value={this.state.last_name}
                onChange={this.onChangeLastName} />
              </div>
 
              <div className="form-group">
                <label>Correo:</label>
                <input type="text" className="form-control"
                 value={this.state.email}
                 onChange={this.onChangeEmail}/>
              </div>
 
           
              <input type="submit" className="btn btn-primary" value="Actualizar"/>
            </form>
          </div>  
         );
     }

}
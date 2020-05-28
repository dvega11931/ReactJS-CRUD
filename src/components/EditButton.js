import React from 'react';
import {Link} from 'react-router-dom';
import Button  from "@material-ui/core/Button";

const EditButton = (props) => (


<Button variant="contained" color="primary" component={Link} to={props.url}>{props.name}</Button>


)

export default EditButton
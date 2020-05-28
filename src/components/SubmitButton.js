import React from 'react';

import Button  from "@material-ui/core/Button";

const SubmitButton = (props) => (

<Button variant="contained" color="primary" type="submit">{props.name}</Button>

)

export default SubmitButton
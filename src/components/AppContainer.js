import React from 'react';
import NavBar from '../components/NavBar';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
}));

export default function AppContainer(props) {
  const classes = useStyles();
  function RenderNav(){
    return (<NavBar>
          {props.children}
        </NavBar>);
  }
  return(
      <div>
        {RenderNav()}
      </div>
    );
}
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

export const mainListItems = (
  <div>


    <ListItem button component={Link} to={'/'}>
            <ListItemIcon>
               <HomeIcon/>
               </ListItemIcon>
            <ListItemText primary="Inicio" />
        </ListItem>

        <ListItem button component={Link} to={'/Students'}>
            <ListItemIcon>
               <RadioButtonUncheckedIcon/>
               </ListItemIcon>
            <ListItemText primary="Estudiantes" />
        </ListItem>  


   
  </div>
);


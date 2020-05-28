import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Insert from './students/Insert';
import Edit from './students/Edit';
import Students from '../pages/Students';
import Home from '../pages/Home';
import AppContainer from '../components/AppContainer';

const App = () => (
    <div>
        <BrowserRouter>
            <AppContainer>
                <Switch>
                    <Route exact path='/students' component={ Students }/>
                    <Route exact path='/student/new' component={ Insert }/>
                    <Route exact path='/student/edit/:id' component={ Edit }/>
                    <Route exact path='/' component={ Home }/>
                </Switch>
            </AppContainer>
        </BrowserRouter>
    </div>
  );

export default App;





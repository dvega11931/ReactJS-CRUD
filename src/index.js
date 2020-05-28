// const element = document.createElement('h1');
// element.innerText = 'Hola react';
// const container = document.getElementById('root');
// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const container = document.getElementById('root');

//ReactDOM.render(__QUE__, __DONDE__);

ReactDOM.render(<App/>, container);
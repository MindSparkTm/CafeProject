import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CafeReact from './CafeReact'
import * as serviceWorker from './serviceWorker';
import Navbar from './Navbar'
ReactDOM.render(< CafeReact/>, document.getElementById('root'));
ReactDOM.render(<Navbar/>,document.getElementById('navbar'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

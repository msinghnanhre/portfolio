import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
import { HashRouter, BrowserRouter } from "react-router-dom"


ReactDOM.render(
    <BrowserRouter>
    <HashRouter>
        
            <App />
        
    </HashRouter>
    </BrowserRouter>,
    document.getElementById('root'));



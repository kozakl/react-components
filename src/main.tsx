import 'bootstrap/dist/css/bootstrap.min.css';
import './main.pcss';
import {Content} from './components/content';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Content/>,
    document.getElementById('main-root')
);

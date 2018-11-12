import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Content} from './components/content';
import './main.pcss';

ReactDOM.render(
    <Content/>,
    document.getElementById('main-root')
);

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Content} from './components/content';
import './main.pcss';

ReactDOM.render(
    <Content message={'Clicked!'}/>,
    document.getElementById('main-root')
);

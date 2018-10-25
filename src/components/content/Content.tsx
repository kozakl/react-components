import * as React from 'react';
import * as style from './Content.pcss';
import {PureComponent} from 'react';
import {SpinnerSample} from '../../pages/spinner-sample';

export default class Content extends PureComponent<Props>
{
    onClick = ()=>
    {
        console.log(this.props.message);
    };
    
    render()
    {
        return (
            <div className={style.content}>
                <SpinnerSample/>
            </div>
        );
    }
}

interface Props {
    message:string;
}

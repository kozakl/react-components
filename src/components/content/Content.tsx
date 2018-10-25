import * as React from 'react';
import * as style from './Content.pcss';
import {PureComponent} from 'react';

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
                <div className={style.logo}>
                    <img src={require('res/logo.svg')}/>
                </div>
                <button className={style.button} onClick={this.onClick}>Click</button>
            </div>
        );
    }
}

interface Props {
    message:string;
}

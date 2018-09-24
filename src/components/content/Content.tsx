import * as React from 'react';
import * as style from './Content.pcss';
import {PureComponent} from 'react';
/**
 * @author kozakluke@gmail.com
 */
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
                <button className={style.button} onClick={this.onClick}>Click</button>
            </div>
        );
    }
}

interface Props {
    message:string;
}

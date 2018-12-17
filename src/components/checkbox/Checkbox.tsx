import * as React from 'react';
import * as style from './Checkbox.pcss';
import {FunctionComponent} from 'react';

const Checkbox:FunctionComponent<Props> = (props)=>
{
    return (
        <div className={props.className}>
            <label className={style.label}>
                <input
                    className={style.input}
                    checked={props.checked}
                    type="checkbox"/>
                <span className={style.box}/>
                {props.children}
            </label>
            {props.error &&
                <div className={style.error}>
                    {props.error}
                </div>}
        </div>
    );
};

interface Props {
    className?:string;
    checked?:boolean;
    error?:string;
}

export default Checkbox;

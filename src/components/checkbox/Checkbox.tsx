import * as React from 'react';
import * as style from './Checkbox.pcss';
import {FunctionComponent} from "react";

const Checkbox:FunctionComponent<Props> = (props)=>
{
    return (
        <div className={props.className}>
            <input className={style.input} id="checkbox" type="checkbox"/>
            <label className={style.label} htmlFor="checkbox">
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
    error?:string;
}

export default Checkbox;

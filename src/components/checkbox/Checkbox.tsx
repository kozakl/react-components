import * as React from 'react';
import * as style from './Checkbox.pcss';
import {classNames} from '@kozakl/utils';

export default function Checkbox(props:Props)
{
    return (
        <div className={props.className}>
            <input className={style.input} id="checkbox" type="checkbox"/>
            <label className={style.label} htmlFor="checkbox">
                Label&nbsp;
            </label>
            {props.error &&
                <div className={style.error}>
                    {props.error}
                </div>}
        </div>
    );
}

interface Props {
    className?:string;
    error?:string;
}

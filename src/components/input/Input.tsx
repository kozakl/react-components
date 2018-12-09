import * as React from 'react';
import * as style from './Input.pcss';
import {classNames} from '@kozakl/utils';
import {InputHTMLAttributes} from "react";

export default function Input(props:Props)
{
    const {name, type, placeholder, onChange} = props;
    const fieldClass = classNames(
        style.field,
        props.error && style.error
    );
    return (
        <div className={props.className}>
            <input className={fieldClass} {...{name, type, placeholder, onChange}}/>
            {props.error &&
                <div className={style.error}>
                    {props.error}
                </div>}
        </div>
    )
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?:string;
    error?:string;
}

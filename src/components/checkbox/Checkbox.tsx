import {FunctionComponent,
        InputHTMLAttributes} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Checkbox.pcss';

export const Checkbox:FunctionComponent<Props> = (props)=>
{
    const checkboxClass = classNames(
        style.checkbox,
        props.className
    );
    const labelClass = classNames(
        style.label,
        props.disabled && style.disabled
    );
    return (
        <div className={checkboxClass}>
            <label className={labelClass}>
                <input
                    className={style.input}
                    checked={props.checked}
                    disabled={props.disabled}
                    onChange={props.onChange}
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

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error?:string;
}

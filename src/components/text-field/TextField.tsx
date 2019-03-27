import {FunctionComponent,
        InputHTMLAttributes} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './TextField.pcss';

const TextField:FunctionComponent<Props> = (props)=>
{
    const textFieldClass = classNames(
        props.className,
        style.textField
    );
    const inputClass = classNames(
        style.input,
        props.disabled && style.disabled,
        props.error && style.error,
    );
    const placeholderClass = classNames(
        style.placeholder,
        props.disabled && style.disabled,
        props.open && style.open,
        props.value &&
        props.value.length && style.open
    );
    return (
        <div className={textFieldClass}>
            <input
                className={inputClass}
                type={props.type}
                value={props.value}
                maxLength={props.maxLength}
                disabled={props.disabled}
                onChange={props.onChange}/>
            
            {props.placeholder &&
                <div className={placeholderClass}>
                    {props.placeholder}
                </div>}
            {props.error &&
                <div className={style.error}>
                    {props.error}
                </div>}
        </div>
    );
};

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    value?:string;
    open?:boolean;
    error?:string;
}

export default TextField;

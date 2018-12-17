import * as React from 'react';
import * as style from './Input.pcss';
import {FunctionComponent,
        InputHTMLAttributes} from 'react';
import {classNames} from '@kozakl/utils';

const Input:FunctionComponent<Props> = (props)=>
{
    const inputClass = classNames(
        props.className,
        style.input
    );
    const textClass = classNames(
        style.text,
        props.error && style.error
    );
    const placeholderClass = classNames(
        style.placeholder,
        props.value &&
        props.value.length && style.open
    );
    return (
        <div className={inputClass}>
            <input
                className={textClass}
                type={props.type}
                value={props.value}
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
    error?:string;
}

export default Input;

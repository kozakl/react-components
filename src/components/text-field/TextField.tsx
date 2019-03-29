import {ChangeEventHandler, FunctionComponent,
        ReactNode} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './TextField.pcss';

const TextField:FunctionComponent<Props> = (props)=>
{
    console.log(props.error)
    const textFieldClass = classNames(
        props.className,
        style.textField
    );
    const containerClass = classNames(
        style.container,
        (props.startAdornment ||
            props.endAdornment) && style.flex,
    );
    const inputContainerClass = classNames(
        style.inputContainer,
        !props.startAdornment && style.relative
    );
    const placeholderClass = classNames(
        style.placeholder,
        props.disabled && style.disabled,
        (props.value ||
            props.open ||
            props.startAdornment) && style.open
    );
    const inputClass = classNames(
        style.input,
        props.disabled && style.disabled,
        props.error && style.error,
    );
    return (
        <div className={textFieldClass}>
            <div className={containerClass}>
                {props.startAdornment &&
                    <div className={style.startAdornment}>
                        {props.startAdornment}
                    </div>}
                <div className={inputContainerClass}>
                    {props.placeholder &&
                        <label className={placeholderClass}>
                            {props.placeholder}
                        </label>}
                    <input
                        className={inputClass}
                        type={props.type}
                        value={props.value}
                        maxLength={props.maxLength}
                        disabled={props.disabled}
                        onChange={props.onChange}/>
                </div>
                {props.endAdornment &&
                    <div className={style.endAdornment}>
                        {props.endAdornment}
                    </div>}
            </div>
            {props.error &&
                <div className={style.error}>
                    {props.error}
                </div>}
        </div>
    );
};

interface Props {
    className?:string;
    type?:string;
    value?:string;
    open?:boolean;
    maxLength?:number;
    disabled?:boolean;
    placeholder?:ReactNode;
    startAdornment?:ReactNode;
    endAdornment?:ReactNode;
    error?:string;
    onChange?:ChangeEventHandler<HTMLInputElement>
}

export default TextField;

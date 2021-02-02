import {ChangeEventHandler,
        FunctionComponent, ReactNode} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './TextField.pcss';

export const TextField:FunctionComponent<Props> = (props)=>
{
    const textFieldClass = classNames(
        style.textField,
        props.className,
        props.disabled && style.disabled
    );
    const adornmentContainerClass = classNames(
        style.adornmentContainer,
        (props.startAdornment ||
            props.endAdornment) && style.flex,
        props.error && style.error
    );
    const placeholderContainerClass = classNames(
        style.placeholderContainer,
        !props.startAdornment && style.relative
    );
    const placeholderClass = classNames(
        style.placeholder,
        (props.value ||
            props.opened ||
            props.startAdornment) && style.opened
    );
    return (
        <div className={textFieldClass}>
            <div className={adornmentContainerClass}>
                {props.startAdornment &&
                    <div className={style.startAdornment}>
                        {props.startAdornment}
                    </div>}
                <div className={placeholderContainerClass}>
                    <input
                        className={style.input}
                        id={props.id}
                        type={props.type}
                        value={props.value}
                        autoComplete={props.autoComplete}
                        placeholder={!props.openable ?
                            props.placeholder.toString() : null}
                        min={props.min}
                        max={props.max}
                        maxLength={props.maxLength}
                        disabled={props.disabled}
                        onChange={props.onChange}/>
                    {props.openable &&
                     props.placeholder &&
                        <label className={placeholderClass}>
                            {props.placeholder}
                        </label>}
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

TextField.defaultProps = {
    openable: true
};

interface Props {
    className?:string;
    id?:string;
    type?:string;
    value?:string;
    opened?:boolean;
    openable?:boolean;
    autoComplete?:string;
    placeholder?:ReactNode|string;
    min?:number;
    max?:number;
    maxLength?:number;
    disabled?:boolean;
    startAdornment?:ReactNode;
    endAdornment?:ReactNode;
    error?:string;
    onChange?:ChangeEventHandler<HTMLInputElement>;
}

export default TextField;

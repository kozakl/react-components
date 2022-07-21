import {ChangeEventHandler, KeyboardEventHandler,
        MouseEventHandler, ReactNode} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './TextField.module.css';

const TextField = (props:Props)=>
{
    return (
        <div
            className={classNames(
                style.textField,
                props.className,
                props.disabled && style.disabled
            )}>
            <div
                className={classNames(
                    style.adornmentContainer,
                    (props.startAdornment ||
                        props.endAdornment) && style.flex,
                    props.outlined && style.outlined,
                    props.error && style.error
                )}>
                {props.startAdornment &&
                    <div className={style.startAdornment}>
                        {props.startAdornment}
                    </div>}
                <div
                    className={classNames(
                        style.placeholderContainer,
                        !props.startAdornment && style.relative
                    )}
                    onClick={props.onClick}>
                    <input
                        className={style.input}
                        id={props.id}
                        type={props.type}
                        value={props.value}
                        defaultValue={props.defaultValue}
                        placeholder={!props.openable ?
                            props.placeholder.toString() : null}
                        disabled={props.disabled}
                        autoComplete={props.autoComplete}
                        min={props.min}
                        max={props.max}
                        maxLength={props.maxLength}
                        onChange={props.onChange}
                        onKeyDown={props.onKeyDown}
                        onKeyUp={props.onKeyUp}/>
                    {props.openable &&
                     props.placeholder &&
                        <label
                            className={classNames(
                                style.placeholder,
                                (props.value ||
                                    props.opened ||
                                    props.startAdornment) && style.opened
                            )}>
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
    defaultValue?:string;
    placeholder?:ReactNode|string;
    opened?:boolean;
    openable?:boolean;
    outlined?:boolean;
    disabled?:boolean;
    autoComplete?:string;
    min?:number;
    max?:number;
    maxLength?:number;
    startAdornment?:ReactNode;
    endAdornment?:ReactNode;
    error?:string;
    onChange?:ChangeEventHandler<HTMLInputElement>;
    onClick?:MouseEventHandler<HTMLDivElement>;
    onKeyDown?:KeyboardEventHandler<HTMLInputElement>;
    onKeyUp?:KeyboardEventHandler<HTMLInputElement>;
}

export default TextField;
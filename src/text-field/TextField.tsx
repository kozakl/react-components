import {ChangeEventHandler, KeyboardEventHandler,
        MouseEventHandler, ReactNode} from 'react';
import {classNames} from '@kozakl/utils';
import style from './TextField.module.css';

const TextField = (props:Props)=>
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
        props.outlined && style.outlined,
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
    const errorClass = classNames(
        style.error,
        props.error && style.display
    );
    return (
        <div className={textFieldClass}>
            <div className={adornmentContainerClass}>
                {props.startAdornment &&
                    <div className={style.startAdornment}>
                        {props.startAdornment}
                    </div>}
                <div
                    className={placeholderContainerClass}
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
                        <label className={placeholderClass}>
                            {props.placeholder}
                        </label>}
                </div>
                {props.endAdornment &&
                    <div className={style.endAdornment}>
                        {props.endAdornment}
                    </div>}
            </div>
            <div className={errorClass}>
                {props.error}
            </div>
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

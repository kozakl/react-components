import {ChangeEventHandler, KeyboardEventHandler,
        MouseEventHandler, ReactNode} from 'react';
import {classNames} from '@kozakl/utils';
import {useTheme} from '../theme';
import React from 'react';

const TextField = (props:Props)=> {
    const theme = useTheme('textField');
    return (
        <div
            className={classNames(
                theme.textField,
                props.className,
                props.disabled &&
                    theme.disabled
            )}>
            <div
                className={classNames(
                    theme.adornmentContainer,
                    (props.startAdornment ||
                        props.endAdornment) &&
                            theme.flex,
                    props.outlined &&
                        theme.outlined,
                    props.error &&
                        theme.error
                )}>
                {props.startAdornment &&
                    <div className={theme.startAdornment}>
                        {props.startAdornment}
                    </div>}
                <div
                    className={classNames(
                        theme.placeholderContainer,
                        !props.startAdornment &&
                            theme.relative
                    )}
                    onClick={props.onClick}>
                    <input
                        className={theme.input}
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
                                theme.placeholder,
                                (props.value ||
                                    props.opened ||
                                    props.startAdornment) &&
                                        theme.opened
                            )}>
                            {props.placeholder}
                        </label>}
                </div>
                {props.endAdornment &&
                    <div className={theme.endAdornment}>
                        {props.endAdornment}
                    </div>}
            </div>
            <div
                className={classNames(
                    theme.error,
                    props.error &&
                        theme.display
                )}>
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

import {ChangeEventHandler, PropsWithChildren} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Switch.module.css';

const Switch = (props:Props)=>
{
    return (
        <div
            className={classNames(
                style.switch,
                props.reversed && style.reversed,
                props.className
            )}>
            <label
                className={classNames(
                    style.label,
                    props.disabled && style.disabled
                )}>
                <input
                    className={style.input}
                    id={props.id}
                    name={props.name}
                    type="checkbox"
                    defaultChecked={props.defaultChecked}
                    checked={props.checked}
                    disabled={props.disabled}
                    onChange={props.onChange}/>
                <span className={style.thumb}/>
                <span>{props.children}</span>
            </label>
            {props.error &&
                <div className={style.error}>
                    {props.error}
                </div>}
        </div>
    );
};

interface Props extends PropsWithChildren<{}> {
    className?:string;
    id?:string;
    name?:string;
    defaultChecked?:boolean;
    checked?:boolean;
    reversed?:boolean;
    disabled?:boolean;
    error?:string;
    onChange?:ChangeEventHandler<HTMLInputElement>;
}

export default Switch;
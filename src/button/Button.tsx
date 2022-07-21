import {FunctionComponent, MouseEvent} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Button.module.css';

const Button:FunctionComponent<Props> = (props)=>
{
    return (
        <button
            className={classNames(
                style.button,
                props.size == 'small' &&
                    style.small,
                props.reversed && style.reversed,
                props.className
            )}
            id={props.id}
            type={props.type}
            title={props.title}
            disabled={props.disabled}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};

Button.defaultProps = {
    type: 'button',
};

interface Props {
    className?:string;
    id?:string;
    type?:'submit' | 'reset' | 'button';
    size?:'normal' | 'small';
    title?:string;
    reversed?:boolean;
    disabled?:boolean;
    onClick?:(event:MouseEvent<HTMLButtonElement>)=> void;
}

export default Button;

import {CSSProperties, MouseEventHandler,
        PropsWithChildren} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './IconButton.module.css';

const IconButton = (props:Props)=> {
    return (
        <button
            className={classNames(
                style.iconButton,
                props.className,
                props.active &&
                    style.active
            )}
            title={props.title}
            type={props.type}
            style={props.style}
            disabled={props.disabled}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};

IconButton.defaultProps = {
    type: 'button'
}

interface Props extends PropsWithChildren<{}> {
    className?:string;
    title?:string;
    style?:CSSProperties;
    type?:'button' | 'submit' | 'reset';
    active?:boolean;
    disabled?:boolean;
    onClick?:MouseEventHandler<HTMLButtonElement>;
}

export default IconButton;

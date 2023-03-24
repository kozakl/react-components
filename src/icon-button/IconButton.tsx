import {MouseEventHandler, PropsWithChildren} from 'react';
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
            disabled={props.disabled}
            onClick={props.onClick}
            {...props.dataAttributes}>
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
    type?:'button' | 'submit' | 'reset';
    active?:boolean;
    disabled?:boolean;
    dataAttributes?: {
        [attribute:`data-${string}`]:string | number | boolean
    };
    onClick?:MouseEventHandler<HTMLButtonElement>;
}

export default IconButton;

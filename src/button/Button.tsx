import {MouseEvent, PropsWithChildren} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';

const Button = (props:Props)=> {
    return (
        <button
            className={classNames(
                props.size == 'small' &&
                    props.theme.small,
                props.secondary &&
                    props.theme.secondary,
                props.theme.button,
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
    theme: {},
    type: 'button'
};

interface Props extends PropsWithChildren<{}> {
    className?:string;
    theme?:{[key:string]:string};
    id?:string;
    type?:'submit' | 'reset' | 'button';
    size?:'normal' | 'small';
    title?:string;
    secondary?:boolean;
    disabled?:boolean;
    onClick?:(event:MouseEvent<HTMLButtonElement>)=> void;
}

export default Button;

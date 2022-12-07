import {MouseEvent, PropsWithChildren} from 'react';
import {classNames} from '@kozakl/utils';
import {useTheme} from '../theme';
import React from 'react';

const Button = (props:Props)=> {
    const theme = useTheme('button');
    return (
        <button
            className={classNames(
                props.small &&
                    theme.small,
                props.secondary &&
                    theme.secondary,
                props.tertiary &&
                    theme.tertiary,
                theme.button,
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
    type: 'button'
};

interface Props extends PropsWithChildren<{}> {
    className?:string;
    id?:string;
    type?:'submit' | 'reset' | 'button';
    title?:string;
    small?:boolean;
    secondary?:boolean;
    tertiary?:boolean;
    disabled?:boolean;
    onClick?:(event:MouseEvent<HTMLButtonElement>)=> void;
}

export default Button;

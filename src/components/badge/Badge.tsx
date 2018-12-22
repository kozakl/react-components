import {FunctionComponent} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Badge.pcss';

const Badge:FunctionComponent<Props> = (props)=>
{
    const classes = classNames(
        style.badge,
        props.className,
        props.disabled && style.disabled
    );
    return (
        <a {...props} className={classes}>
            {props.children}
        </a>
    );
};

interface Props {
    className?:string;
    disabled?:boolean;
}

export default Badge;

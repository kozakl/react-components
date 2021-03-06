import {FunctionComponent} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Badge.pcss';

const Badge:FunctionComponent<Props> = (props)=>
{
    const badgeClass = classNames(
        style.badge,
        props.className,
        props.disabled && style.disabled
    );
    return (
        <a
            className={badgeClass}
            href={props.href}>
            <label className={style.label}>
                {props.children}
            </label>
        </a>
    );
};

interface Props {
    className?:string;
    href?:string;
    disabled?:boolean;
}

export default Badge;

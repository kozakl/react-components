import {PropsWithChildren} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Badge.module.css';

const Badge = (props:Props)=>
{
    return (
        <a
            className={classNames(
                style.badge,
                props.className,
            )}
            title={props.title}
            href={props.href}>
            <label className={style.label}>
                {props.children}
            </label>
        </a>
    );
};

interface Props extends PropsWithChildren<{}> {
    className?:string;
    title?:string;
    href?:string;
}

export default Badge;

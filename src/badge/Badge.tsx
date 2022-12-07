import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Badge.module.css';

const Badge = (props:Props)=> {
    return (
        <a
            className={classNames(
                style.badge,
                props.className,
            )}
            title={props.title}
            href={props.href}>
            <label className={style.label}>
                {props.value}
            </label>
        </a>
    );
};

interface Props {
    className?:string;
    title?:string;
    value?:number;
    href?:string;
}

export default Badge;

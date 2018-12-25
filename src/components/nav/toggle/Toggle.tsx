import {FunctionComponent} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Toggle.pcss';

const Toggle:FunctionComponent<Props> = (props)=>
{
    const toggleClass = classNames(
        style.toggle,
        props.className,
        props.open && style.open
    );
    return (
        <svg
            className={toggleClass}
            onClick={props.onChange}
            viewBox="0 0 100 100">
            <path className={style.line1} d="M5 13h90v14H5z"/>
            <path className={style.line2} d="M5 43h90v14H5z"/>
            <path className={style.line3} d="M5 73h90v14H5z"/>
        </svg>
    );
};

interface Props {
    className?:string;
    open:boolean;
    onChange?:()=> void;
}

export default Toggle;

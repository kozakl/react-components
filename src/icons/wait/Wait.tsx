import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Wait.module.css';

const Wait = (props:Props)=> (
    <svg
        className={classNames(
            style.wait,
            props.className
        )}
        viewBox="0 0 32 32"
        style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            padding: props.padding,
            margin: props.margin,
            width: props.width,
            height: props.height
        }}>
        <path
            className={style.ring1}
            style={{
                fill: 'none',
                stroke: props.color,
                strokeWidth: 2
            }}
            d="M16,6.8c-5.1,0-9.2,4.1-9.2,9.2c0,5.1,4.1,9.2,9.2,9.2c5.1,0,9.2-4.1,9.2-9.2"/>
        <g className={style.ring2}>
            <path
                style={{
                    fill: 'none',
                    stroke: props.color,
                    strokeWidth: 1.5
                }}
                d="M16,1c8.3,0,15,6.7,15,15"/>
            <path
                style={{
                    fill: 'none',
                    stroke: props.color,
                    strokeWidth: 1.5
                }}
                d="M31,16c0,8.3-6.7,15-15,15C7.7,31,1,24.3,1,16"/>
        </g>
    </svg>
);

Wait.defaultProps = {
    color: 'var(--color-primary)'
}

interface Props {
    className?:string;
    color?:string;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default Wait;

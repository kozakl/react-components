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
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            d="M16,11.1c-2.7,0-4.9,2.2-4.9,4.9s2.2,4.9,4.9,4.9s4.9-2.2,4.9-4.9"/>
        <g className={style.ring2}>
            <path
                style={{
                    fill: 'none',
                    stroke: props.colorPrimary,
                    strokeWidth: 0.75 * props.stroke
                }}
                d="M16,8c4.4,0,8,3.6,8,8"/>
            <path
                style={{
                    fill: 'none',
                    stroke: props.colorPrimary,
                    strokeWidth: 0.75 * props.stroke
                }}
                d="M24,16c0,4.4-3.6,8-8,8s-8-3.6-8-8"/>
        </g>
    </svg>
);

Wait.defaultProps = {
    colorPrimary: 'var(--color-primary)',
    stroke: 1
};

interface Props {
    className?:string;
    colorPrimary?:string;
    stroke?:number;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default Wait;

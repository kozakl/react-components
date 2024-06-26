import React from 'react';

const CirclePlus = (props:Props)=> (
    <svg
        className={props.className}
        viewBox="0 0 32 32"
        style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            padding: props.padding,
            margin: props.margin,
            width: props.width,
            height: props.height
        }}>
        <circle
            style={{
                fill: props.background,
                stroke: props.outline && props.colorSecondary,
                strokeWidth: props.outline
            }}
            r="8"
            cx="16"
            cy="16"/>
        <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            x1="16"
            y1="11.1"
            x2="16"
            y2="20.9"/>
	    <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            x1="20.9"
            y1="16"
            x2="11.1"
            y2="16"/>
    </svg>
);

CirclePlus.defaultProps = {
    background: 'none',
    colorPrimary: 'var(--color-primary)',
    colorSecondary: 'var(--color-primary)',
    stroke: 1,
    outline: 1
}

interface Props {
    className?:string;
    background?:string;
    colorPrimary?:string;
    colorSecondary?:string;
    stroke?:number;
    outline?:number;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default CirclePlus;

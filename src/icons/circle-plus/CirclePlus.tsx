import React from 'react';

const CirclePlus = (props:Props)=> (
    <svg
        className={props.className}
        viewBox={`
            ${-2 * (props.outline - 1) / 2}
            ${-2 * (props.outline - 1) / 2}
            ${32 + 2 * (props.outline - 1)}
            ${32 + 2 * (props.outline - 1)}`}
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
                strokeWidth: 2 * props.outline
            }}
            r="15"
            cx="16"
            cy="16"/>
        <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 2 * props.stroke
            }}
            x1="16"
            y1="6.8"
            x2="16"
            y2="25.2"/>
	    <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 2 * props.stroke
            }}
            x1="25.2"
            y1="16"
            x2="6.8"
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

import React from 'react';

const CircleXMark = (props:Props)=> (
    <svg
        className={props.className}
        viewBox={`
            ${-1.5 * (props.outline - 1) / 2}
            ${-1.5 * (props.outline - 1) / 2}
            ${32 + 1.5 * (props.outline - 1)}
            ${32 + 1.5 * (props.outline - 1)}`}
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
                strokeWidth: 1.5 * props.outline
            }}
            r="15.2"
            cx="16"
            cy="16"/>
        <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 1.5 * props.stroke
            }}
            x1="7.2"
            y1="24.8"
            x2="24.8"
            y2="7.2"/>
	    <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 1.5 * props.stroke
            }}
            x1="7.2"
            y1="7.2"
            x2="24.8"
            y2="24.8"/>
    </svg>
);

CircleXMark.defaultProps = {
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

export default CircleXMark;

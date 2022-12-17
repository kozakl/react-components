import React from 'react';

const CircleDownload = (props:Props)=> (
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
        <path
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 2 * props.stroke
            }}
            d="M22.5,14.5L16,20.9l-6.5-6.4 M16,8v13"/>
	    <path
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 2 * props.stroke
            }}
            d="M22.2,24H9.8"/>
    </svg>
);

CircleDownload.defaultProps = {
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

export default CircleDownload;

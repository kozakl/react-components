import React from 'react';

const CircleDownload = (props:Props)=> (
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
                stroke: props.color,
                strokeWidth: 1.5 * props.stroke
            }}
            r="15.2"
            cx="16"
            cy="16"/>
        <path
            style={{
                fill: 'none',
                stroke: props.color,
                strokeWidth: 1.5 * props.stroke
            }}
            d="M22.5,14.5L16,20.9l-6.5-6.4 M16,8v13"/>
	    <path
            style={{
                fill: 'none',
                stroke: props.color,
                strokeWidth: 1.5 * props.stroke
            }}
            d="M22.2,24H9.8"/>
    </svg>
);

CircleDownload.defaultProps = {
    background: 'none',
    color: 'var(--color-primary)',
    stroke: 1
}

interface Props {
    className?:string;
    background?:string;
    color?:string;
    stroke?:number;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default CircleDownload;

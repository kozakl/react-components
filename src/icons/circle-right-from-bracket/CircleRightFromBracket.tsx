import React from 'react';

const CircleRightFromBracket = (props:Props)=> (
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
                strokeWidth: 1.5 * props.stroke
            }}
            d="M16,7.6h-5.2c-1.4,0-2.5,1.1-2.5,2.5v11.7c0,1.4,1.1,2.5,2.5,2.5H16"/>
	    <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 1.5 * props.stroke
            }}
            x1="12.1"
            y1="16"
            x2="23.3"
            y2="16"/>
	    <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 1.5 * props.stroke
            }}
            points="20.5,12.6 23.9,16 20.5,19.4"/>
    </svg>
);

CircleRightFromBracket.defaultProps = {
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

export default CircleRightFromBracket;

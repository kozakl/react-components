import React from 'react';

const CircleRightFromBracket = (props:Props)=> (
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
        <path
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 0.75 * props.stroke
            }}
            d="M16,11.5h-2.8c-0.7,0-1.3,0.6-1.3,1.3v6.2c0,0.7,0.6,1.3,1.3,1.3H16"/>
	    <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 0.75 * props.stroke
            }}
            x1="13.9"
            y1="16"
            x2="19.9"
            y2="16"/>
	    <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 0.75 * props.stroke
            }}
            points="18.4,14.2 20.2,16 18.4,17.8"/>
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

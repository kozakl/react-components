import React from 'react';

const CircleMinus = (props:Props)=> (
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
	    <line
            style={{
                fill: 'none',
                stroke: props.color,
                strokeWidth: 1.5 * props.stroke
            }}
            x1="25.2"
            y1="16"
            x2="6.8"
            y2="16"/>
    </svg>
);

CircleMinus.defaultProps = {
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

export default CircleMinus;

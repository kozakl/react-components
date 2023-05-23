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
                stroke: props.circleStroke && props.colorSecondary,
                strokeWidth: props.circleStroke
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
            x1="20.9"
            y1="16"
            x2="11.1"
            y2="16"/>
    </svg>
);

CircleMinus.defaultProps = {
    background: 'none',
    colorPrimary: 'var(--color-primary)',
    colorSecondary: 'var(--color-primary)',
    stroke: 1,
    circleStroke: 1
}

interface Props {
    className?:string;
    background?:string;
    colorPrimary?:string;
    colorSecondary?:string;
    stroke?:number;
    circleStroke?:number;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default CircleMinus;

import React from 'react';

const CircleArrowRight = (props:Props)=> (
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
        <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            points="15.9,10.8 21.1,15.9 15.9,21.2"/>
        <line
            style={{
                stroke: props.colorSecondary,
                strokeWidth: props.stroke
            }}
            x1="10.7"
            y1="15.9"
            x2="21.2"
            y2="15.9"/>
    </svg>
);

CircleArrowRight.defaultProps = {
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

export default CircleArrowRight;

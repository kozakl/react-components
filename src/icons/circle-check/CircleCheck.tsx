import React from 'react';

const CircleCheck = (props:Props)=> (
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
            points="10.8,16 14.3,19.5 21.2,12.5"/>
    </svg>
);

CircleCheck.defaultProps = {
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

export default CircleCheck;

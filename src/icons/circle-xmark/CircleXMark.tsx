import React from 'react';

const CircleXMark = (props:Props)=> (
    <svg
        className={props.className}
        viewBox="0 0 32 32"
        style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            strokeLinecap: props.strokeLinecap,
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
            x1="11.3"
            y1="20.7"
            x2="20.7"
            y2="11.3"/>
	    <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            x1="11.3"
            y1="11.3"
            x2="20.7"
            y2="20.7"/>
    </svg>
);

CircleXMark.defaultProps = {
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
    strokeLinecap?:'butt' | 'round' | 'square',
    circleStroke?:number;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default CircleXMark;

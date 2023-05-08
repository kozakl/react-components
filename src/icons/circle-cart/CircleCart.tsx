import React from 'react';

const CircleCart = (props:Props)=> (
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
            points="11,13.2 12.7,13.2 14.5,18.8 19.4,18.8 21,14.9 16,14.9"/>
        <circle
            style={{
                fill: props.colorPrimary
            }}
            r="0.7"
            cx="14"
            cy="20.8"/>
	    <circle
            style={{
                fill: props.colorPrimary
            }}
            r="0.7"
            cx="19.4"
            cy="20.8"/>
    </svg>
);

CircleCart.defaultProps = {
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

export default CircleCart;

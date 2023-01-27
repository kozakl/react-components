import React from 'react';

const CircleCart = (props:Props)=> (
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
        <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 1.5 * props.stroke
            }}
            points="6.6,10.7 9.8,10.7 13.1,21.2 22.3,21.2 25.3,13.9 16,13.9"/>
    </svg>
);

CircleCart.defaultProps = {
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

export default CircleCart;

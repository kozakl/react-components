import React from 'react';

const ArrowTopLeft = (props:Props)=> (
    <svg
        className={props.className}
        viewBox={`
            ${-4 * (props.stroke - 1) / 2}
            ${-4 * (props.stroke - 1) / 2}
            ${32 + 4 * (props.stroke - 1)}
            ${32 + 4 * (props.stroke - 1)}`}
        style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            padding: props.padding,
            margin: props.margin,
            width: props.width,
            height: props.height
        }}>
        <path
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 4 * props.stroke
            }}
            d="M30,2H2 M2,2v28 M2,2l28,28"/>
    </svg>
);

ArrowTopLeft.defaultProps = {
    colorPrimary: 'var(--color-primary)',
    stroke: 1
}

interface Props {
    className?:string;
    colorPrimary?:string;
    stroke?:number;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default ArrowTopLeft;

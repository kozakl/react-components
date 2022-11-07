import React from 'react';

const ArrowBottomRight = (props:Props)=> (
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
            d="M2,30h28 M30,30V2 M30,30L2,2"/>
    </svg>
);

ArrowBottomRight.defaultProps = {
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

export default ArrowBottomRight;

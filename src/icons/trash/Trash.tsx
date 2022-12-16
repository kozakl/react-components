import React from 'react';

const Trash = (props:Props)=> (
    <svg
        className={props.className}
        viewBox={`
            ${-2 * (props.stroke - 1) / 2}
            ${-2 * (props.stroke - 1) / 2}
            ${32 + 2 * (props.stroke - 1)}
            ${32 + 2 * (props.stroke - 1)}`}
        style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            padding: props.padding,
            margin: props.margin,
            width: props.width,
            height: props.height
        }}>
        <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 2 * props.stroke
            }}
            points="31,6.9 31,1.7 1,1.7 1,6.9"/>
        <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 2 * props.stroke
            }}
            points="4.7,4.3 7.1,30.3 14.2,30.3"/>
        <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 2 * props.stroke
            }}
            points="27.3,4.3 24.9,30.3 10.8,30.3"/>
    </svg>
);

Trash.defaultProps = {
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

export default Trash;

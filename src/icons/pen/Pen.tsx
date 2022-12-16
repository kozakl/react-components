import React from 'react';

const Pen = (props:Props)=> (
    <svg
        className={props.className}
        viewBox={`
            ${-1.75 * (props.stroke - 1) / 2}
            ${-1.75 * (props.stroke - 1) / 2}
            ${32 + 1.75 * (props.stroke - 1)}
            ${32 + 1.75 * (props.stroke - 1)}`}
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
                strokeWidth: 1.75 * props.stroke
            }}
            points="25.8,5.6 30.2,9.6 14,24.6 4,30.5 1.5,28.2"/>
        <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 1.75 * props.stroke
            }}
            points="30.5,5.6 26.1,1.5 10,16.5"/>
    </svg>
);

Pen.defaultProps = {
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

export default Pen;

import React from 'react';

const XMark = (props:Props)=> (
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
        <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 2 * props.stroke
            }}
            x1="1"
            y1="31"
            x2="31"
            y2="1"/>
        <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 2 * props.stroke
            }}
            x1="1"
            y1="1"
            x2="31"
            y2="31"/>
    </svg>
);

XMark.defaultProps = {
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

export default XMark;

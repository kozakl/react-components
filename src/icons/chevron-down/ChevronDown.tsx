import React from 'react';

const ChevronDown = (props:Props)=> (
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
                stroke: props.color,
                strokeWidth: 2 * props.stroke
            }}
            points="1,8 15.9,23 31,8"/>
    </svg>
);

ChevronDown.defaultProps = {
    color: 'var(--color-primary)',
    stroke: 1
}

interface Props {
    className?:string;
    color?:string;
    stroke?:number;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default ChevronDown;

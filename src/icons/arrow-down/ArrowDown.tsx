import React from 'react';

const ArrowDown = (props:Props)=> (
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
        <polyline
            style={{
                fill: 'none',
                stroke: props.color,
                strokeWidth: props.stroke
            }}
            points="31.5,15.4 16.1,30.8 0.5,15.4"/>
        <line
            style={{
                stroke: props.color,
                strokeWidth: props.stroke
            }}
            x1="16.1"
            y1="0"
            x2="16.1"
            y2="31"/>
    </svg>
);

ArrowDown.defaultProps = {
    color: 'var(--color-primary)',
    stroke: 2
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

export default ArrowDown;

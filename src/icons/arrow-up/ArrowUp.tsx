import React from 'react';

const ArrowUp = (props:Props)=> (
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
            points="0.5,16.6 16.1,1.2 31.5,16.6"/>
        <line
            style={{
                stroke: props.color,
                strokeWidth: props.stroke
            }}
            x1="16.1"
            y1="1"
            x2="16.1"
            y2="32"/>
    </svg>
);

ArrowUp.defaultProps = {
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

export default ArrowUp;

import React from 'react';

const ArrowLeft = (props:Props)=> (
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
                strokeWidth: 2.1
            }}
            points="16.6,31.5 1.2,16.1 16.6,0.5"/>
        <line
            style={{
                stroke: props.color,
                strokeWidth: 2.1
            }}
            x1="32"
            y1="16.1"
            x2="1"
            y2="16.1"/>
    </svg>
);

ArrowLeft.defaultProps = {
    color: 'var(--color-primary)'
}

interface Props {
    className?:string;
    color?:string;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default ArrowLeft;

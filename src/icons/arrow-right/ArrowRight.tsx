import React from 'react';

const ArrowRight = (props:Props)=> (
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
            points="15.4,0.5 30.8,15.9 15.4,31.5"/>
        <line
            style={{
                stroke: props.color,
                strokeWidth: props.stroke
            }}
            x1="0"
            y1="15.9"
            x2="31"
            y2="15.9"/>
    </svg>
);

ArrowRight.defaultProps = {
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

export default ArrowRight;

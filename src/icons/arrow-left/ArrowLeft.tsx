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
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            points="16.6,24 8.6,16.1 16.6,8"/>
        <line
            style={{
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            x1="24.5"
            y1="16.1"
            x2="8.5"
            y2="16.1"/>
    </svg>
);

ArrowLeft.defaultProps = {
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

export default ArrowLeft;

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
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            points="8,16.6 16.1,8.6 24,16.6"/>
        <line
            style={{
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            x1="16.1"
            y1="8.5"
            x2="16.1"
            y2="24.5"/>
    </svg>
);

ArrowUp.defaultProps = {
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

export default ArrowUp;

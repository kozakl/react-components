import React from 'react';

const ArrowTopLeft = (props:Props)=> (
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
        <path
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            d="M24,8H8 M8,8v16 M8,8l16,16"/>
    </svg>
);

ArrowTopLeft.defaultProps = {
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

export default ArrowTopLeft;

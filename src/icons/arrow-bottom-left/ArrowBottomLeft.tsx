import React from 'react';

const ArrowBottomLeft = (props:Props)=> (
    <svg
        className={props.className}
        viewBox="0 0 32 32"
        style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            strokeLinecap: props.strokeLinecap,
            padding: props.padding,
            margin: props.margin,
            width: props.width,
            height: props.height
        }}>
        {props.outline &&
            <path
                style={{
                    fill: 'none',
                    stroke: props.colorSecondary,
                    strokeWidth: props.outline
                }}
                d="M24,24H8 M8,24V8 M8,24L24,8"/>}
        <path
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            d="M24,24H8 M8,24V8 M8,24L24,8"/>
    </svg>
);

ArrowBottomLeft.defaultProps = {
    colorPrimary: 'var(--color-primary)',
    stroke: 1
};

interface Props {
    className?:string;
    colorPrimary?:string;
    colorSecondary?:string;
    stroke?:number;
    strokeLinecap?:'butt' | 'round' | 'square',
    outline?:number;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default ArrowBottomLeft;

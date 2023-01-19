import React from 'react';

const ChevronLeft = (props:Props)=> (
    <svg
        className={props.className}
        viewBox={`
            ${-2 * (props.outline || props.stroke - 1) / 2}
            ${-2 * (props.outline || props.stroke - 1) / 2}
            ${32 + 2 * (props.outline || props.stroke - 1)}
            ${32 + 2 * (props.outline || props.stroke - 1)}`}
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
            <polyline
                style={{
                    fill: 'none',
                    stroke: props.colorSecondary,
                    strokeWidth: 2 * props.outline
                }}
                points="24,1 8.9,15.9 24,31"/>}
        <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 2 * props.stroke
            }}
            points="24,1 8.9,15.9 24,31"/>
    </svg>
);

ChevronLeft.defaultProps = {
    colorPrimary: 'var(--color-primary)',
    stroke: 1
}

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

export default ChevronLeft;

import React from 'react';

const TrashArrowRight = (props:Props)=> (
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
                stroke: props.colorPrimary,
                strokeWidth: 2 * props.stroke
            }}
            points="31,6.9 31,1.7 1,1.7 1,6.9"/>
        <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 2 * props.stroke
            }}
            points="4.7,4.3 7.1,30.3 14.2,30.3"/>
        <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 2 * props.stroke
            }}
            points="27.3,4.3 24.9,30.3 10.8,30.3"/>
        <g>
            <line
                style={{
                    fill: 'none',
                    stroke: props.colorPrimary,
                    strokeWidth: 1.5 * props.stroke
                }}
                x1="13.5"
                y1="8.7"
                x2="21"
                y2="16.4"/>
            <line
                style={{
                    fill: 'none',
                    stroke: props.colorPrimary,
                    strokeWidth: 1.5 * props.stroke
                }}
                x1="13.5"
                y1="23.5"
                x2="21"
                y2="16.1"/>
            <line
                style={{
                    fill: 'none',
                    stroke: props.colorPrimary,
                    strokeWidth: 1.5 * props.stroke
                }}
                x1="1"
                y1="16.3"
                x2="20.6"
                y2="16.3"/>
        </g>
    </svg>
);

TrashArrowRight.defaultProps = {
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

export default TrashArrowRight;

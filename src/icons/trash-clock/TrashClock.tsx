import React from 'react';

const TrashClock = (props:Props)=> (
    <svg
        className={props.className}
        viewBox={`
            ${-2 * (props.stroke - 1) / 2}
            ${-2 * (props.stroke - 1) / 2}
            ${32 + 2 * (props.stroke - 1)}
            ${43.25 + 2 * (props.stroke - 1)}`}
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
            points="31,12.7 31,7.5 1,7.5 1,12.7"/>
        <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 2 * props.stroke
            }}
            points="4.8,10.1 7.1,36.1 14.2,36.1"/>
        <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 2 * props.stroke
            }}
            x1="25.8"
            y1="25.4"
            x2="27.2"
            y2="10.1"/>
        <circle
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 1.5 * props.stroke
            }}
            r="7"
            cx="23.2"
            cy="34.2"/>
        <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 1.5 * props.stroke
            }}
            x1="22.4"
            y1="35.5"
            x2="26.6"
            y2="35.5"/>
        <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 1.5 * props.stroke
            }}
            x1="22.4"
            y1="35.6"
            x2="22.3"
            y2="31.5"/>
    </svg>
);

TrashClock.defaultProps = {
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

export default TrashClock;

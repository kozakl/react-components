import React from 'react';

const TrashClock = (props:Props)=> (
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
            points="24,11.2 24,8.4 8,8.4 8,11.2"/>
        <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            points="10,9.8 11.3,23.7 15,23.7"/>
        <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            x1="21.2"
            y1="18"
            x2="22"
            y2="9.8"/>
        <circle
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 0.75 * props.stroke
            }}
            r="3.7"
            cx="19.8"
            cy="22.7"/>
        <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 0.75 * props.stroke
            }}
            x1="19.4"
            y1="23.4"
            x2="21.7"
            y2="23.4"/>
        <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 0.75 * props.stroke
            }}
            x1="19.4"
            y1="23.4"
            x2="19.4"
            y2="21.2"/>
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

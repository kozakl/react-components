import React from 'react';

const TrashArrowRight = (props:Props)=> (
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
            points="24,11.1 24,8.4 8,8.4 8,11.1"/>
        <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            points="10,9.8 11.3,23.6 15,23.6"/>
        <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            points="22,9.8 20.7,23.6 13.2,23.6"/>
        <g>
            <line
                style={{
                    fill: 'none',
                    stroke: props.colorPrimary,
                    strokeWidth: 0.75 * props.stroke
                }}
                x1="14.7"
                y1="12.1"
                x2="18.7"
                y2="16.2"/>
            <line
                style={{
                    fill: 'none',
                    stroke: props.colorPrimary,
                    strokeWidth: 0.75 * props.stroke
                }}
                x1="14.7"
                y1="20"
                x2="18.7"
                y2="16.1"/>
            <line
                style={{
                    fill: 'none',
                    stroke: props.colorPrimary,
                    strokeWidth: 0.75 * props.stroke
                }}
                x1="8"
                y1="16.2"
                x2="18.5"
                y2="16.2"/>
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

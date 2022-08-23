import React from 'react';

const ChevronUp = (props:Props)=> (
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
                strokeWidth: 2 * props.stroke
            }}
            points="1,24 15.9,9 31,24"/>
    </svg>
);

ChevronUp.defaultProps = {
    color: 'var(--color-primary)',
    stroke: 1
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

export default ChevronUp;

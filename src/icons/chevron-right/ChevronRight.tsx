import React from 'react';

const ChevronRight = (props:Props)=> (
    <svg
        className={props.className}
        viewBox="0 0 18.1 32"
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
            points="1.1,1 16,15.9 1.1,31"/>
    </svg>
);

ChevronRight.defaultProps = {
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

export default ChevronRight;

import React from 'react';

const Close = (props:Props)=> (
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
        <line
            style={{
                fill: 'none',
                stroke: props.color,
                strokeWidth: 2
            }}
            x1="1"
            y1="31"
            x2="31"
            y2="1"/>
        <line
            style={{
                fill: 'none',
                stroke: props.color,
                strokeWidth: 2
            }}
            x1="1"
            y1="1"
            x2="31"
            y2="31"/>
    </svg>
);

Close.defaultProps = {
    color: 'var(--color-primary)'
}

interface Props {
    className?:string;
    color?:string;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default Close;

import React from 'react';

const Delete = (props:Props)=> (
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
                strokeWidth: 2
            }}
            points="31,6.9 31,1.7 1,1.7 1,6.9"/>
        <polyline
            style={{
                fill: 'none',
                stroke: props.color,
                strokeWidth: 2
            }}
            points="4.7,4.3 7.1,30.3 14.2,30.3"/>
        <polyline
            style={{
                fill: 'none',
                stroke: props.color,
                strokeWidth: 2
            }}
            points="27.3,4.3 24.9,30.3 10.8,30.3"/>
    </svg>
);

Delete.defaultProps = {
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

export default Delete;

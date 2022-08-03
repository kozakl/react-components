import React from 'react';

const Edit = (props:Props)=> (
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
            points="25.8,5.6 30.2,9.6 14,24.6 4,30.5 1.5,28.2"/>
        <polyline
            style={{
                fill: 'none',
                stroke: props.color,
                strokeWidth: 2
            }}
            points="30.5,5.6 26.1,1.5 10,16.5"/>
    </svg>
);

Edit.defaultProps = {
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

export default Edit;

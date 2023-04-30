import React from 'react';

const Eye = (props:Props)=> (
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
        <path
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            d="M8,16c1.6,3.2,4.6,5.3,8,5.3s6.4-2.1,8-5.3c-1.6-3.2-4.6-5.3-8-5.3"/>
        <path
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            d="M19.9,16c0,2.1-1.7,3.9-3.9,3.9s-3.9-1.8-3.9-3.9s1.7-3.9,3.9-3.9"/>
    </svg>
);

Eye.defaultProps = {
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

export default Eye;

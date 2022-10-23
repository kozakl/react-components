import React from 'react';

const CircleURL = (props:Props)=> (
    <svg
        className={props.className}
        viewBox={`
            ${-1.5 * (props.outline - 1) / 2}
            ${-1.5 * (props.outline - 1) / 2}
            ${32 + 1.5 * (props.outline - 1)}
            ${32 + 1.5 * (props.outline - 1)}`}
        style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            padding: props.padding,
            margin: props.margin,
            width: props.width,
            height: props.height
        }}>
        <circle
            style={{
                fill: props.background,
                stroke: props.outline && props.colorSecondary,
                strokeWidth: 1.5 * props.outline
            }}
            r="15.2"
            cx="16"
            cy="16"/>
        <path
            style={{
                fill: props.colorPrimary
            }}
            d="M24.4,7.6c-1.8-1.8-4.7-1.8-6.4,0l-3.8,3.8c-1.8,1.8-1.6,4.8,0,6.4c0.3,0.3,0.6,0.5,0.9,0.7c0.3-0.2,0.6-0.4,0.9-0.6c0.1-0.2,0.1-0.5,0.1-0.9c0-0.2,0-0.5-0.1-0.7c-0.1-0.1-0.2-0.1-0.3-0.2c-0.9-0.9-0.9-2.3,0-3.2c0.1-0.1,3.7-3.7,3.8-3.8c0.9-0.9,2.3-0.9,3.2,0s0.9,2.3,0,3.2l-2.5,2.6c-0.1,0.4-0.1,0.9-0.1,1.5c0.1,0.6,0.2,1.1,0.4,1.5c0,0,0,0,0.1,0l3.8-3.8C26.2,12.3,26.2,9.3,24.4,7.6z"/>
	    <path
            style={{
                fill: props.colorPrimary
            }}
            d="M18.2,13.8c-0.3-0.3-0.6-0.5-0.9-0.7c-0.2,0.1-0.5,0.2-0.8,0.4c-0.1,0.2-0.2,0.6-0.2,1c0,0.2,0,0.5,0.1,0.7c0.1,0.1,0.2,0.1,0.3,0.2c0.9,0.9,0.9,2.3,0,3.2c-0.1,0.1-4,4-4.1,4.1c-0.9,0.9-2.3,0.9-3.2,0s-0.9-2.3,0-3.2l2.8-2.8c0.1-0.3,0.3-0.9,0.2-1.6c-0.1-0.7-0.3-1.1-0.5-1.3c0,0,0,0-0.1,0L7.6,18c-1.8,1.8-1.8,4.7,0,6.4c1.8,1.8,4.7,1.8,6.4,0l4.1-4.1C20,18.5,19.9,15.5,18.2,13.8z"/>
    </svg>
);

CircleURL.defaultProps = {
    background: 'none',
    colorPrimary: 'var(--color-primary)',
    colorSecondary: 'var(--color-primary)',
    outline: 1
}

interface Props {
    className?:string;
    background?:string;
    colorPrimary?:string;
    colorSecondary?:string;
    outline?:number;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default CircleURL;

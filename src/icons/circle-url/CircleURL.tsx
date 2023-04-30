import React from 'react';

const CircleURL = (props:Props)=> (
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
        <circle
            style={{
                fill: props.background,
                stroke: props.outline && props.colorSecondary,
                strokeWidth: props.outline
            }}
            r="8"
            cx="16"
            cy="16"/>
        <path
            style={{
                fill: props.colorPrimary
            }}
            d="M20.5,11.5c-1-1-2.5-1-3.4,0l-2,2c-1,1-0.9,2.6,0,3.4c0.2,0.2,0.3,0.3,0.5,0.4c0.2-0.1,0.3-0.2,0.5-0.3c0.1-0.1,0.1-0.3,0.1-0.5c0-0.1,0-0.3-0.1-0.4c-0.1-0.1-0.1-0.1-0.2-0.1c-0.5-0.5-0.5-1.2,0-1.7c0.1-0.1,2-2,2-2c0.5-0.5,1.2-0.5,1.7,0c0.5,0.5,0.5,1.2,0,1.7l-1.3,1.4c-0.1,0.2-0.1,0.5-0.1,0.8c0.1,0.3,0.1,0.6,0.2,0.8c0,0,0,0,0.1,0l2-2C21.4,14,21.4,12.4,20.5,11.5z"/>
	    <path
            style={{
                fill: props.colorPrimary
            }}
            d="M17.2,14.8c-0.2-0.2-0.3-0.3-0.5-0.4c-0.1,0.1-0.3,0.1-0.4,0.2c-0.1,0.1-0.1,0.3-0.1,0.5c0,0.1,0,0.3,0.1,0.4c0.1,0.1,0.1,0.1,0.2,0.1c0.5,0.5,0.5,1.2,0,1.7c-0.1,0.1-2.1,2.1-2.2,2.2c-0.5,0.5-1.2,0.5-1.7,0s-0.5-1.2,0-1.7l1.5-1.5c0.1-0.2,0.2-0.5,0.1-0.9c-0.1-0.4-0.2-0.6-0.3-0.7c0,0,0,0-0.1,0l-2.2,2.2c-1,1-1,2.5,0,3.4c1,1,2.5,1,3.4,0l2.2-2.2C18.1,17.3,18.1,15.7,17.2,14.8z"/>
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

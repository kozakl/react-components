import React from 'react';

const CircleDownload = (props:Props)=> (
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
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            d="M19.5,15.2L16,18.6l-3.5-3.4 M16,11.7v6.9"/>
	    <path
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            d="M19.3,20.3h-6.6"/>
    </svg>
);

CircleDownload.defaultProps = {
    background: 'none',
    colorPrimary: 'var(--color-primary)',
    colorSecondary: 'var(--color-primary)',
    stroke: 1,
    outline: 1
}

interface Props {
    className?:string;
    background?:string;
    colorPrimary?:string;
    colorSecondary?:string;
    stroke?:number;
    outline?:number;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default CircleDownload;

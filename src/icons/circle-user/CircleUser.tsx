import React from 'react';

const CircleUser = (props:Props)=> (
    <svg
        className={props.className}
        viewBox={`
            ${-2 * (props.outline - 1) / 2}
            ${-2 * (props.outline - 1) / 2}
            ${32 + 2 * (props.outline - 1)}
            ${32 + 2 * (props.outline - 1)}`}
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
                strokeWidth: 2 * props.outline
            }}
            r="15"
            cx="16"
            cy="16"/>
	    <circle
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 1.5 * props.stroke
            }}
            cx="15.7" cy="13.1" r="6.3"/>
	    <path
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 1.5 * props.stroke
            }}
            d="M9.4,29.4v-3.6c0-3.4,2.9-6.3,6.3-6.3"/>
	    <path
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 1.5 * props.stroke
            }}
            d="M22.6,29.4c0-3.3,0-3.6,0-3.6c0-3.4-2.9-6.3-6.3-6.3"/>
    </svg>
);

CircleUser.defaultProps = {
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

export default CircleUser;

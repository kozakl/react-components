import React from 'react';

const CircleUser = (props:Props)=> (
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
	    <circle
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 0.75 * props.stroke
            }}
            r="3.4"
            cx="15.8"
            cy="14.5"/>
	    <path
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 0.75 * props.stroke
            }}
            d="M12.5,23.1v-1.9c0-1.8,1.5-3.4,3.4-3.4"/>
	    <path
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 0.75 * props.stroke
            }}
            d="M19.5,23.1c0-1.8,0-1.9,0-1.9c0-1.8-1.5-3.4-3.4-3.4"/>
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

import React from 'react';

const ArrowRight = (props:Props)=> (
    <svg
        className={props.className}
        viewBox="0 0 32 32"
        style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            strokeLinecap: props.strokeLinecap,
            padding: props.padding,
            margin: props.margin,
            width: props.width,
            height: props.height
        }}>
        {props.outline &&
            <>
                <line
                    style={{
                        stroke: props.colorSecondary,
                        strokeWidth: props.outline
                    }}
                    x1="7.5"
                    y1="15.9"
                    x2="23.5"
                    y2="15.9"/>
                <polyline
                    style={{
                        fill: 'none',
                        stroke: props.colorSecondary,
                        strokeWidth: props.outline
                    }}
                    points="15.4,8 23.4,15.9 15.4,24"/>
            </>}
        <line
            style={{
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            x1="7.5"
            y1="15.9"
            x2="23.5"
            y2="15.9"/>
        <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            points="15.4,8 23.4,15.9 15.4,24"/>
    </svg>
);

ArrowRight.defaultProps = {
    colorPrimary: 'var(--color-primary)',
    stroke: 1
}

interface Props {
    className?:string;
    colorPrimary?:string;
    colorSecondary?:string;
    stroke?:number;
    strokeLinecap?:'butt' | 'round' | 'square',
    outline?:number;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default ArrowRight;

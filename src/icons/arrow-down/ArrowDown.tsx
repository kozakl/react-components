import React from 'react';

const ArrowDown = (props:Props)=> (
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
                    x1="16.1"
                    y1="7.5"
                    x2="16.1"
                    y2="23.5"/>
                <polyline
                    style={{
                        fill: 'none',
                        stroke: props.colorSecondary,
                        strokeWidth: props.outline
                    }}
                    points="24,15.4 16.1,23.4 8,15.4"/>
            </>}
        <line
            style={{
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            x1="16.1"
            y1="7.5"
            x2="16.1"
            y2="23.5"/>
        <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            points="24,15.4 16.1,23.4 8,15.4"/>
    </svg>
);

ArrowDown.defaultProps = {
    colorPrimary: 'var(--color-primary)',
    stroke: 1
};

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

export default ArrowDown;

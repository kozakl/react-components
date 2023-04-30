import React from 'react';

const ChevronRight = (props:Props)=> (
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
            <polyline
                style={{
                    fill: 'none',
                    stroke: props.colorSecondary,
                    strokeWidth: props.outline
                }}
                points="11.6,8 19.5,15.9 11.6,24"/>}
        <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            points="11.6,8 19.5,15.9 11.6,24"/>
    </svg>
);

ChevronRight.defaultProps = {
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

export default ChevronRight;

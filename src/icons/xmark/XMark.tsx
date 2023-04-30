import React from 'react';

const XMark = (props:Props)=> (
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
                        fill: 'none',
                        stroke: props.colorSecondary,
                        strokeWidth: props.outline
                    }}
                    x1="8"
                    y1="24"
                    x2="24"
                    y2="8"/>
                <line
                    style={{
                        fill: 'none',
                        stroke: props.colorSecondary,
                        strokeWidth: props.outline
                    }}
                    x1="8"
                    y1="8"
                    x2="24"
                    y2="24"/>
            </>}
        <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            x1="8"
            y1="24"
            x2="24"
            y2="8"/>
        <line
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            x1="8"
            y1="8"
            x2="24"
            y2="24"/>
    </svg>
);

XMark.defaultProps = {
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

export default XMark;

import React from 'react';

const ArrowLongLeft = (props:Props)=> (
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
                    x1="24"
                    y1="16"
                    x2="8"
                    y2="16"/>
                <polyline
                    style={{
                        fill: 'none',
                        stroke: props.colorSecondary,
                        strokeWidth: props.outline
                    }}
                    points="12,20 8,16 12,12"/>
            </>}
        <line
            style={{
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            x1="24"
            y1="16"
            x2="8"
            y2="16"/>
	    <polyline
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: props.stroke
            }}
            points="12,20 8,16 12,12"/>
    </svg>
);

ArrowLongLeft.defaultProps = {
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

export default ArrowLongLeft;

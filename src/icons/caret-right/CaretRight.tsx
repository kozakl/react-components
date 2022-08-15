import React from 'react';

const CaretRight = (props:Props)=> (
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
        <path
            style={{
                fill: props.color
            }}
            d="M8,32l16-16L8,0V32z"/>
    </svg>
);

CaretRight.defaultProps = {
    color: 'var(--color-primary)'
}

interface Props {
    className?:string;
    color?:string;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default CaretRight;

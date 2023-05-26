import React from 'react';

const CaretsOppositeV = (props:Props)=> (
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
                fill: props.colorPrimary
            }}
            d="M9.3,14.7L16,8l6.7,6.7H9.3z"/>
        <path
            style={{
                fill: props.colorPrimary
            }}
            d="M22.7,17.3L16,24l-6.7-6.7H22.7z"/>
    </svg>
);

CaretsOppositeV.defaultProps = {
    colorPrimary: 'var(--color-primary)'
}

interface Props {
    className?:string;
    colorPrimary?:string;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default CaretsOppositeV;

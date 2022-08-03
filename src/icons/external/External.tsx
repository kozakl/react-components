import React from 'react';

const External = (props:Props)=> (
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
        <polygon
            style={{
                fill: props.color
            }}
            points="28.4,28.4 3.6,28.4 3.6,3.6 16,3.6 16,0.5 0.5,0.5 0.5,31.5 31.5,31.5 31.5,16 28.4,16"/>
        <polygon
            style={{
                fill: props.color
            }}
            points="19.1,0.5 23.6,5 14.8,13.8 18.2,17.2 27,8.4 31.5,12.9 31.5,0.5"/>
    </svg>
);

External.defaultProps = {
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

export default External;

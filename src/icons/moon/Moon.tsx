import React from 'react';

const Moon = (props:Props)=> (
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
            d="M16,8c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8c0-0.4-0.1-0.8-0.1-1.2c-0.8,1.2-2.3,2-3.9,2c-2.6,0-4.8-2.2-4.8-4.8c0-1.6,0.8-3.1,2-3.9C16.8,8.1,16.4,8,16,8L16,8z"/>	
    </svg>
);

Moon.defaultProps = {
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

export default Moon;

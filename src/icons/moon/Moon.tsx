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
            d="M16,2.2C8.4,2.2,2.2,8.4,2.2,16S8.4,29.8,16,29.8S29.8,23.6,29.8,16c0-0.7-0.1-1.4-0.2-2.1c-1.4,2.1-4,3.5-6.8,3.5c-4.5,0-8.3-3.8-8.3-8.3c0-2.8,1.4-5.3,3.5-6.8C17.4,2.3,16.7,2.2,16,2.2L16,2.2z"/>	
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

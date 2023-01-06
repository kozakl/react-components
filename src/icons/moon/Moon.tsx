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
            d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16c0-0.8-0.1-1.6-0.2-2.4c-1.7,2.4-4.6,4-7.8,4c-5.3,0-9.6-4.3-9.6-9.6c0-3.2,1.6-6.1,4-7.8C17.6,0.1,16.8,0,16,0L16,0z"/>	
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

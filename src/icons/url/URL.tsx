import React from 'react';

const URL = (props:Props)=> (
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
            d="M22.9,9.1c-1.4-1.4-3.8-1.4-5.3,0l-3.1,3.1c-1.5,1.5-1.3,3.9,0,5.3c0.2,0.2,0.5,0.4,0.7,0.5c0.2-0.1,0.5-0.3,0.7-0.5c0-0.2,0.1-0.4,0.1-0.7c0-0.2,0-0.4,0-0.5c-0.1,0-0.1-0.1-0.2-0.2c-0.7-0.7-0.7-1.9,0-2.6c0.1-0.1,3-3,3.1-3.1c0.7-0.7,1.9-0.7,2.6,0c0.7,0.7,0.7,1.9,0,2.6l-2,2.1c0,0.3-0.1,0.7,0,1.2c0,0.5,0.2,0.9,0.3,1.2c0,0,0,0,0,0l3.1-3.1C24.3,13,24.3,10.6,22.9,9.1z"/>	
	    <path
            style={{
                fill: props.colorPrimary
            }}
            d="M17.8,14.2c-0.2-0.2-0.5-0.4-0.7-0.5c-0.2,0.1-0.4,0.2-0.6,0.3c-0.1,0.2-0.1,0.5-0.2,0.8c0,0.2,0,0.4,0,0.5c0.1,0,0.1,0.1,0.2,0.2c0.7,0.7,0.7,1.9,0,2.6c-0.1,0.1-3.3,3.3-3.4,3.4c-0.7,0.7-1.9,0.7-2.6,0c-0.7-0.7-0.7-1.9,0-2.6l2.3-2.3c0.1-0.2,0.2-0.7,0.1-1.3c0-0.5-0.2-0.9-0.4-1.1c0,0,0,0,0,0L9,17.7c-1.4,1.4-1.4,3.8,0,5.3c1.4,1.4,3.8,1.4,5.3,0l3.4-3.4C19.2,18.1,19.2,15.7,17.8,14.2z"/>
    </svg>
);

URL.defaultProps = {
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

export default URL;

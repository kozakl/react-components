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
                fill: 'black'
            }}
            d="M29.8,2.2c-2.9-2.9-7.7-2.9-10.6,0l-6.3,6.3c-3,3-2.7,7.9,0,10.6c0.5,0.5,1,0.8,1.5,1.1c0.5-0.3,1-0.6,1.5-1c0.1-0.4,0.2-0.8,0.2-1.4c0-0.4,0-0.8-0.1-1.1c-0.2-0.1-0.3-0.2-0.5-0.4c-1.4-1.4-1.5-3.8,0-5.3c0.2-0.2,6.1-6.1,6.3-6.3c1.5-1.5,3.8-1.5,5.3,0c1.5,1.5,1.5,3.8,0,5.3L23,14.3c-0.1,0.6-0.2,1.4-0.1,2.5c0.1,1,0.4,1.8,0.6,2.4c0,0,0,0,0.1,0l6.3-6.3C32.7,9.9,32.7,5.1,29.8,2.2z"/>	
	    <path
            style={{
                fill: 'black'
            }}
            d="M19.6,12.4c-0.5-0.5-1-0.8-1.5-1.1c-0.4,0.2-0.9,0.4-1.3,0.6c-0.2,0.4-0.3,1-0.4,1.7c0,0.4,0,0.8,0.1,1.1c0.2,0.1,0.3,0.2,0.5,0.4c1.4,1.4,1.5,3.8,0,5.3c-0.2,0.2-6.6,6.6-6.8,6.8c-1.5,1.5-3.8,1.5-5.3,0c-1.5-1.5-1.5-3.8,0-5.3l4.6-4.6c0.2-0.5,0.5-1.4,0.3-2.6c-0.1-1.1-0.5-1.8-0.8-2.2c0,0,0,0-0.1,0l-6.8,6.8c-2.9,2.9-2.9,7.7,0,10.6c2.9,2.9,7.7,2.9,10.6,0l6.8-6.8C22.5,20.1,22.4,15.3,19.6,12.4z"/>
    </svg>
);

URL.defaultProps = {
    colorPrimary: 'var(--color-primary)',
    stroke: 1
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
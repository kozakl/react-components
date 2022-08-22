import React from 'react';

const CircleDownload = (props:Props)=> (
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
            d="M31.7,12.9c-0.1-1-0.5-2-0.9-3C30.5,9,30,8,29.4,7.1c-0.6-0.9-1.3-1.8-2-2.5c-0.7-0.8-1.6-1.4-2.5-2C24,2,23.1,1.5,22.1,1.1c-0.9-0.4-2-0.6-3-0.9c-1-0.1-2-0.3-3.1-0.3s-2.1,0.1-3.2,0.4c-1,0.1-2,0.5-3,0.9S7.9,2.1,7,2.8S5.3,4,4.5,4.7c-0.7,0.8-1.4,1.6-2,2.5S1.4,9,1.1,9.9c-0.4,0.9-0.6,2-0.9,3c-0.1,1-0.3,2-0.3,3.1c0,1,0,2.1,0.3,3.1c0.1,1,0.5,2,0.9,3C1.5,23,2,24,2.6,24.9c0.6,0.9,1.3,1.7,2,2.5c0.7,0.7,1.6,1.4,2.5,2C8,30,8.9,30.5,9.9,30.9c0.9,0.4,2,0.7,3,0.9c1,0.1,2,0.2,3.1,0.2c1,0,2.1-0.1,3.1-0.2c1-0.1,2-0.5,3-0.9c0.9-0.4,1.9-0.9,2.7-1.5c0.9-0.6,1.8-1.3,2.5-2c0.8-0.8,1.4-1.6,2-2.5c0.6-0.9,1.1-1.8,1.5-2.8c0.4-0.9,0.7-2,0.9-3c0.1-1,0.3-2,0.3-3.1C32,15,31.9,13.9,31.7,12.9z M23,26.4H9v-1.2h14V26.4z M16,23.1l-7.8-7.7l0.9-0.9l6.3,6.2V7.6h1.3v13.1l6.3-6.2l0.9,0.9L16,23.1z"/>
    </svg>
);

CircleDownload.defaultProps = {
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

export default CircleDownload;
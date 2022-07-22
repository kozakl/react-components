import React from 'react';

const ChevronLeft = (props:Props)=> (
    <svg
        className={props.className}
        viewBox="0 0 25 42.2"
        style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            padding: props.padding,
            margin: props.margin,
            width: props.width,
            height: props.height
        }}>
        <path
            d="M24.5,3.9c0,0.4-0.2,0.6-0.4,1L7.9,21.1l16.2,16.2c0.2,0.2,0.4,0.6,0.4,1s-0.2,0.6-0.4,1l-2,2c-0.2,0.2-0.6,0.4-1,0.4s-0.6-0.2-1-0.4L0.9,22.1c-0.2-0.4-0.4-0.6-0.4-1s0.2-0.6,0.4-1L20.1,0.9c0.2-0.2,0.6-0.4,1-0.4s0.6,0.2,1,0.4l2,2C24.3,3.3,24.5,3.5,24.5,3.9z"
            style={{
                fill: '#FFF',
                stroke: '#000',
                strokeMiterlimit: 10
            }}/>
    </svg>
);

interface Props {
    className?:string;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default ChevronLeft;

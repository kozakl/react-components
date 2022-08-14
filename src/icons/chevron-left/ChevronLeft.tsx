import React from 'react';

const ChevronLeft = (props:Props)=> (
    <svg
        className={props.className}
        viewBox="0 0 18.3 32"
        style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            padding: props.padding,
            margin: props.margin,
            width: props.width,
            height: props.height
        }}>
        <path
            d="M16,32c-0.6,0-1.2-0.2-1.6-0.7L0.7,17.6c-0.9-0.9-0.9-2.3,0-3.2L14.4,0.7c0.9-0.9,2.3-0.9,3.2,0s0.9,2.3,0,3.2L5.5,16l12.1,12.1c0.9,0.9,0.9,2.3,0,3.2C17.2,31.8,16.6,32,16,32z"
            style={{
                fill: props.color
            }}/>
    </svg>
);

ChevronLeft.defaultProps = {
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

export default ChevronLeft;

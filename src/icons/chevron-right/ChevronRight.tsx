import React from 'react';

const ChevronRight = (props:Props)=> (
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
            d="M2.3,32c0.6,0,1.2-0.2,1.6-0.7l13.7-13.7c0.9-0.9,0.9-2.3,0-3.2L3.9,0.7C3-0.2,1.6-0.2,0.7,0.7s-0.9,2.3,0,3.2L12.8,16L0.7,28.1c-0.9,0.9-0.9,2.3,0,3.2C1.1,31.8,1.7,32,2.3,32z"
            style={{
                fill: props.color
            }}/>
    </svg>
);

ChevronRight.defaultProps = {
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

export default ChevronRight;

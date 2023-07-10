import React from 'react';

const Tel = (props:Props)=> (
    <svg
        className={props.className}
        viewBox="0 0 32 32"
        style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            strokeLinecap: props.strokeLinecap,
            padding: props.padding,
            margin: props.margin,
            width: props.width,
            height: props.height
        }}>
        <path
            style={{
                fill: props.colorPrimary
            }}
            d="M23.6,20.6l-2.5-2.5c-0.5-0.5-1.3-0.5-1.8,0l-1.2,1.2c-0.1,0-0.2-0.1-0.2-0.1c-0.8-0.4-1.9-1-3-2.2c-1.1-1.1-1.7-2.2-2.2-3c0-0.1-0.1-0.2-0.1-0.2l0.8-0.8l0.4-0.4c0.5-0.5,0.5-1.3,0-1.8l-2.5-2.5c-0.5-0.5-1.3-0.5-1.8,0L8.9,9.1l0,0c-0.2,0.3-0.4,0.6-0.6,1c-0.1,0.4-0.2,0.7-0.3,1c-0.3,2.7,0.9,5.2,4.3,8.5c4.6,4.6,8.4,4.3,8.5,4.3c0.4,0,0.7-0.1,1-0.3c0.4-0.1,0.7-0.3,1-0.6l0,0l0.7-0.7C24.1,22,24.1,21.1,23.6,20.6z M23.1,21.9l-0.3,0.3l-0.1,0.1c-0.2,0.2-0.5,0.5-1,0.6c-0.3,0.1-0.6,0.2-0.8,0.2c0,0-3.5,0.3-7.9-4c-3.7-3.7-4.3-5.8-4-7.9c0-0.3,0.1-0.5,0.2-0.8c0.2-0.5,0.5-0.8,0.6-1L10.1,9c0.2-0.2,0.5-0.2,0.7,0l2.5,2.5c0.2,0.2,0.2,0.5,0,0.7l-1.7,1.7l0.2,0.3c0.1,0.1,0.2,0.3,0.3,0.5c0.5,0.8,1.1,2,2.3,3.2c1.2,1.2,2.3,1.8,3.2,2.3c0.2,0.1,0.3,0.2,0.5,0.3l0.3,0.2l1.7-1.7c0.2-0.2,0.5-0.2,0.7,0l2.5,2.5C23.3,21.4,23.3,21.7,23.1,21.9z"/>
    </svg>
);

Tel.defaultProps = {
    colorPrimary: 'var(--color-primary)'
}

interface Props {
    className?:string;
    colorPrimary?:string;
    strokeLinecap?:'butt' | 'round' | 'square',
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default Tel;

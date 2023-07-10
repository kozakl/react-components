import React from 'react';

const Email = (props:Props)=> (
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
            d="M8.9,10.2h14.2c0.5,0,0.9,0.4,0.9,0.9v9.7c0,0.2-0.1,0.4-0.2,0.5c0,0,0,0.1-0.1,0.1c0,0-0.1,0-0.1,0.1c-0.2,0.1-0.4,0.2-0.6,0.2H8.9c-0.5,0-0.9-0.4-0.9-0.9v-9.8C8,10.6,8.4,10.2,8.9,10.2z M8.9,20.5l4.8-5l-4.8-4.1C8.9,11.4,8.9,20.5,8.9,20.5z M14.4,16.1l-5.1,5h13.4l-4.9-5l-1.4,1.2l0,0c-0.1,0.1-0.3,0.1-0.4,0L14.4,16.1z M18.5,15.5l4.6,5v-9.1L18.5,15.5z M9.3,10.9l6.8,5.5l6.5-5.5H9.3z"/>
    </svg>
);

Email.defaultProps = {
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

export default Email;

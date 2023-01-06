import React from 'react';

const Sun = (props:Props)=> (
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
            d="M16,8.7c-4,0-7.3,3.3-7.3,7.3s3.3,7.3,7.3,7.3s7.3-3.3,7.3-7.3S20,8.7,16,8.7L16,8.7z M1.5,17.5h2.9c0.8,0,1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5H1.5C0.7,14.5,0,15.2,0,16C0,16.8,0.7,17.5,1.5,17.5z M27.6,17.5h2.9c0.8,0,1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5h-2.9c-0.8,0-1.5,0.7-1.5,1.5C26.2,16.8,26.8,17.5,27.6,17.5z M14.5,1.5v2.9c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5V1.5C17.5,0.7,16.8,0,16,0C15.2,0,14.5,0.7,14.5,1.5z M14.5,27.6v2.9c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5v-2.9c0-0.8-0.7-1.5-1.5-1.5C15.2,26.2,14.5,26.8,14.5,27.6z M7.3,5.2c-0.6-0.6-1.5-0.6-2.1,0c-0.6,0.6-0.6,1.5,0,2.1l1.5,1.5c0.6,0.6,1.5,0.6,2.1,0c0.6-0.6,0.6-1.5,0-2.1L7.3,5.2z M25.3,23.2c-0.6-0.6-1.5-0.6-2.1,0c-0.6,0.6-0.6,1.5,0,2.1l1.5,1.5c0.6,0.6,1.5,0.6,2.1,0c0.6-0.6,0.6-1.5,0-2.1L25.3,23.2z M26.8,7.3c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-1.5,1.5c-0.6,0.6-0.6,1.5,0,2.1s1.5,0.6,2.1,0L26.8,7.3z M8.8,25.3c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-1.5,1.5c-0.6,0.6-0.6,1.5,0,2.1c0.6,0.6,1.5,0.6,2.1,0L8.8,25.3z"/>	
    </svg>
);

Sun.defaultProps = {
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

export default Sun;
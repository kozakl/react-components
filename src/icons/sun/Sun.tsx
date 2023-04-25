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
            d="M16,12.4c-2,0-3.6,1.6-3.6,3.6s1.6,3.6,3.6,3.6s3.6-1.6,3.6-3.6S18,12.4,16,12.4L16,12.4z M8.8,16.8h1.4c0.4,0,0.8-0.4,0.8-0.8s-0.3-0.8-0.8-0.8H8.8C8.4,15.2,8,15.6,8,16S8.4,16.8,8.8,16.8z M21.8,16.8h1.5c0.4,0,0.8-0.4,0.8-0.8s-0.4-0.8-0.8-0.8h-1.5c-0.4,0-0.8,0.4-0.8,0.8C21.1,16.4,21.4,16.8,21.8,16.8z M15.2,8.8v1.4c0,0.4,0.4,0.8,0.8,0.8s0.8-0.3,0.8-0.8V8.8C16.8,8.4,16.4,8,16,8S15.2,8.4,15.2,8.8z M15.2,21.8v1.5c0,0.4,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8v-1.5c0-0.4-0.4-0.8-0.8-0.8C15.6,21.1,15.2,21.4,15.2,21.8z M11.6,10.6c-0.3-0.3-0.8-0.3-1,0c-0.3,0.3-0.3,0.8,0,1l0.8,0.8c0.3,0.3,0.8,0.3,1,0c0.3-0.3,0.3-0.8,0-1.1L11.6,10.6z M20.6,19.6c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1l0.8,0.8c0.3,0.3,0.8,0.3,1.1,0c0.3-0.3,0.3-0.8,0-1.1L20.6,19.6z M21.4,11.6c0.3-0.3,0.3-0.8,0-1c-0.3-0.3-0.8-0.3-1.1,0l-0.8,0.8c-0.3,0.3-0.3,0.8,0,1c0.3,0.3,0.8,0.3,1.1,0L21.4,11.6z M12.4,20.6c0.3-0.3,0.3-0.8,0-1.1c-0.3-0.3-0.8-0.3-1,0l-0.8,0.8c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.3,0.8,0.3,1,0L12.4,20.6z"/>	
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

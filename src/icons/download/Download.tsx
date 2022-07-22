import React from 'react';

const Download = (props:Props)=> (
    <svg
        className={props.className}
        viewBox="0 0 27 27"
        style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            padding: props.padding,
            margin: props.margin,
            width: props.width,
            height: props.height
        }}>
        <path
            d="M13.5.5c.9 0 1.7.1 2.5.2.8.2 1.7.4 2.4.7.8.3 1.5.7 2.2 1.2s1.4 1 2 1.6 1.1 1.3 1.6 2 .9 1.5 1.2 2.2c.3.8.6 1.6.7 2.4s.2 1.7.2 2.5c0 .9-.1 1.7-.2 2.5s-.4 1.7-.7 2.4c-.3.8-.7 1.5-1.2 2.2s-1 1.4-1.6 2-1.3 1.1-2 1.6-1.5.9-2.2 1.2c-.8.3-1.6.6-2.4.7s-1.7.2-2.5.2c-.9 0-1.7-.1-2.5-.2s-1.7-.4-2.4-.7c-.8-.3-1.5-.7-2.2-1.2s-1.4-1-2-1.6-1.1-1.3-1.6-2-.9-1.5-1.2-2.2c-.3-.8-.6-1.6-.7-2.4-.2-.8-.2-1.7-.2-2.5 0-.9.1-1.7.2-2.5.2-.8.4-1.7.7-2.4.2-.7.6-1.4 1.1-2.1s1-1.4 1.6-2 1.3-1.1 2-1.6 1.4-.9 2.2-1.2 1.6-.6 2.4-.7c.9-.2 1.7-.3 2.6-.3z"
            style={{
                fill: '#fff',
                stroke: '#000',
                strokeWidth: 1,
                strokeMiterlimit: 10
            }}/>
        <path
            d="m19.4 12.5-5.9 5.8-5.9-5.8M13.5 6.6v11.8"
            style={{
                fill: 'none',
                stroke: "#000",
                strokeMiterlimit: 10
            }}/>
        <path
            d="M19.1 21.1H7.9"
            style={{
                fill: 'none',
                stroke: "#000"
            }}
        />
    </svg>
);

interface Props {
    className?:string;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default Download;

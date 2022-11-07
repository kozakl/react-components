const Logo = (props:Props)=> (
    <svg
        className={props.className}
        viewBox="0 0 130.5 18.5"
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
            d="M0,18.1c0.5,0,1-0.1,1.4-0.3c0.4-0.2,0.8-0.4,1-0.8c0.2-0.2,0.3-0.4,0.4-0.7c0.1-0.3,0.2-0.5,0.4-0.9c0.1-0.3,0.2-0.6,0.3-0.9s0.2-0.6,0.2-0.9H4c0,0.2,0,0.5,0,0.8c0,0.3,0,0.6,0.1,0.9c0,0.3,0.1,0.6,0.2,0.9c0.1,0.3,0.2,0.5,0.3,0.7c0.3,0.4,0.7,0.7,1.1,0.8c0.4,0.2,1,0.3,1.6,0.3v0.2H0V18.1z M5.1,5.4C4.8,4.8,4.5,4.2,4.2,3.9c-0.3-0.4-0.7-0.7-1-1C2.8,2.7,2.5,2.5,2.1,2.3c-0.4-0.1-0.8-0.2-1-0.2V1.9h5.3l6.7,13.6l-1.4,3h-0.1L5.1,5.4z M22.6,2.1c-0.5,0.1-1,0.2-1.3,0.3C21,2.6,20.8,2.8,20.6,3c-0.2,0.3-0.3,0.6-0.3,1s-0.1,0.8,0,1.4l0.3,9.5c0,0.6,0.1,1.1,0.2,1.5s0.2,0.7,0.4,1c0.2,0.2,0.4,0.4,0.8,0.5c0.3,0.1,0.7,0.2,1.2,0.3v0.2h-7.3v-0.2c0.8-0.1,1.4-0.3,1.7-0.6c0.3-0.3,0.5-0.9,0.5-1.7v-0.4c0-0.1,0-0.3,0-0.5l-0.5-13h5.1V2.1z"/>
        <path
            style={{
                fill: props.color
            }}
            d="M25.5,10.7c0-0.4-0.1-0.8-0.2-1c-0.2-0.2-0.3-0.4-0.5-0.5l-0.4-0.3c-0.2-0.1-0.3-0.2-0.4-0.2V8.5l3.7-1.3l0.1,0c0,0.5,0,1.1-0.1,1.8c0,0.7,0,1.3,0,1.8v4.9c0,0.9,0.1,1.4,0.4,1.8c0.2,0.3,0.7,0.5,1.4,0.6v0.2h-5.7v-0.2c0.4-0.1,0.7-0.1,0.9-0.2c0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.2-0.4,0.2-0.7c0-0.3,0.1-0.6,0.1-1.1V10.7z M25.5,2c0.3-0.3,0.6-0.4,1-0.4s0.7,0.1,1,0.4c0.3,0.3,0.4,0.6,0.4,1s-0.1,0.7-0.4,1c-0.3,0.3-0.6,0.4-1,0.4s-0.7-0.1-1-0.4c-0.3-0.3-0.4-0.6-0.4-1S25.2,2.3,25.5,2z"/>
        <path
            style={{
                fill: props.color
            }}
            d="M32.1,3.4c0-0.4-0.1-0.8-0.2-1c-0.2-0.2-0.3-0.4-0.5-0.5c-0.2-0.2-0.4-0.3-0.7-0.4V1.3L34.3,0l0.1,0c0,0.5,0,1.1-0.1,1.8c0,0.7,0,1.3,0,1.8v12.1c0,0.4,0,0.8,0.1,1c0.1,0.3,0.2,0.5,0.3,0.7c0.1,0.2,0.3,0.3,0.5,0.4c0.2,0.1,0.5,0.2,0.8,0.2v0.2h-5.6v-0.2c0.4-0.1,0.7-0.1,0.9-0.2c0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.2-0.4,0.2-0.7c0-0.3,0.1-0.6,0.1-1.1V3.4z M36.6,11c0.1,0.2,0.3,0.5,0.5,0.9c0.2,0.4,0.5,0.8,0.8,1.1c0.3,0.4,0.6,0.8,0.9,1.2c0.3,0.4,0.6,0.8,0.9,1.2c0.3,0.4,0.6,0.7,0.8,1s0.4,0.5,0.6,0.7c0.4,0.4,0.9,0.7,1.3,0.8c0.4,0.2,0.7,0.3,0.9,0.3v0.2l-1.1,0.1c-0.5,0-1,0-1.4,0c-0.6,0-1-0.1-1.2-0.3c-0.3-0.2-0.6-0.4-0.9-0.7c-0.3-0.3-0.6-0.7-1-1.1s-0.7-0.9-1-1.4c-0.3-0.4-0.6-0.9-0.9-1.3c-0.3-0.4-0.5-0.8-0.7-1.1L36.6,11zM42.7,7.7c-0.4,0.1-0.8,0.2-1.2,0.3c-0.5,0.1-0.9,0.3-1.4,0.5c-0.5,0.3-1,0.6-1.5,0.9c-0.5,0.4-0.9,0.7-1.2,1.1l-0.2-0.2c0.2-0.3,0.4-0.6,0.5-0.8S38,9.1,38,8.8c0-0.3-0.1-0.5-0.3-0.7c-0.2-0.2-0.5-0.3-1-0.4V7.4h6V7.7z"/>
        <path
            style={{
                fill: props.color
            }}
            d="M47.2,15.7c0,0.4,0.1,0.8,0.1,1.1c0.1,0.3,0.2,0.5,0.4,0.7c0.2,0.2,0.4,0.3,0.6,0.4c0.2,0.1,0.5,0.2,0.9,0.2v0.2h-5.9v-0.2c0.4-0.1,0.7-0.1,0.9-0.2c0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.2-0.4,0.2-0.7c0-0.3,0.1-0.6,0.1-1.1v-5.2c0-0.4-0.1-0.8-0.2-1c-0.2-0.2-0.3-0.4-0.5-0.5c-0.2-0.2-0.4-0.3-0.7-0.4V8.5l3.6-1.3l0.1,0V15.7z M49.7,9.9c-0.2-0.2-0.4-0.5-0.4-0.8c0-0.2,0-0.3,0.1-0.5c0.1-0.2,0.1-0.3,0.2-0.3c0,0-0.1-0.1-0.2-0.1c-0.2,0-0.5,0.1-0.8,0.3c-0.3,0.2-0.6,0.5-0.8,1V9.3c0.1-0.3,0.2-0.5,0.4-0.8c0.2-0.2,0.3-0.5,0.5-0.7c0.2-0.2,0.4-0.3,0.7-0.5c0.2-0.1,0.5-0.2,0.8-0.2c0.6,0,1,0.2,1.3,0.4C51.8,7.9,52,8.3,52,8.8c0,0.5-0.1,0.8-0.4,1.1s-0.6,0.4-1,0.4C50.3,10.3,50,10.2,49.7,9.9z"/>
        <path
            style={{
                fill: props.color
            }}
            d="M55.9,16.1c0.3,0.8,0.9,1.4,1.6,1.8c0.2,0.1,0.4,0.2,0.6,0.3c0.2,0.1,0.4,0.1,0.6,0.1v0.2c-0.8,0-1.5-0.2-2.2-0.4c-0.7-0.3-1.3-0.6-1.8-1.1c-0.5-0.5-0.9-1-1.2-1.7c-0.3-0.7-0.5-1.5-0.5-2.3c0-0.9,0.2-1.7,0.5-2.3s0.8-1.2,1.2-1.7c0.5-0.5,1.1-0.8,1.7-1.1s1.1-0.4,1.7-0.5v0.2c-0.3,0-0.6,0.2-0.9,0.4c-0.3,0.2-0.5,0.5-0.8,0.8c-0.3,0.4-0.5,1-0.7,1.7c-0.2,0.8-0.3,1.6-0.3,2.6C55.3,14.2,55.5,15.3,55.9,16.1z M60.1,7.7c-0.2-0.1-0.4-0.2-0.6-0.2l-0.6-0.1V7.2c0.8,0,1.5,0.2,2.2,0.4c0.7,0.3,1.3,0.6,1.8,1.1c0.5,0.5,0.9,1.1,1.2,1.8c0.3,0.7,0.4,1.5,0.4,2.3c0,0.9-0.2,1.7-0.5,2.3c-0.3,0.7-0.8,1.2-1.2,1.7s-1,0.8-1.6,1.1c-0.6,0.3-1.2,0.4-1.7,0.5v-0.2c0.3,0,0.6-0.2,0.9-0.4c0.3-0.2,0.6-0.5,0.8-0.8c0.3-0.4,0.5-1,0.7-1.7s0.3-1.6,0.3-2.5C62.2,10.2,61.5,8.5,60.1,7.7z"/>
        <path
            style={{
                fill: props.color
            }}
            d="M70.8,17.2c0.2-0.1,0.4-0.1,0.5-0.2v0.1c-0.2,0.3-0.5,0.7-0.9,1c-0.5,0.3-1,0.4-1.6,0.4c-0.9,0-1.5-0.3-2-0.8c-0.4-0.5-0.7-1.1-0.7-1.7s0.1-1.2,0.4-1.5c0.2-0.4,0.4-0.6,0.5-0.6c0.1-0.1,0.3-0.1,0.7-0.2c0.3-0.1,0.6-0.2,1-0.4c0.4-0.1,0.8-0.3,1.2-0.4c0.4-0.1,0.8-0.3,1.2-0.4v0.2c-0.4,0.2-0.8,0.3-1.3,0.5s-0.8,0.5-1,0.8c-0.1,0.2-0.2,0.4-0.3,0.7c-0.1,0.3-0.1,0.5-0.1,0.8c0,0.5,0.2,1,0.4,1.3c0.3,0.3,0.7,0.5,1.3,0.5C70.3,17.3,70.5,17.3,70.8,17.2z M67.1,9.1c0.2-0.2,0.5-0.3,0.8-0.3c0.3,0,0.6,0.1,0.9,0.3s0.3,0.5,0.3,0.9s-0.1,0.6-0.3,0.9s-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.8-0.4c-0.2-0.2-0.4-0.5-0.4-0.9S66.8,9.3,67.1,9.1z M68.6,8.1c0.1-0.1,0.3-0.2,0.5-0.3c0.2-0.1,0.4-0.2,0.7-0.3l0.7-0.2c0.2-0.1,0.5-0.1,0.7-0.1c0.9,0,1.7,0.2,2.2,0.7s0.8,1.2,0.8,2.3v6c0,0.4,0.1,0.8,0.3,0.9c0.2,0.2,0.4,0.3,0.8,0.3c0.1,0,0.3,0,0.5-0.1c0.2,0,0.3-0.1,0.4-0.2v0.2c-0.1,0.3-0.4,0.5-0.8,0.8c-0.4,0.3-0.9,0.4-1.5,0.4c-0.6,0-1.1-0.2-1.4-0.6c-0.3-0.4-0.5-0.9-0.5-1.6v-6.1c0-0.7-0.3-1.2-0.8-1.5C70.5,8.4,69.7,8.2,68.6,8.1L68.6,8.1z"/>
        <path
            style={{
                fill: props.color
            }}
            d="M85.1,16.3c-0.1,0.2-0.3,0.5-0.5,0.8c-0.2,0.3-0.5,0.5-0.8,0.7c-0.3,0.2-0.7,0.4-1,0.5s-0.8,0.2-1.2,0.2c-0.7,0-1.4-0.1-1.9-0.4c-0.5-0.3-1-0.7-1.4-1.1c-0.4-0.5-0.7-1-0.9-1.6c-0.2-0.6-0.3-1.3-0.3-2c0-0.7,0.1-1.3,0.3-1.9c0.2-0.6,0.5-1.1,0.9-1.6c0.4-0.5,0.8-0.9,1.3-1.3s1-0.7,1.6-0.9v0.2C81,8,80.7,8.2,80.5,8.5c-0.2,0.3-0.4,0.6-0.6,1c-0.2,0.4-0.3,0.8-0.4,1.3c-0.1,0.5-0.2,1-0.2,1.6c0,0.7,0.1,1.3,0.3,1.9s0.4,1,0.8,1.4s0.7,0.6,1.2,0.8c0.4,0.2,0.9,0.3,1.4,0.3s0.9-0.1,1.3-0.2c0.4-0.1,0.7-0.2,0.9-0.3V16.3z M87.8,16c0,0.6,0.1,0.9,0.2,1.1c0.1,0.2,0.3,0.3,0.6,0.4c0.2,0.1,0.4,0.1,0.5,0.1c0.2,0,0.3,0.1,0.5,0.1v0.2l-4,0.7l-0.1,0v-7.1c0-0.2,0-0.4,0-0.7c0-0.3-0.1-0.5-0.1-0.8c-0.1-0.3-0.2-0.5-0.3-0.8c-0.1-0.2-0.3-0.5-0.5-0.7c-0.3-0.3-0.7-0.6-1-0.7s-0.9-0.2-1.4-0.2V7.3c0.5-0.1,0.9-0.2,1.4-0.2c0.4,0,0.8,0,1.2,0.1c0.4,0.1,0.7,0.2,0.9,0.2V3.4c0-0.4-0.1-0.8-0.2-1c-0.2-0.2-0.3-0.4-0.5-0.5c-0.2-0.2-0.4-0.3-0.7-0.4V1.3L87.9,0l0.1,0c0,0.5,0,1.1-0.1,1.8c0,0.7,0,1.3,0,1.8V16z"/>
        <path
            style={{
                fill: props.color
            }}
            d="M94.3,15.7c0,0.4,0,0.8,0.1,1c0.1,0.3,0.2,0.5,0.3,0.7c0.1,0.2,0.3,0.3,0.5,0.4c0.2,0.1,0.5,0.2,0.8,0.2v0.2h-5.6v-0.2c0.4-0.1,0.7-0.1,0.9-0.2c0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.2-0.4,0.2-0.7c0-0.3,0.1-0.6,0.1-1.1v-5.2c0-0.4-0.1-0.8-0.2-1c-0.2-0.2-0.3-0.4-0.5-0.5c-0.2-0.2-0.4-0.3-0.7-0.4V8.5l3.6-1.3l0.1,0V15.7z M101.3,15.7c0,0.4,0,0.8,0.1,1.1c0,0.3,0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.3,0.5,0.4c0.2,0.1,0.5,0.2,0.9,0.2v0.2h-5.6v-0.2c0.3-0.1,0.6-0.1,0.9-0.2c0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.2-0.4,0.3-0.7c0.1-0.3,0.1-0.6,0.1-1v-4.8c0-0.7-0.1-1.3-0.4-1.7s-0.8-0.6-1.6-0.6c-0.4,0-0.7,0-1,0.1c-0.3,0.1-0.7,0.2-1,0.3V9c0.4-0.5,1-0.9,1.6-1.3c0.7-0.3,1.3-0.5,1.9-0.5c1,0,1.7,0.3,2.1,0.9c0.4,0.6,0.6,1.4,0.6,2.4V15.7z M106.1,10.9c0-0.7-0.1-1.3-0.4-1.7s-0.8-0.6-1.6-0.6c-0.4,0-0.7,0-1,0.1c-0.3,0.1-0.7,0.2-1,0.3V9c0.4-0.5,1-0.9,1.6-1.3c0.7-0.3,1.3-0.5,1.9-0.5c1,0,1.7,0.3,2.1,0.9c0.4,0.6,0.6,1.4,0.6,2.4v5.3c0,0.4,0,0.8,0.1,1.1c0,0.3,0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.3,0.5,0.4c0.2,0.1,0.5,0.2,0.9,0.2v0.2h-5.6v-0.2c0.3-0.1,0.6-0.1,0.9-0.2c0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.2-0.4,0.3-0.7c0.1-0.3,0.1-0.6,0.1-1V10.9z"/>
        <path
            style={{
                fill: props.color
            }}
            d="M112.6,10.7c0-0.4-0.1-0.8-0.2-1c-0.2-0.2-0.3-0.4-0.5-0.5l-0.4-0.3c-0.2-0.1-0.3-0.2-0.4-0.2V8.5l3.7-1.3l0.1,0c0,0.5,0,1.1-0.1,1.8c0,0.7,0,1.3,0,1.8v4.9c0,0.9,0.1,1.4,0.4,1.8c0.2,0.3,0.7,0.5,1.4,0.6v0.2h-5.7v-0.2c0.4-0.1,0.7-0.1,0.9-0.2c0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.2-0.4,0.2-0.7c0-0.3,0.1-0.6,0.1-1.1V10.7z M112.7,2c0.3-0.3,0.6-0.4,1-0.4s0.7,0.1,1,0.4c0.3,0.3,0.4,0.6,0.4,1s-0.1,0.7-0.4,1c-0.3,0.3-0.6,0.4-1,0.4s-0.7-0.1-1-0.4c-0.3-0.3-0.4-0.6-0.4-1S112.4,2.3,112.7,2z"/>
        <path
            style={{
                fill: props.color
            }}
            d="M121.5,15.7c0,0.4,0,0.8,0.1,1c0.1,0.3,0.2,0.5,0.3,0.7c0.1,0.2,0.3,0.3,0.5,0.4c0.2,0.1,0.5,0.2,0.8,0.2v0.2h-5.6v-0.2c0.4-0.1,0.7-0.1,0.9-0.2c0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.2-0.4,0.2-0.7c0-0.3,0.1-0.6,0.1-1.1v-5.2c0-0.4-0.1-0.8-0.2-1c-0.2-0.2-0.3-0.4-0.5-0.5c-0.2-0.2-0.4-0.3-0.7-0.4V8.5l3.6-1.3l0.1,0V15.7z M126.6,10.9c0-0.7-0.2-1.3-0.4-1.7c-0.3-0.4-0.9-0.6-1.7-0.6c-0.4,0-0.8,0-1.1,0.1c-0.4,0.1-0.7,0.2-1,0.3V9c0.4-0.5,1-0.9,1.6-1.3c0.7-0.3,1.3-0.5,1.9-0.5c1,0,1.8,0.3,2.3,0.9c0.5,0.6,0.7,1.4,0.7,2.4v5.3c0,0.4,0,0.8,0.1,1.1c0,0.3,0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.3,0.5,0.4c0.2,0.1,0.5,0.2,0.9,0.2v0.2h-5.6v-0.2c0.3-0.1,0.6-0.1,0.9-0.2c0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.2-0.4,0.3-0.7c0.1-0.3,0.1-0.6,0.1-1V10.9z"/>
    </svg>
    
);

Logo.defaultProps = {
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

export default Logo;
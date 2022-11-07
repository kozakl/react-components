const Eye = (props:Props)=> (
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
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 1.75
            }}
            d="M1.1,16c3,5.9,8.5,9.9,14.9,9.9c6.4,0,11.9-4,14.9-9.9c-3-5.9-8.5-9.9-14.9-9.9"/>
        <path
            style={{
                fill: 'none',
                stroke: props.colorPrimary,
                strokeWidth: 1.75
            }}
            d="M23.2,16c0,4-3.2,7.3-7.2,7.3S8.8,20,8.8,16c0-4,3.2-7.3,7.2-7.3"/>
    </svg>
);

Eye.defaultProps = {
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

export default Eye;

const Plus = (props:Props)=> (
    <svg
        className={props.className}
        viewBox="0 0 30 30"
        style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            padding: props.padding,
            margin: props.margin,
            width: props.width,
            height: props.height
        }}>
        <circle
            style={{
                fill: 'none',
                stroke: props.color,
                strokeWidth: 1.375,
                strokeMiterlimit: 10
            }}
            r="14"
            cx="15"
            cy="15"/>
        <line
            style={{
                fill: 'none',
                stroke: props.color,
                strokeWidth: 1.375,
                strokeMiterlimit: 10
            }}
            x1="15"
            y1="6.5"
            x2="15"
            y2="23.4"/>
        <line
            style={{
                fill: 'none',
                stroke: props.color,
                strokeWidth: 1.375,
                strokeMiterlimit: 10
            }}
            x1="23.4"
            y1="15"
            x2="6.5"
            y2="15"/>
    </svg>
);

Plus.defaultProps = {
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

export default Plus;

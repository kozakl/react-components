const Logo = (props:Props)=> (
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
        <circle
            style={{
                fill: props.colorPrimary
            }}
            r="2.9"
            cx="16"
            cy="16"/>
        <g>
            <ellipse
                style={{
                    fill: 'none',
                    stroke: props.colorPrimary
                }}
                cx="16"
                cy="16"
                rx="15.4"
                ry="5.9"/>
            <ellipse
                style={{
                    fill: 'none',
                    stroke: props.colorPrimary
                }}
                transform="matrix(0.866 -0.5 0.5 0.866 -5.8564 10.1436)"
                cx="16"
                cy="16"
                rx="5.9"
                ry="15.4"/>
            <ellipse
                style={{
                    fill: 'none',
                    stroke: props.colorPrimary
                }}
                transform="matrix(0.5 -0.866 0.866 0.5 -5.8564 21.8564)"
                cx="16"
                cy="16"
                rx="15.4"
                ry="5.9"/>
        </g>
    </svg>
);

Logo.defaultProps = {
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

export default Logo;

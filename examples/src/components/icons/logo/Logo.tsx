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
            r="1.5"
            cx="16"
            cy="16"/>
        <g>
            <ellipse
                style={{
                    fill: 'none',
                    stroke: props.colorPrimary,
                    strokeWidth: 0.75
                }}
                cx="16"
                cy="16"
                rx="8"
                ry="3.1"/>
            <ellipse
                style={{
                    fill: 'none',
                    stroke: props.colorPrimary,
                    strokeWidth: 0.75
                }}
                transform="matrix(0.866 -0.5 0.5 0.866 -5.8564 10.1437)"
                cx="16"
                cy="16"
                rx="3.1"
                ry="8"/>
            <ellipse
                style={{
                    fill: 'none',
                    stroke: props.colorPrimary,
                    strokeWidth: 0.75
                }}
                transform="matrix(0.5 -0.866 0.866 0.5 -5.8568 21.8561)"
                cx="16"
                cy="16"
                rx="8"
                ry="3.1"/>
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

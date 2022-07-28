const SortUp = (props:Props)=> (
    <svg
        className={props.className}
        viewBox="0 0 7.5 3.8"
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
            d="M0,3.8L3.8,0l3.8,3.8H0z"/>
    </svg>
);

SortUp.defaultProps = {
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

export default SortUp;

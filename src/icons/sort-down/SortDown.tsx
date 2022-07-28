const SortDown = (props:Props)=> (
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
            d="M0,0l3.8,3.8L7.5,0H0z"/>
    </svg>
);

SortDown.defaultProps = {
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

export default SortDown;

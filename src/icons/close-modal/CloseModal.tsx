const CloseModal = (props:Props)=> (
    <svg
        className={props.className}
        viewBox='0 0 27.7 15.1'
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
                stroke: props.color,
                strokeMiterlimit: 10
            }}
            d='m.4 14.7 14-14 13 14'/>
    </svg>
);

CloseModal.defaultProps = {
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

export default CloseModal;

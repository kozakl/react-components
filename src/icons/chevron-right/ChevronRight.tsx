const ChevronRight = (props:Props)=> (
    <svg
        className={props.className}
        viewBox="0 0 25 42.2"
        style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            padding: props.padding,
            margin: props.margin,
            width: props.width,
            height: props.height
        }}>
        <path
            d="M0.5,38.3c0-0.4,0.2-0.6,0.4-1l16.2-16.2L0.9,4.9c-0.2-0.2-0.4-0.6-0.4-1s0.2-0.6,0.4-1l2-2c0.2-0.2,0.6-0.4,1-0.4s0.6,0.2,1,0.4l19.2,19.2c0.2,0.4,0.4,0.6,0.4,1s-0.2,0.6-0.4,1L4.9,41.3c-0.2,0.2-0.6,0.4-1,0.4s-0.6-0.2-1-0.4l-2-2C0.7,38.9,0.5,38.7,0.5,38.3z"
            style={{
                fill: '#FFF',
                stroke: '#000',
                strokeMiterlimit: 10
            }}/>
    </svg>
);

interface Props {
    className?:string;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default ChevronRight;

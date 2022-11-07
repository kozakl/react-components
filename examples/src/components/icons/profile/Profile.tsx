const Profile = (props:Props)=> (
    <svg
        className={props.className}
        viewBox="0 0 24 24"
        style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            padding: props.padding,
            margin: props.margin,
            width: props.width,
            height: props.height
        }}>
        <path
            d="M23.1,12c0,0.7-0.1,1.5-0.2,2.2s-0.4,1.4-0.6,2.1c-0.3,0.7-0.6,1.3-1,1.9s-0.9,1.2-1.4,1.7s-1.1,1-1.7,1.4s-1.3,0.8-1.9,1c-0.7,0.3-1.4,0.5-2.1,0.6c-0.7,0.1-1.5,0.2-2.2,0.2l0,0c-0.7,0-1.5-0.1-2.2-0.2s-1.4-0.4-2.1-0.6c-0.7-0.3-1.3-0.6-1.9-1s-1.2-0.9-1.7-1.4s-1-1.1-1.4-1.7s-0.8-1.3-1-1.9s-0.5-1.4-0.6-2.1C1,13.5,0.9,12.7,0.9,12S1,10.5,1.1,9.8c0.1-0.7,0.4-1.4,0.6-2.1C2,7,2.3,6.4,2.7,5.8s0.9-1.2,1.4-1.7s1.1-1,1.7-1.4s1.3-0.8,1.9-1c0.7-0.3,1.4-0.5,2.1-0.6s1.5-0.2,2.2-0.2l0,0c0.7,0,1.5,0.1,2.2,0.2c0.7,0.1,1.4,0.4,2.1,0.6c0.7,0.3,1.3,0.6,1.9,1s1.2,0.9,1.7,1.4s1,1.1,1.4,1.7s0.8,1.3,1,1.9c0.3,0.7,0.5,1.4,0.6,2.1C23.1,10.6,23.1,11.3,23.1,12z"
            style={{
                fill: 'none',
                stroke: props.color
            }}/>
        <circle
            cx="11.8" cy="9.9" r="4.6"
            style={{
                fill: 'none',
                stroke: props.color
            }}/>
        <path
            d="M7.2,21.7v-2.6c0-2.5,2.1-4.6,4.6-4.6"
            style={{
                fill: 'none',
                stroke: props.color
            }}/>
        <path
            d="M16.8,21.7c0-2.4,0-2.6,0-2.6c0-2.5-2.1-4.6-4.6-4.6"
            style={{
                fill: 'none',
                stroke: props.color
            }}/>
    </svg>
);

Profile.defaultProps = {
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

export default Profile;

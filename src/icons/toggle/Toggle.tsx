import {classNames} from '@kozakl/utils';
import style from './Toggle.module.css';

const Toggle = (props:Props)=>
{
    const toggleClass = classNames(
        style.toggle,
        props.className,
        props.cross && style.cross
    );
    return (
        <svg
            className={toggleClass}
            viewBox="0 0 100 100"
            style={{
                display: 'inline-block',
                verticalAlign: 'middle',
                padding: props.padding,
                margin: props.margin,
                width: props.width,
                height: props.height
            }}>
            <path
                className={style.line1}
                style={{
                    fill: props.color
                }}
                d="M5 13h90v10H5z"/>
            <path
                className={style.line2}
                style={{
                    fill: props.color
                }}
                d="M5 43h90v10H5z"/>
            <path
                className={style.line3}
                style={{
                    fill: props.color
                }}
                d="M5 73h90v10H5z"/>
        </svg>
    );
};

Toggle.defaultProps = {
    color: 'var(--color-primary)'
}

interface Props {
    className?:string;
    color?:string;
    cross:boolean;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default Toggle;

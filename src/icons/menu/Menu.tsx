import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Menu.module.css';

const Menu = (props:Props)=> {
    return (
        <svg
            className={classNames(
                style.menu,
                props.className,
                props.cross &&
                    style.cross
            )}
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
                    fill: props.colorPrimary
                }}
                d="M5 13h90v6H5z"/>
            <path
                className={style.line2}
                style={{
                    fill: props.colorPrimary
                }}
                d="M5 43h90v6H5z"/>
            <path
                className={style.line3}
                style={{
                    fill: props.colorPrimary
                }}
                d="M5 73h90v6H5z"/>
        </svg>
    );
};

Menu.defaultProps = {
    colorPrimary: 'var(--color-primary)'
}

interface Props {
    className?:string;
    colorPrimary?:string;
    cross:boolean;
    padding?:string;
    margin?:string;
    width?:string;
    height?:string;
}

export default Menu;

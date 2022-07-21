import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Loading.module.css';

const Loading = (props:Props)=>
{
    return (
        <div
            className={classNames(
                style.spinner,
                props.className
            )}
            style={{width: props.size}}>
            <div
                className={classNames(
                    style.wrapper,
                    props.background && style.background,
                )}
                style={{background: props.background}}>
                <svg className={style.svg} viewBox="0 0 60 60">
                    <circle
                        className={style.circle}
                        stroke={props.color}
                        cx="30"
                        cy="30"
                        r="25"/>
                </svg>
            </div>
        </div>
    );
};

Loading.defaultProps = {
    color: '#BDBDBD',
    size: '3.75em'
};

interface Props {
    className?:string;
    background?:string;
    color?:string;
    size?:string;
}

export default Loading;

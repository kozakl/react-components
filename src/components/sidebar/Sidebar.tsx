import * as React from 'react';
import * as style from './Sidebar.pcss';
import {classNames} from '@kozakl/utils';

export default function Sidebar(props:Props)
{
    const sidebarClass = classNames(
        style.sidebar,
        props.active && style.active
    );
    return (
        <div className={sidebarClass}>
            <a className={style.close} onClick={props.onClose}>
                <img src={require('res/icons/close.svg')}/>
            </a>
            <h5 className={style.title}>Sidebar Title</h5>
            <p className={style.content}>
                Sidebar Content
            </p>
            <p className={style.content}>
                Sidebar Content
            </p>
            <p className={style.content}>
                Sidebar Content
            </p>
            <p className={style.content}>
                Sidebar Content
            </p>
            <p className={style.content}>
                Sidebar Content
            </p>
            <p className={style.content}>
                Sidebar Content
            </p>
            <p className={style.content}>
                Sidebar Content
            </p>
            <p className={style.content}>
                Sidebar Content
            </p>
            <p className={style.content}>
                Sidebar Content
            </p>
            <p className={style.content}>
                Sidebar Content
            </p>
            <p className={style.content}>
                Sidebar Content
            </p>
            <p className={style.content}>
                Sidebar Content
            </p>
            <p className={style.content}>
                Sidebar Content
            </p>
            <p className={style.content}>
                Sidebar Content
            </p>
            <p className={style.content}>
                Sidebar Content
            </p>
            <p className={style.content}>
                Sidebar Content
            </p>
        </div>
    );
}

interface Props {
    active?:boolean;
    onClose?:()=> void;
}

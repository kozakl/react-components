import * as React from 'react';
import * as style from './Sidebar.pcss';
import {classNames} from '@kozakl/utils';

export default function Sidebar(props:Props)
{
    const legendSidebarClass = classNames(
        style.legend,
        props.active && style.active
    );
    return (
        <div className={legendSidebarClass}>
            <h5 className={style.title}>Sidebar Title</h5>
            <a className={style.close} onClick={props.onClose}>
                <img src={require('res/close.svg')}/>
            </a>
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

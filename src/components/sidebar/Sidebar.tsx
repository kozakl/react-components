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
            <h5 className={style.title}>Legenda</h5>
            <a className={style.close} onClick={props.onClose}>
                &#xe903;
            </a>
            Sidebar
        </div>
    );
}

interface Props {
    active?:boolean;
    onClose?:()=> void;
}

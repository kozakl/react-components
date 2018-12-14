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
            <h5 className={style.title}>
                Sidebar Title
            </h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tortor id erat fermentum malesuada. Duis tincidunt nulla ipsum, et lobortis ante pretium nec.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tortor id erat fermentum malesuada. Duis tincidunt nulla ipsum, et lobortis ante pretium nec.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tortor id erat fermentum malesuada. Duis tincidunt nulla ipsum, et lobortis ante pretium nec.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tortor id erat fermentum malesuada. Duis tincidunt nulla ipsum, et lobortis ante pretium nec.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tortor id erat fermentum malesuada. Duis tincidunt nulla ipsum, et lobortis ante pretium nec.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tortor id erat fermentum malesuada. Duis tincidunt nulla ipsum, et lobortis ante pretium nec.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tortor id erat fermentum malesuada. Duis tincidunt nulla ipsum, et lobortis ante pretium nec.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tortor id erat fermentum malesuada. Duis tincidunt nulla ipsum, et lobortis ante pretium nec.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tortor id erat fermentum malesuada. Duis tincidunt nulla ipsum, et lobortis ante pretium nec.
            </p>
        </div>
    );
}

interface Props {
    active?:boolean;
    onClose?:()=> void;
}

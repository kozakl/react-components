import {FunctionComponent, MouseEventHandler} from 'react';
import {classNames} from '@kozakl/utils';
import style from './IconButton.module.css';

const IconButton:FunctionComponent<Props> = (props)=>
{
    const iconButtonClass = classNames(
        style.iconButton,
        props.className,
        props.active &&
            style.active
    );
    return (
        <button
            className={iconButtonClass}
            title={props.title}
            type={props.type}
            disabled={props.disabled}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};

IconButton.defaultProps = {
    type: 'button'
}

interface Props {
    className?:string;
    title?:string;
    type?:'button' | 'submit' | 'reset';
    active?:boolean;
    disabled?:boolean;
    onClick?:MouseEventHandler<HTMLButtonElement>;
}

export default IconButton;

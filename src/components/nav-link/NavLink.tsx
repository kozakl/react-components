import {AnchorHTMLAttributes,
        FunctionComponent} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';

const NavLink:FunctionComponent<Props> = (props)=>
{
    const linkClass = classNames(
        props.className,
        props.active === true &&
        props.activeClass,
        props.active === props.href &&
        props.activeClass
    );
    return (
        <a
            className={linkClass}
            href={props.href}
            onClick={props.onClick}>
            {props.children}
        </a>
    );
};

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    className?:string;
    activeClass?:string;
    active?:boolean | string;
}

export default NavLink;

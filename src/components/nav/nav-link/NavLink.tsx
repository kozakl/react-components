import {AnchorHTMLAttributes,
        FunctionComponent} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';

const NavLink:FunctionComponent<Props> = (props)=>
{
    const linkClass = classNames(
        props.className,
        props.active === props.href &&
        props.activeClass
    );
    return (
        <a
            className={linkClass}
            href={props.href}>
            {props.children}
        </a>
    );
};

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    className?:string;
    activeClass?:string;
    active?:string;
}

export default NavLink;

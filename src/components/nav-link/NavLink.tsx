import {AnchorHTMLAttributes,
        FunctionComponent} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';

export const NavLink:FunctionComponent<Props> = (props)=>
{
    const navLinkClass = classNames(
        props.className,
        props.active === true &&
        props.activeClass,
        props.active === props.href &&
        props.activeClass
    );
    return (
        <a
            className={navLinkClass}
            href={props.href}
            title={props.title}
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

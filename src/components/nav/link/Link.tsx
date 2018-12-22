import {AnchorHTMLAttributes,
        FunctionComponent} from 'react';
import {classNames} from '@kozakl/utils';
import React from 'react';

const Link:FunctionComponent<Props> = (props)=>
{
    const linkClass = classNames(
        props.className,
        props.active === props.href &&
        props.activeClass
    );
    return (
        <a
            {...props}
            className={linkClass}>
            {props.children}
        </a>
    );
};

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    className?:string;
    activeClass?:string;
    active?:string;
}

export default Link;

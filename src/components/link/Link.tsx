import {AnchorHTMLAttributes,
        FunctionComponent} from 'react';
import {history} from '../../router';
import React from 'react';

const Link:FunctionComponent<Props> = (props)=>
{
    return (
        <a
            className={props.className}
            href={props.href}
            title={props.title}
            onClick={(event)=> {
                event.preventDefault();
                if (props.onClick) {
                    props.onClick(event);
                }
                if (props.href) {
                    history.push(props.href);
                }
            }}>
            {props.children}
        </a>
    );
};

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    className?:string;
}

export default Link;

import {MouseEvent, PropsWithChildren} from 'react';
import {default as Link} from 'next/link';
import {useRouter} from 'next/router';
import {UrlObject} from 'url';
import {useMounted} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import React from 'react';

const NavLink = (props:Props)=> {
    const mounted = useMounted();
    const {asPath} = useRouter();
    
    return (
        <Link
            className={classNames(
                props.className,
                mounted &&
                    (props.active && props.activeClass ||
                        (props.startWith ?
                            asPath.startsWith(props.activeHref || (props.href as string)) :
                            asPath == (props.activeHref || props.href)) &&
                                props.activeClass)
            )}
            title={props.title}
            href={props.href}
            onClick={props.onClick}>
            {props.children}
        </Link>
    );
};

interface Props extends PropsWithChildren<{}> {
    className?:string;
    title?:string;
    activeClass?:string;
    active?:boolean;
    activeHref?:string;
    href?:string | UrlObject;
    startWith?:boolean;
    onClick:(event:MouseEvent)=> void;
}

export default NavLink;

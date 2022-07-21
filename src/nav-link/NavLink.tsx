import {AnchorHTMLAttributes,
        FunctionComponent} from 'react';
import {default as Link} from 'next/link';
import {useRouter} from 'next/router';
import {useMounted} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import React from 'react';

const NavLink:FunctionComponent<Props> = (props)=>
{
    const mounted = useMounted();
    const {asPath} = useRouter();
    
    return (
        <Link href={props.href}>
            <a
                className={classNames(
                    props.className,
                    mounted &&
                        (props.active && props.activeClass ||
                            (props.startWith ?
                                asPath.startsWith(props.activeHref || props.href) :
                                asPath == (props.activeHref || props.href)) &&
                                    props.activeClass)
                )}
                title={props.title}
                onClick={props.onClick}>
                {props.children}
            </a>
        </Link>
    );
};

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    className?:string;
    activeClass?:string;
    activeHref?:string;
    active?:boolean;
    startWith?:boolean;
}

export default NavLink;

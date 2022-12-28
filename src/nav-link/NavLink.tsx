import {AnchorHTMLAttributes} from 'react';
import {default as Link} from 'next/link';
import {useRouter} from 'next/router';
import {useMounted} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import React from 'react';

const NavLink = (props:Props)=> {
    const mounted = useMounted();
    const {asPath} = useRouter();
    
    function renderAnchor() {
        return (
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
        );
    }
    
    return (
        props.href ?
            <Link href={props.href}>
                {renderAnchor()}
            </Link> :
            renderAnchor()
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

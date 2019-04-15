import {FunctionComponent} from 'react';
import {useLocation, useMatchMedia} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {NavLink} from '../nav-link';
import {Toggle} from './toggle';
import {useOpenNav} from './hooks';
import React from 'react';
import style from './Nav.pcss';

const Nav:FunctionComponent<Props> = (props)=>
{
    const desktop = useMatchMedia('(min-width: 768px)'),
          location = useLocation();
    const {open, transit, setOpen} = useOpenNav(desktop);
    
    const navClass = classNames(
        style.nav,
        props.className
    );
    const linksClass = classNames(
        style.links,
        !open && style.close,
        transit && style.transit
    );
    return (
        <nav className={navClass}>
            {!desktop ?
                <div className={style.top}>
                    <Toggle
                        className={style.toggle}
                        cross={open && !desktop}
                        onChange={()=> setOpen(!open)}/>
                    <div className={style.langSwitch}>
                        LANG
                    </div>
                </div> :
                <div className={style.langSwitch}>
                    LANG
                </div>}
            <div
                className={linksClass}
                onClick={()=> !desktop && setOpen(false)}>
                <NavLink
                    className={style.link}
                    activeClass={style.active}
                    active={location.hash}
                    href={`#/benefits`}>
                    Benefits
                </NavLink>
                <NavLink
                    className={style.link}
                    activeClass={style.active}
                    active={location.hash}
                    href={`#/experts`}>
                    Experts
                </NavLink>
                <NavLink
                    className={style.link}
                    activeClass={style.active}
                    active={location.hash}
                    href={`#/calculator`}>
                    Calculator
                </NavLink>
            </div>
            {open && !desktop &&
                <div
                    className={style.modal}
                    onClick={()=> setOpen(false)}/>}
        </nav>
    );
};

interface Props {
    className?:string;
}

export default Nav;

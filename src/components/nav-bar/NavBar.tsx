import {useMatchMedia} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {NavLink} from '../nav-link';
import {Toggle} from './toggle';
import {useOpenNav} from './hooks';
import React from 'react';
import style from './NavBar.pcss';

export default function NavBar()
{
    const desktop = useMatchMedia('(min-width: 768px)');
    const {open, transit, setOpen} = useOpenNav(desktop);
    
    const linksClass = classNames(
        style.links,
        !open && style.close,
        transit && style.transit
    );
    return (
        <nav className={style.navBar}>
            <div className={style.container}>
                {!desktop ?
                    <div className={style.top}>
                        <Toggle
                            className={style.toggle}
                            cross={open && !desktop}
                            onChange={()=> setOpen(!open)}/>
                        <div className={style.logo}>
                            <img src={require('res/logo.svg')}/>
                        </div>
                    </div> :
                    <div className={style.logo}>
                        <img src={require('res/logo.svg')}/>
                    </div>}
                <div
                    className={linksClass}
                    onClick={()=> !desktop && setOpen(false)}>
                    <NavLink
                        className={style.link}
                        activeClass={style.active}
                        href="#/films">
                        Films
                    </NavLink>
                    <NavLink
                        className={style.link}
                        activeClass={style.active}
                        href="#/photographs">
                        Photographs
                    </NavLink>
                    {desktop &&
                        <span className={style.separator}>|</span>}
                    <NavLink
                        className={style.link}
                        activeClass={style.active}
                        onClick={null}
                        href="#/login">
                        Wyloguj
                    </NavLink>
                </div>
                {open && !desktop &&
                    <div
                        className={style.modal}
                        onClick={()=> setOpen(false)}/>}
            </div>
        </nav>
    );
}

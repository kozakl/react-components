import {FunctionComponent, MouseEvent,
        useState} from 'react';
import {classNames} from '@kozakl/utils';
import {NavLink} from '../../components/nav-link';
import {Toggle} from './toggle';
import {useMatchMedia} from '../../hooks';
import React from 'react';
import style from './Nav.pcss';

const Nav:FunctionComponent<Props> = (props)=>
{
    const desktop = useMatchMedia('(min-width: 570px)', onChangeDesktop);
    const [active, setActive] = useState(location.hash),
          [open, setOpen] = useState(desktop),
          [transit, setTransit] = useState();
    
    function onChangeDesktop(event:MediaQueryListEvent) {
        setOpen(event.matches);
        setTransit(false);
    }
    
    function onChangeToggle() {
        setOpen(!open);
        setTransit(true);
    }
    
    function onClickLinks(event:MouseEvent<HTMLDivElement>) {
        const target = event.target as HTMLAnchorElement;
        if (target.hash) {
            setActive(target.hash);
            setOpen(desktop);
        }
    }
    
    const navClass = classNames(
        style.nav,
        props.className
    );
    const linksClass = classNames(
        style.links,
        transit && style.transit,
        !open && style.close
    );
    return (
        <nav className={navClass}>
            {!desktop ?
                <div className={style.top}>
                    <Toggle
                        className={style.toggle}
                        open={open && !desktop}
                        onChange={onChangeToggle}/>
                    <div className={style.langSwitch}>NAV</div>
                </div> :
                <div className={style.langSwitch}>NAV</div>}
            <div
                className={linksClass}
                onClick={onClickLinks}>
                <NavLink
                    className={style.link}
                    activeClass={style.active}
                    active={active}
                    href="#home">
                    HOME
                </NavLink>
                <NavLink
                    className={style.link}
                    activeClass={style.active}
                    active={active}
                    href="#benefits">
                    KORZYSCI
                </NavLink>
                <NavLink
                    className={style.link}
                    activeClass={style.active}
                    active={active}
                    href="#calculator">
                    KALKULATOR ZDOLNOŚCI KREDYTOWYCH
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

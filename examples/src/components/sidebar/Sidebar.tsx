import {useState} from 'react';
import {ArrowDown, ArrowUp} from '@kozakl/components/icons';
import {NavLink} from '@kozakl/components/nav-link';
import {Switch} from '@kozakl/components/switch';
import {useMatchMedia} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {DarkMode, LightMode} from '../icons';
import style from './Sidebar.module.css';

const Sidebar = (props:Props)=> {
    const [concertsNav, setConcertsNav] = useState(false),
          [mobile, setMobile] = useState(false);
    
    useMatchMedia((event)=> {
        setMobile(event.matches);
    }, '(max-width: 767px)');
    
    return (
        <nav
            className={classNames(
                style.sidebar,
                props.className
            )}>
            {/*<NavLink
                className={style.link}
                activeClass={style.active}
                href="#"
                active={concertsNav}
                onClick={()=> {
                    setConcertsNav(!concertsNav)}}>
                Concerts
                {concertsNav ?
                    <ArrowUp
                        color="var(--color-secondary)"
                        margin="0 0 0.1em 0.5em"
                        height="0.625em"/> :
                    <ArrowDown
                        color="var(--color-primary)"
                        margin="0 0 0.1em 0.5em"
                        height="0.625em"/>}
            </NavLink>
            <nav
                className={classNames(
                    style.subNav,
                    concertsNav && style.open
                )}>
                <NavLink
                    className={style.link}
                    activeClass={style.active}
                    href="/concerts/fields"
                    startWith>
                    Fields
                </NavLink>
                <NavLink
                    className={style.link}
                    activeClass={style.active}
                    href="/concerts/list"
                    startWith>
                    List
                </NavLink>
            </nav>*/}
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/concerts/list"
                startWith>
                Concerts
            </NavLink>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/gallery"
                startWith>
                Gallery
            </NavLink>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/products"
                startWith>
                Shop
            </NavLink>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/concerts/fields"
                startWith>
                Headlines
            </NavLink>
            <div className={style.spacer}/>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/users"
                startWith>
                Users
            </NavLink>
            {/*mobile &&
                <div className={style.appearance}>
                    <LightMode
                        color="var(--color-primary)"
                        margin="0 0.25em 0 0"
                        width="1.25em"/>
                    <Switch
                        defaultChecked={
                            typeof window != 'undefined' &&
                                localStorage.getItem('appearance') != 'light'}
                        onChange={(event)=> {
                            const appearance = event.target.checked ?
                                'dark' : 'light';
                            localStorage.setItem('appearance', appearance);
                            document.documentElement.setAttribute('appearance', appearance);
                        }}/>
                    <DarkMode
                        color="var(--color-primary)"
                        margin="0 0 0 0.25em"
                        width="1.25em"/>
                </div>*/}
        </nav>
    );
};

interface Props {
    className?:string;
}

export default Sidebar;

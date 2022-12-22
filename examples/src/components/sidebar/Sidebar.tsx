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
                        colorPrimary="var(--color-secondary)"
                        margin="0 0 0.1em 0.5em"
                        height="0.625em"/> :
                    <ArrowDown
                        colorPrimary="var(--color-primary)"
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
                href="/active"
                startWith>
                Active
            </NavLink>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/badge"
                startWith>
                Badge
            </NavLink>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/button"
                startWith>
                Button
            </NavLink>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/calendar-popover"
                startWith>
                Calendar Popover
            </NavLink>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/checkbox"
                startWith>
                Checkbox
            </NavLink>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/color-popover"
                startWith>
                Color Popover
            </NavLink>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/dialog"
                startWith>
                Dialog
            </NavLink>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/icons"
                startWith>
                Icons
            </NavLink>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/images-picker"
                startWith>
                Images Picker
            </NavLink>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/paginate"
                startWith>
                Paginate
            </NavLink>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/text-rich-area"
                startWith>
                Text Rich Area
            </NavLink>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/videos-picker"
                startWith>
                Videos Picker
            </NavLink>
            <div className={style.spacer}/>
            {mobile &&
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
                </div>}
        </nav>
    );
};

interface Props {
    className?:string;
}

export default Sidebar;

import {useState} from 'react';
import {Moon, Sun} from '@kozakl/components/icons';
import {NavLink} from '@kozakl/components/nav-link';
import {ToggleSwitch} from '@kozakl/components/toggle-switch';
import {useMatchMedia} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
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
            <div className={style.spacer}/>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/calendar?"
                startWith>
                Calendar
            </NavLink>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/calendar-popover"
                startWith>
                Calendar Popover
            </NavLink>
            <div className={style.spacer}/>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/carousel-slider"
                startWith>
                Carousel Slider
            </NavLink>
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/carousel-transition"
                startWith>
                Carousel Transition
            </NavLink>
            <div className={style.spacer}/>
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
                href="/icon-button"
                startWith>
                Icon Button
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
                href="/modal"
                startWith>
                Modal
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
                href="/search-field"
                startWith>
                Search Field
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
            <NavLink
                className={style.link}
                activeClass={style.active}
                href="/vimeo-player"
                startWith>
                Vimeo Player
            </NavLink>
            {mobile &&
                <div className={style.appearance}>
                    <Sun
                        colorPrimary="var(--color-primary)"
                        margin="0 0.25em 0 0"
                        width="0.875em"/>
                    <ToggleSwitch
                        defaultChecked={
                            typeof window != 'undefined' &&
                                localStorage.getItem('appearance') != null &&
                                localStorage.getItem('appearance') != 'light'}
                        onChange={(event)=> {
                            const appearance = event.target.checked ?
                                'dark' : 'light';
                            localStorage.setItem('appearance', appearance);
                            document.documentElement.setAttribute('appearance', appearance);
                        }}/>
                    <Moon
                        colorPrimary="var(--color-primary)"
                        margin="0 0 0 0.25em"
                        width="0.875em"/>
                </div>}
        </nav>
    );
};

interface Props {
    className?:string;
}

export default Sidebar;

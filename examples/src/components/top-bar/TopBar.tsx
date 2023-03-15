import {useState} from 'react';
import {useRouter} from 'next/router';
import {IconButton} from '@kozakl/components/icon-button';
import {Menu, Moon, Sun} from '@kozakl/components/icons';
import {Switch} from '@kozakl/components/switch';
import {useMatchMedia} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {Logo} from '../icons';
import {Sidebar} from '../sidebar';
import style from './TopBar.module.css';

const TopBar = (props:Props)=> {
    const router = useRouter();
    const [sidebar, setSidebar] = useState(false),
          [mobile, setMobile] = useState(false);
    
    useMatchMedia((event)=> {
        setMobile(event.matches);
    }, '(max-width: 767px)');
    
    return (
        <nav
            className={classNames(
                style.topBar,
                props.className
            )}>
            <div className={style.container}>
                <div className={style.left}>
                    <IconButton
                        className={style.toggle}
                        onClick={()=>
                            setSidebar(!sidebar)}>
                        <Menu
                            colorPrimary="var(--color-secondary)"
                            cross={sidebar}
                            width="2em"/>
                    </IconButton>
                    <IconButton
                        onClick={()=>
                            router.push('/')}>
                        <Logo
                            colorPrimary="var(--color-secondary)"
                            height="1.75em"/>
                    </IconButton>
                    {!mobile &&
                        <div className={style.appearance}>
                            <Sun
                                colorPrimary="var(--color-secondary)"
                                margin="0 0.25em 0 0"
                                width="0.875em"/>
                            <Switch
                                defaultChecked={
                                    typeof window != 'undefined' &&
                                        localStorage.getItem('appearance') != null &&
                                        localStorage.getItem('appearance') != 'light'}
                                reversed
                                onChange={(event)=> {
                                    const appearance = event.target.checked ?
                                        'dark' : 'light';
                                    localStorage.setItem('appearance', appearance);
                                    document.documentElement.setAttribute('appearance', appearance);
                                }}/>
                            <Moon
                                colorPrimary="var(--color-secondary)"
                                margin="0 0 0 0.25em"
                                width="0.875em"/>
                        </div>}
                </div>
            </div>
            <Sidebar
                className={classNames(
                    style.sidebar,
                    sidebar && style.show
                )}/>
        </nav>
    );
};

interface Props {
    className?:string;
}

export default TopBar;

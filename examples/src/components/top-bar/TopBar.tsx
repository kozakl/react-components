import {useState} from 'react';
import {useQuery} from 'react-query';
import {useRouter} from 'next/router';
import {IconButton} from '@kozakl/components/icon-button';
import {XMark} from '@kozakl/components/icons';
import {Switch} from '@kozakl/components/switch';
import {useMatchMedia} from '@kozakl/hooks';
import {useSpinnerState, useToastsState} from '@kozakl/states';
import {classNames} from '@kozakl/utils';
import {DarkMode, LightMode, Logo, Logout, Profile, Toggle} from '../icons';
import {Sidebar} from '../sidebar';
import style from './TopBar.module.css';

const TopBar = (props:Props)=> {
    const router = useRouter();
    const [sidebar, setSidebar] = useState(false),
          [profile, setProfile] = useState(false),
          [mobile, setMobile] = useState(false);
    const {createToast} = useToastsState(),
          {showSpinner, hideSpinner} = useSpinnerState();
    
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
                        <Toggle
                            color="var(--color-secondary)"
                            cross={sidebar}
                            width="2em"/>
                    </IconButton>
                    <IconButton
                        onClick={() =>
                            router.push('/')}>
                        <Logo
                            color="var(--color-secondary)"
                            height="1em"/>
                    </IconButton>
                    {!mobile &&
                        <div className={style.appearance}>
                            <LightMode
                                color="var(--color-secondary)"
                                margin="0 0.25em 0 0"
                                width="1.25em"/>
                            <Switch
                                defaultChecked={
                                    typeof window != 'undefined' &&
                                        localStorage.getItem('appearance') != 'light'}
                                reversed
                                onChange={(event)=> {
                                    const appearance = event.target.checked ?
                                        'dark' : 'light';
                                    localStorage.setItem('appearance', appearance);
                                    document.documentElement.setAttribute('appearance', appearance);
                                }}/>
                            <DarkMode
                                color="var(--color-secondary)"
                                margin="0 0 0 0.25em"
                                width="1.25em"/>
                        </div>}
                </div>
                <div className={style.right}>
                    {mobile ?
                        <IconButton
                            title="Profile"
                            onClick={() =>
                                setProfile(!profile)}>
                            <Profile
                                color="var(--color-secondary)"
                                padding="0.25em"
                                width="2em"/>
                        </IconButton> :
                        <IconButton
                            className={style.name}
                            onClick={()=>
                                setProfile(!profile)}>
                            
                        </IconButton>}
                    <IconButton
                        title="Logout"
                        onClick={()=> {
                            showSpinner();
                            logout()
                                .then(()=> {
                                    router.push('/');
                                    hideSpinner();
                                    createToast(
                                        <>
                                            <span>You have been logout</span>
                                            <XMark
                                                padding="0.5em"
                                                width="2.5em"/>
                                        </>
                                    );
                                })
                                .catch(()=>
                                    hideSpinner());
                        }}>
                        <Logout
                            color="var(--color-secondary)"
                            padding="0.25em"
                            width="2em"/>
                    </IconButton>
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

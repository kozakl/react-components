import {MouseEvent, PureComponent} from 'react';
import {classNames} from '@kozakl/utils';
import {Toggle} from './toggle';
import {Link} from './link';
import React from 'react';
import style from './Nav.pcss';

export default class Nav extends PureComponent<Props, State>
{
    private desktopMedia:MediaQueryList;
    
    constructor()
    {
        super(undefined);
        
        this.desktopMedia = window.matchMedia('(min-width: 550px)');
        this.desktopMedia.addEventListener('change', this.onChangeDesktop);
        
        this.state = {
            desktop: this.desktopMedia.matches,
            active: location.hash,
            open: this.desktopMedia.matches
        };
    }
    
    onChangeDesktop = (event:MediaQueryListEvent)=> {
        this.setState({
            desktop: event.matches,
            open: event.matches,
            trans: false
        });
    };
    
    onChangeToggle = ()=> {
        this.setState({
            open: !this.state.open,
            trans: true
        });
    };
    
    onClickLinks = (event:MouseEvent<HTMLDivElement>)=>
    {
        const target = event.target as HTMLAnchorElement;
        if (target.hash) {
            this.setState({
                active: target.hash,
                open: this.state.desktop
            });
        }
    };
    
    onClickModal = ()=> {
        this.setState({open: false});
    };
    
    componentWillUnmount() {
        this.desktopMedia.removeEventListener('change', this.onChangeDesktop);
    }
    
    render()
    {
        const navClass = classNames(
            style.nav,
            this.props.className
        );
        const linksClass = classNames(
            style.links,
            this.state.trans && style.trans,
            !this.state.open && style.close
        );
        return (
            <nav className={navClass}>
                {!this.state.desktop ?
                    <div className={style.top}>
                        <Toggle
                            className={style.toggle}
                            open={this.state.open &&
                                  !this.state.desktop}
                            onChange={this.onChangeToggle}/>
                        <div className={style.langSwitch}>NAV</div>
                    </div> :
                    <div className={style.langSwitch}>NAV</div>}
                <div
                    className={linksClass}
                    onClick={this.onClickLinks}>
                    <Link
                        className={style.link}
                        activeClass={style.active}
                        active={this.state.active}
                        href="#home">
                        HOME
                    </Link>
                    <Link
                        className={style.link}
                        activeClass={style.active}
                        active={this.state.active}
                        href="#benefits">
                        KORZYSCI
                    </Link>
                    <Link
                        className={style.link}
                        activeClass={style.active}
                        active={this.state.active}
                        href="#calculator">
                        KALKULATOR ZDOLNOŚCI KREDYTOWYCH
                    </Link>
                </div>
                {this.state.open &&
                 !this.state.desktop &&
                    <div
                        className={style.modal}
                        onClick={this.onClickModal}/>}
            </nav>
        );
    }
}

interface Props {
    className?:string;
}

interface State {
    desktop:boolean;
    active:string;
    open:boolean;
    trans?:boolean;
}

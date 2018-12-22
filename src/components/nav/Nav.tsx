import {PureComponent} from 'react';
import {classNames} from '@kozakl/utils';
import {Toggle} from './toggle';
import React from 'react';
import style from './Nav.pcss';
import {Link} from "./link";

export default class Nav extends PureComponent<Props, State>
{
    constructor()
    {
        super(undefined);
        
        const desktopMedia = window.matchMedia('(min-width: 550px)');
        desktopMedia.addEventListener('change', this.onDesktopMedia);
        
        this.state = {
            active: '',
            opened: false
        };
    }
    
    onDesktopMedia = ()=> {
        this.setState({opened: false});
    };
    
    onChangeToggle = ()=> {
        this.setState({opened: !this.state.opened});
    };
    
    onClickLinks = (event)=> {
        this.setState({active: event.target.hash});
    };
    
    render()
    {
        //console.log(this.state.active)
        const navClass = classNames(
            style.nav,
            this.props.className
        );
        const listClass = classNames(
            style.list,
            this.state.opened && style.hide
        );
        return (
            <nav className={navClass}>
                <div className={style.toggleWrapper}>
                    <Toggle
                        className={style.toggle}
                        opened={!this.state.opened}
                        onChange={this.onChangeToggle}/>
                </div>
                <div
                    className={listClass}
                    onClick={this.onClickLinks}>
                    <Link
                        className={style.link}
                        activeClass={style.active}
                        active={this.state.active}
                        href="#/nav/#a">
                        Kalkulator zdolności kredytowej
                    </Link>
                    <Link
                        className={style.link}
                        activeClass={style.active}
                        active={this.state.active}
                        href="#/nav/#b">
                        Wiedza
                    </Link>
                    <Link
                        className={style.link}
                        activeClass={style.active}
                        active={this.state.active}
                        href="#/nav/#c">
                        Korzyści
                    </Link>
                </div>
            </nav>
        );
    }
}

interface Props {
    className?:string;
}

interface State {
    active:string;
    opened:boolean;
}

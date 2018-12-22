import {MouseEvent,
        PureComponent} from 'react';
import {classNames} from '@kozakl/utils';
import {Toggle} from './toggle';
import {Link} from './link';
import React from 'react';
import style from './Nav.pcss';

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
    
    onClickLinks = (event:MouseEvent<HTMLDivElement>)=>
    {
        const target = event.target as HTMLAnchorElement;
        this.setState({active: target.hash});
    };
    
    render()
    {
        const navClass = classNames(
            style.nav,
            this.props.className
        );
        const linksClass = classNames(
            style.links,
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
                    className={linksClass}
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

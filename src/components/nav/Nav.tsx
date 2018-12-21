import {PureComponent} from 'react';
import {classNames} from '@kozakl/utils';
import {Toggle} from './toggle';
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
            opened: false
        };
    }
    
    onDesktopMedia = ()=> {
        this.setState({opened: false});
    };
    
    onChangeToggle = ()=> {
        this.setState({opened: !this.state.opened});
    };
    
    render()
    {
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
                <Toggle
                    className={style.toggle}
                    opened={!this.state.opened}
                    onChange={this.onChangeToggle}/>
                <div className={listClass}>
                    <a className={style.link} href="#nav/#a">
                        Kalkulator zdolności kredytowej
                    </a>
                    <a className={style.link} href="#nav/#b">
                        Wiedza
                    </a>
                    <a className={style.link} href="#nav/#c">
                        Korzyści
                    </a>
                </div>
            </nav>
        );
    }
}

interface Props {
    className?:string;
}

interface State {
    opened:boolean;
}

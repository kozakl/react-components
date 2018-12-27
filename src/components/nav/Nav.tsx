import {MouseEvent, PureComponent} from 'react';
import {classNames} from '@kozakl/utils';
import {Toggle} from './toggle';
import {Link} from './link';
import React from 'react';
import style from './Nav.pcss';

export default class Nav extends PureComponent<Props, State>
{
    private mobile:MediaQueryList;
    
    constructor()
    {
        super(undefined);
        
        this.mobile = window.matchMedia('(min-width: 550px)');
        this.mobile.addEventListener('change', this.onChangeMobile);
        
        this.state = {
            active: location.hash,
            open: this.mobile.matches,
            trans: false
        };
    }
    
    onChangeMobile = (event:MediaQueryListEvent)=> {
        this.setState({
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
                open: this.mobile.matches
            });
        }
    };
    
    componentWillUnmount() {
        this.mobile.removeEventListener('change', this.onChangeMobile);
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
                <div className={style.toggleWrapper}>
                    <Toggle
                        className={style.toggle}
                        open={this.state.open &&
                              this.state.trans}
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
    open:boolean;
    trans:boolean;
}

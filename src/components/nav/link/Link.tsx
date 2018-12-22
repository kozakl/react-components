import {PureComponent} from 'react';
import {classNames} from '@kozakl/utils';
import {Toggle} from '../toggle/index';
import React from 'react';
import style from '../Nav.pcss';

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
    
    render()
    {
        const linkClass = classNames(
            this.props.className,
            this.props.active === this.props.href &&
            this.props.activeClass
        );
        return (
            <a
                {...this.props}
                className={linkClass}>
                {this.props.children}
            </a>
        );
    }
}

interface Props {
    className?:string;
    activeClass?:string;
    active?:string;
}

interface State {
    active:string;
    opened:boolean;
}

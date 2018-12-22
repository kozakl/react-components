import {PureComponent} from 'react';
import {clamp} from '@kozakl/utils/math';
import React from 'react';
import style from './Badge.pcss';
import {classNames} from "@kozakl/utils";

export default class Badge extends React.Component
{
    render()
    {
        const classes = classNames(
            style.badge,
            this.props.className,
            this.props.disabled && style.disabled
        );
        return (
            <a {...this.props} className={classes}>
                {this.props.children}
            </a>
        )
    }
}

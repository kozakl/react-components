import React      from 'react';
import Icons      from '../../model/Icons';
import classNames from '../../utils/classNames';
import style from './Badge.css';
/**
 * @author kozakluke@gmail.com
 */
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
                <img className={style.leaf} src={Icons.get('leaf')}/>
                {this.props.children}
            </a>
        )
    }
}

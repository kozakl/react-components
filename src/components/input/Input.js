import React      from 'react';
import classNames from '../../utils/classNames';
import style from './Input.css';
/**
 * @author kozakluke@gmail.com
 */
export default class Input extends React.Component
{
    render()
    {
        const {name, type, placeholder, onChange} = this.props;
        const fieldClass = classNames(
            style.field,
            this.props.error && style.error
        );
        return (
            <div className={this.props.className}>
                <input className={fieldClass} {...{name, type, placeholder, onChange}}/>
                {this.props.error && <div className={style.error}>{this.props.error}</div>}
            </div>
        )
    }
}

import {ChangeEventHandler, PropsWithChildren} from 'react';
import {classNames} from '@kozakl/utils';
import {useTheme} from '../theme';
import React from 'react';
import style from './Checkbox.module.css';

const Checkbox = (props:Props)=> {
    const theme = useTheme('checkbox');
    return (
        <div
            className={classNames(
                style.checkbox,
                theme.checkbox,
                props.className
            )}>
            <label
                className={classNames(
                    theme.label,
                    props.disabled &&
                        theme.disabled
                )}>
                <input
                    className={classNames(
                        style.input,
                        theme.input
                    )}
                    id={props.id}
                    name={props.name}
                    type="checkbox"
                    defaultChecked={props.defaultChecked}
                    checked={props.checked}
                    disabled={props.disabled}
                    onChange={props.onChange}/>
                <span className={theme.box}/>
                <span>{props.children}</span>
            </label>
            {props.error &&
                <div className={theme.error}>
                    {props.error}
                </div>}
        </div>
    );
};

interface Props extends PropsWithChildren<{}> {
    className?:string;
    id?:string;
    name?:string;
    defaultChecked?:boolean;
    checked?:boolean;
    disabled?:boolean;
    error?:string;
    onChange?:ChangeEventHandler<HTMLInputElement>;
}

export default Checkbox;

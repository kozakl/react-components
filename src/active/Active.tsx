import {ChangeEventHandler} from 'react';
import {classNames} from '@kozakl/utils';
import {useTheme} from '../theme';
import React from 'react';
import style from './Active.module.css';

const Active = (props:Props)=> {
    const theme = useTheme('active');
    return (
        <label
            className={classNames(
                style.active,
                theme.active,
                props.className
            )}
            title={props.title}>
            <input
                className={classNames(
                    style.input,
                    theme.input
                )}
                id={props.id}
                type="checkbox"
                name={props.name}
                defaultChecked={props.defaultChecked}
                checked={props.checked}
                disabled={props.disabled}
                onChange={props.onChange}/>
            <div className={theme.content}/>
        </label>
    );
};

interface Props {
    className?:string;
    id?:string;
    name?:string;
    title?:string;
    defaultChecked?:boolean;
    checked?:boolean;
    disabled?:boolean;
    onChange?:ChangeEventHandler<HTMLInputElement>;
}

export default Active;

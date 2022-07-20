import {ChangeEventHandler} from 'react';
import {classNames} from '@kozakl/utils';
import style from './Active.module.css';

const Active = (props:Props)=>
{
    const activeClass = classNames(
        style.active,
        props.className
    );
    return (
        <label
            className={activeClass}
            title={props.title}>
            <input
                className={style.input}
                id={props.id}
                type="checkbox"
                name={props.name}
                disabled={props.disabled}
                checked={props.checked}
                onChange={props.onChange}/>
            <div className={style.content}/>
        </label>
    );
};

interface Props {
    className?:string;
    id?:string;
    name?:string;
    title?:string;
    checked?:boolean;
    disabled?:boolean;
    onChange?:ChangeEventHandler<HTMLInputElement>;
}

export default Active;

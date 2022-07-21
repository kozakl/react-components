import {FunctionComponent} from 'react';
import {classNames} from '@kozakl/utils';
import style from './Badge.module.css';

const Badge:FunctionComponent<Props> = (props)=>
{
    const badgeClass = classNames(
        style.badge,
        props.className,
    );
    return (
        <a
            className={badgeClass}
            title={props.title}
            href={props.href}>
            <label className={style.label}>
                {props.children}
            </label>
        </a>
    );
};

interface Props {
    className?:string;
    title?:string;
    href?:string;
}

export default Badge;

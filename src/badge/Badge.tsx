import {classNames} from '@kozakl/utils';
import {useTheme} from '../theme';
import React from 'react';

const Badge = (props:Props)=> {
    const theme = useTheme('badge');
    return (
        <a
            className={classNames(
                theme.badge,
                props.className,
            )}
            title={props.title}
            href={props.href}>
            <label className={theme.label}>
                {props.value}
            </label>
        </a>
    );
};

interface Props {
    className?:string;
    title?:string;
    value?:number;
    href?:string;
}

export default Badge;

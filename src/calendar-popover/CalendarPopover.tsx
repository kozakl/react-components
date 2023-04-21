import {useRef, useState} from 'react';
import {format, Locale} from 'date-fns';
import {useClickOutside} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {Calendar} from '../calendar';
import {useTheme} from '../theme';
import React from 'react';
import style from './CalendarPopover.module.css';

const CalendarPopover = (props:Props)=> {
    const theme = useTheme('calendarPopover'),
          calendarPopover = useRef();
    const [open, setOpen] = useState(false);
    
    useClickOutside(calendarPopover, ()=>
        setOpen(false));
    
    return (
        <div
            className={classNames(
                style.calendarPopover,
                theme.calendarPopover,
                props.className
            )}
            ref={calendarPopover}
            tabIndex={0}
            onKeyDown={(event)=> {
                if (event.code == 'Enter') {
                    event.preventDefault();
                    setOpen(true);
                } else if (event.code == 'Escape') {
                    event.preventDefault();
                    setOpen(false);
                }
            }}>
            <div
                className={classNames(
                    theme.date,
                    props.disabled &&
                        theme.disabled
                )}
                onClick={()=>
                    setOpen(!open)}>
                {props.date ?
                    format(props.date, 'PP', {locale: props.locale}) :
                    '---- -- --'}
            </div>
            {!props.disabled &&
                open &&
                    <Calendar
                        className={theme.calendar}
                        date={props.date}
                        months={1}
                        locale={props.locale}
                        onChange={(date)=> {
                            setOpen(false);
                            props.onChange(date);
                        }}/>}
            {props.error &&
                <div className={theme.error}>
                    {props.error}
                </div>}
        </div>
    );
};

interface Props {
    className?:string;
    date?:Date;
    locale?:Locale;
    error?:string;
    disabled?:boolean;
    onChange?:(date:Date)=> void;
}

export default CalendarPopover;

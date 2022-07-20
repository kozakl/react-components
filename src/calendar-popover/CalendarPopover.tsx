import {useState} from 'react';
import {format, Locale} from 'date-fns';
import {classNames} from '@kozakl/utils';
import {Calendar} from '../calendar';
import React from 'react';
import style from './CalendarPopover.module.css';

const CalendarPopover = (props:Props)=>
{
    const [open, setOpen] = useState(false);
    
    return (
        <div
            className={classNames(
                style.calendarPopover,
                props.className
            )}>
            <div
                className={classNames(
                    style.date,
                    props.disabled &&
                        style.disabled
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
                        className={style.calendar}
                        date={props.date}
                        months={1}
                        locale={props.locale}
                        onChange={(date)=> {
                            setOpen(false);
                            props.onChange(date);
                        }}/>}
        </div>
    );
};

interface Props {
    className?:string;
    date?:Date;
    locale?:Locale;
    disabled?:boolean;
    onChange?:(date:Date)=> void;
}

export default CalendarPopover;

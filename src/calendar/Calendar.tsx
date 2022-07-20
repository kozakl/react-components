import {ReactNode} from 'react';
import {Calendar as CalendarInternal} from 'react-date-range';
import {Locale} from 'date-fns';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Calendar.module.css';

const Calendar = (props:Props)=>
{
    return (
        <CalendarInternal
            className={classNames(
                style.calendar,
                props.hideSelects &&
                    style.hideSelects,
                props.className
            )}
            date={props.date}
            months={props.months}
            locale={props.locale}
            direction="horizontal"
            monthDisplayFormat="LLLL yyyy"
            showDateDisplay={false}
            calendarFocus={props.calendarFocus}
            disabledDates={props.disabledDates}
            dayContentRenderer={props.dayContentRenderer}
            onChange={props.onChange}/>
    );
};

Calendar.defaultProps = {
    date: new Date(),
    calendarFocus: 'forwards'
};

interface Props {
    className?:string;
    date?:Date;
    months?:number;
    locale?:Locale;
    hideSelects?:boolean;
    calendarFocus?:'forwards' | 'backwards';
    disabledDates?:Date[];
    dayContentRenderer?:(day:Date)=> ReactNode;
    onChange?:(date:Date)=> void;
}

export default Calendar;
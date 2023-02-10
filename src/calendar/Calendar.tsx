import {ReactNode, useEffect} from 'react';
import {Calendar as CalendarInternal} from 'react-date-range';
import {Locale} from 'date-fns';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './Calendar.module.css';

const Calendar = (props:Props)=> {
    useEffect(()=> {
        if (props.onShownDateChange) {
            props.onShownDateChange(props.date || new Date());
        }
    }, [props.date]);
    
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
            showDateDisplay={false}
            showPreview={props.showPreview}
            calendarFocus={props.calendarFocus}
            dateDisplayFormat={props.dateDisplayFormat}
            dayDisplayFormat={props.dayDisplayFormat}
            weekdayDisplayFormat={props.weekdayDisplayFormat}
            monthDisplayFormat={props.monthDisplayFormat}
            weekStartsOn={props.weekStartsOn}
            fixedHeight={props.fixedHeight}
            disabledDates={props.disabledDates}
            dayContentRenderer={props.dayContentRenderer}
            onChange={props.onChange}
            onShownDateChange={props.onShownDateChange}/>
    );
};

Calendar.defaultProps = {
    date: new Date(),
    showPreview: true,
    calendarFocus: 'forwards',
    dateDisplayFormat: 'MMM d, yyyy',
    dayDisplayFormat: 'd',
    weekdayDisplayFormat: 'E',
    monthDisplayFormat: 'MMM yyyy'
};

interface Props {
    className?:string;
    date?:Date;
    months?:number;
    locale?:Locale;
    showPreview?:boolean;
    hideSelects?:boolean;
    calendarFocus?:'forwards' | 'backwards';
    dateDisplayFormat?:string;
    dayDisplayFormat?:string;
    weekdayDisplayFormat?:string;
    monthDisplayFormat?:string;
    weekStartsOn?:0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    fixedHeight?:boolean;
    disabledDates?:Date[];
    dayContentRenderer?:(day:Date)=> ReactNode;
    onChange?:(date:Date)=> void;
    onShownDateChange?:(date:Date)=> void;
}

export default Calendar;

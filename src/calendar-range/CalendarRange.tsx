import {ReactNode, useEffect,
        useState} from 'react';
import {DateRange, RangeKeyDict} from 'react-date-range';
import {Locale} from 'date-fns';
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './CalendarRange.module.css';

const CalendarRange = (props:Props)=> {
    const [ranges, setRanges] = useState([{
        key: 'selection',
        startDate: props.startDate,
        endDate: props.endDate
    }]);
    
    useEffect(()=> {
        if (!!ranges[0].startDate &&
            !!ranges[0].endDate &&
            !!props.disabledDates) {
            const allowSelection = props.disabledDates.every((day)=>
                !(day >= ranges[0].startDate &&
                  day <= ranges[0].endDate)
            );
            if (!allowSelection) {
                setRanges([{
                    key: 'selection',
                    startDate: null,
                    endDate: new Date('')
                }]);
                props.onChange({
                    key: 'selection',
                    startDate: null,
                    endDate: new Date('')
                } as {});
            }
        } else {
            setRanges([{
                key: 'selection',
                startDate: props.startDate,
                endDate: props.endDate
            }]);
        }
    }, [props.startDate,
        props.endDate,
        props.disabledDates]);
    
    return (
        <DateRange
            className={classNames(
                style.calendarRange,
                props.hideSelects &&
                    style.hideSelects,
                props.className
            )}
            date={props.date}
            ranges={ranges}
            rangeColors={props.rangeColors}
            minDate={props.minDate}
            months={props.months}
            locale={props.locale}
            direction="horizontal"
            monthDisplayFormat="LLLL yyyy"
            showDateDisplay={false}
            showPreview={props.showPreview}
            calendarFocus={props.calendarFocus}
            disabledDates={props.disabledDates}
            dayContentRenderer={props.dayContentRenderer}
            onChange={(range:{selection:any} | RangeKeyDict)=> {
                setRanges([range.selection]);
                range.selection?.startDate.setHours(-range.selection.startDate.getTimezoneOffset() / 60);
                range.selection?.endDate.setHours(-range.selection.endDate.getTimezoneOffset() / 60);
                props.onChange(range.selection);
            }}/>
    );
};

CalendarRange.defaultProps = {
    date: new Date(),
    minDate: new Date(),
    showPreview: true
};

export interface Props {
    className?:string;
    date?:Date;
    startDate:Date;
    endDate:Date;
    rangeColors?:string[];
    minDate?:Date;
    months?:number;
    locale?:Locale;
    showPreview?:boolean;
    hideSelects?:boolean;
    calendarFocus?:'forwards' | 'backwards';
    disabledDates?:Date[];
    dayContentRenderer?:(day:Date)=> ReactNode;
    onChange?:(date:RangeKeyDict)=> void;
}

export default CalendarRange;

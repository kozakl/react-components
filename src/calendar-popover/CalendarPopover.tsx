import {useRef, useState} from 'react';
import {format, Locale} from 'date-fns';
import {useClickOutside} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {Calendar} from '../calendar';
import {XMark} from '../icons';
import {IconButton} from '../icon-button';
import {useTheme} from '../theme';
import React from 'react';

const CalendarPopover = (props:Props)=> {
    const theme = useTheme('calendarPopover'),
          ref = useRef();
    const [open, setOpen] = useState(false);
    
    useClickOutside(ref, ()=>
        setOpen(false));
    
    return (
        <div
            className={classNames(
                theme.calendarPopover,
                props.className
            )}
            ref={ref}
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
                    <>
                        <span>{format(props.date, 'PP', {locale: props.locale})}</span>
                        <IconButton
                            title="Clear"
                            style={{marginLeft: '0.25em'}}
                            onClick={(event)=> {
                                event.stopPropagation();
                                props.setDate(null);
                            }}>
                            <XMark
                                colorPrimary="var(--color-primary)"
                                padding="0.5em"
                                margin="-0.5625em"
                                width="2.25em"/>
                        </IconButton>
                    </> :
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
    setDate?:(date:Date)=> void;
    locale?:Locale;
    error?:string;
    disabled?:boolean;
    onChange?:(date:Date)=> void;
}

export default CalendarPopover;

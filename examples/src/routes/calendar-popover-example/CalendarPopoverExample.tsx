import {CalendarPopover} from '@kozakl/components/calendar-popover';
import {useCalendarPopover} from '@kozakl/hooks';
import {Layout} from '../../components/layout';
import style from './CalendarPopoverExample.module.css';

const CalendarPopoverExample = ()=> {
    const calendar = useCalendarPopover();
    
    return (
        <Layout title="Calendar Popover - React Components">
            <div className={style.calendarPopoverExample}>
                <CalendarPopover {...calendar}/>
            </div>
        </Layout>
    );
};

export default CalendarPopoverExample;

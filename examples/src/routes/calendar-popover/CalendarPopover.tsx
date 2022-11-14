import {CalendarPopover} from '@kozakl/components/calendar-popover';
import {useCalendarPopover} from '@kozakl/hooks';
import {Layout} from '../../components/layout';
import style from './CalendarPopover.module.css';

const Index = ()=> {
    const calendar = useCalendarPopover();
    
    return (
        <Layout title="Calendar Popover - React Components">
            <div className={style.calendarPopover}>
                <CalendarPopover {...calendar}/>
            </div>
        </Layout>
    );
};

export default Index;

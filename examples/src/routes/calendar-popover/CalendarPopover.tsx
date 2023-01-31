import {CalendarPopover} from '@kozakl/components/calendar-popover';
import {useCalendarPopover} from '@kozakl/hooks';
import {Layout} from '../../components/layout';
import style from './CalendarPopover.module.css';

const Main = ()=> {
    const calendar = useCalendarPopover();
    
    return (
        <Layout title="Calendar Popover - React Components">
            <div className={style.main}>
                <CalendarPopover {...calendar}/>
            </div>
        </Layout>
    );
};

export default Main;

import {format} from 'date-fns';
import {Calendar} from '@kozakl/components/calendar';
import {pl} from '@kozakl/date-fns/locale';
import {Layout} from '../../components/layout';
import style from './Calendar.module.css';

const Main = ()=> {
    return (
        <Layout title="Calendar - React Components">
            <div className={style.main}>
                <Calendar
                    date={null}
                    months={3}
                    locale={pl}
                    showPreview={false}
                    hideSelects
                    dayContentRenderer={(day)=> {
                        let background = null;
                        if (day.getDay() == 0) {
                            background = 'pink';
                        }
                        if (day.getDay() == 6) {
                            background = 'lightgray';
                        }
                        return (
                            <span
                                className={style.day}
                                style={{background}}>
                                {format(day, 'd')}
                            </span>
                        );
                    }}/>
            </div>
        </Layout>
    );
};

export default Main;

import {Paginate} from '@kozakl/components/paginate';
import {Layout} from '../../components/layout';
import style from './Paginate.module.css';

const Main = ()=> {
    return (
        <Layout title="Paginate - React Components">
            <div className={style.main}>
                <Paginate
                    total={100}
                    current={50}/>
            </div>
        </Layout>
    );
};

export default Main;

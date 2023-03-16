import {Active} from '@kozakl/components/active';
import {Layout} from '../../components/layout';
import style from './ActiveExample.module.css';

const ActiveExample = ()=> {
    return (
        <Layout title="Active - React Components">
            <div className={style.activeExample}>
                <div>Checked</div>
                <br/>
                <Active defaultChecked/>
                <br/>
                <br/>
                <div>Unchecked</div>
                <br/>
                <Active/>
                <br/>
                <br/>
                <div>Checked disabled</div>
                <br/>
                <Active checked disabled/>
                <br/>
                <br/>
                <div>Unchecked disabled</div>
                <br/>
                <Active defaultChecked={false} disabled/>
            </div>
        </Layout>
    );
};

export default ActiveExample;

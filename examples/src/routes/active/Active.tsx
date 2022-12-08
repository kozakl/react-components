import {Active} from '@kozakl/components/active';
import {Layout} from '../../components/layout';
import style from './Active.module.css';

const Index = ()=> {
    return (
        <Layout title="Active - React Components">
            <div className={style.active}>
                <div>Checked</div>
                <br/>
                <Active checked/>
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
                <Active checked={false} disabled/>
            </div>
        </Layout>
    );
};

export default Index;

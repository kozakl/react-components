import {Checkbox} from '@kozakl/components/checkbox';
import {Layout} from '../../components/layout';
import style from './Checkbox.module.css';

const Index = ()=> {
    return (
        <Layout title="Checkbox - React Components">
            <div className={style.checkbox}>
                <div>Checked</div>
                <br/>
                <Checkbox defaultChecked/>
                <br/>
                <br/>
                <div>Unchecked</div>
                <br/>
                <Checkbox/>
                <br/>
                <br/>
                <div>Checked disabled</div>
                <br/>
                <Checkbox checked disabled/>
                <br/>
                <br/>
                <div>Unchecked disabled</div>
                <br/>
                <Checkbox defaultChecked={false} disabled/>
            </div>
        </Layout>
    );
};

export default Index;

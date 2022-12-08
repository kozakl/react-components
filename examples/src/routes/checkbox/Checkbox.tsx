import {Checkbox} from '@kozakl/components/checkbox';
import {Layout} from '../../components/layout';
import style from './Checkbox.module.css';

const Index = ()=> {
    return (
        <Layout title="Checkbox - React Components">
            <div className={style.checkbox}>
                <Checkbox defaultChecked>
                    Checked
                </Checkbox>
                <br/>
                <br/>
                <Checkbox>
                    Unchecked
                </Checkbox>
                <br/>
                <br/>
                <Checkbox
                    checked
                    disabled>
                    Checked disabled
                </Checkbox>
                <br/>
                <br/>
                <Checkbox
                    defaultChecked={false}
                    disabled>
                    Unchecked disabled
                </Checkbox>
            </div>
        </Layout>
    );
};

export default Index;

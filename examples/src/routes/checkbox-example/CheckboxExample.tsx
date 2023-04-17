import {Checkbox} from '@kozakl/components/checkbox';
import {Layout} from '../../components/layout';
import style from './CheckboxExample.module.css';

const CheckboxExample = ()=> {
    return (
        <Layout title="Checkbox - React Components">
            <div className={style.checkboxExample}>
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

export default CheckboxExample;

import {ToggleSwitch} from '@kozakl/components/toggle-switch';
import {Layout} from '../../components/layout';
import style from './ToggleSwitchExample.module.css';

const ToggleSwitchExample = ()=> {
    return (
        <Layout title="Toggle Switch - React Components">
            <div className={style.toggleSwitchExample}>
                <ToggleSwitch/>
            </div>
        </Layout>
    );
};

export default ToggleSwitchExample;

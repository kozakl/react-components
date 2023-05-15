import {IconButton} from '@kozakl/components/icon-button';
import {CircleCheck} from '@kozakl/components/icons';
import {Layout} from '../../components/layout';
import style from './IconButtonExample.module.css';

const IconButtonExample = ()=> {
    return (
        <Layout title="Icon Button - React Components">
            <div className={style.iconButtonExample}>
                <IconButton>
                    <CircleCheck
                        margin="-1.25em"
                        width="5em"/>
                </IconButton>
            </div>
        </Layout>
    );
};

export default IconButtonExample;

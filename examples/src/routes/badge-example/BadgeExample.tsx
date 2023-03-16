import {Badge} from '@kozakl/components/badge';
import {Layout} from '../../components/layout';
import style from './BadgeExample.module.css';

const BadgeExample = ()=> {
    return (
        <Layout title="Badge - React Components">
            <div className={style.badgeExample}>
                <Badge
                    title="+99"
                    value={999}/>
            </div>
        </Layout>
    );
};

export default BadgeExample;

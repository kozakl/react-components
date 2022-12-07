import {Badge} from '@kozakl/components/badge';
import {Layout} from '../../components/layout';
import style from './Badge.module.css';

const Index = ()=> {
    return (
        <Layout title="Badge - React Components">
            <div className={style.badge}>
                <Badge
                    title="+99"
                    value={999}/>
            </div>
        </Layout>
    );
};

export default Index;

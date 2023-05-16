import {VimeoPlayer} from '@kozakl/components/vimeo-player';
import {Layout} from '../../components/layout';
import style from './VimeoPlayerExample.module.css';

const VimeoPlayerExample = ()=> {
    return (
        <Layout title="Vimeo Player - React Components">
            <div className={style.vimeoPlayerExample}>
                <VimeoPlayer
                    video={{
                        url: 'https://vimeo.com/76979871',
                        width: 200,
                        height: 100
                    }}/>
            </div>
        </Layout>
    );
};

export default VimeoPlayerExample;

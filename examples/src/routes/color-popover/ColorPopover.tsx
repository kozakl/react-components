import {ColorPopover} from '@kozakl/components/color-popover';
import {useColorPopover} from '@kozakl/hooks';
import {Layout} from '../../components/layout';
import style from './ColorPopover.module.css';

const Index = ()=> {
    const color = useColorPopover('#FF0000');
    
    return (
        <Layout title="Color Popover - React Components">
            <div className={style.colorPopover}>
                <ColorPopover {...color}/>
            </div>
        </Layout>
    );
};

export default Index;

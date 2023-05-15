import {ColorPopover} from '@kozakl/components/color-popover';
import {useColorPopover} from '@kozakl/hooks';
import {Layout} from '../../components/layout';
import style from './ColorPopoverExample.module.css';

const ColorPopoverExample = ()=> {
    const color = useColorPopover('#FF0000');
    return (
        <Layout title="Color Popover - React Components">
            <div className={style.colorPopoverExample}>
                <ColorPopover {...color}/>
            </div>
        </Layout>
    );
};

export default ColorPopoverExample;

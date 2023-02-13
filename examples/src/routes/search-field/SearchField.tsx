import {SearchField} from '@kozakl/components/search-field';
import {useTextField} from '@kozakl/hooks';
import {Layout} from '../../components/layout';
import style from './SearchField.module.css';

const Main = ()=> {
    const search = useTextField('abc');
    
    return (
        <Layout title="Search Field - React Components">
            <div className={style.main}>
                <SearchField
                    enabledClose
                    onSearch={()=> { }}
                    {...search}/>
            </div>
        </Layout>
    );
};

export default Main;

import {SearchField} from '@kozakl/components/search-field';
import {useTextField} from '@kozakl/hooks';
import {Layout} from '../../components/layout';
import style from './SearchFieldExample.module.css';

const SearchFieldExample = ()=> {
    const search = useTextField('abc');
    
    return (
        <Layout title="Search Field - React Components">
            <div className={style.searchFieldExample}>
                <SearchField
                    enabledClose
                    onSearch={()=> { }}
                    {...search}/>
            </div>
        </Layout>
    );
};

export default SearchFieldExample;

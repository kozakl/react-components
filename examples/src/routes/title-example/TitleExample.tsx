import {Title} from "@kozakl/components/title";
import {Layout} from '../../components/layout';
import style from './TitleExample.module.css';

const TitleExample = ()=> {
    return (
        <Layout title="Title - React Components">
            <div className={style.titleExample}>
                <Title title="Title example">
                    <span>Over here to see title</span><br/>
                    <span>Over here to see title</span><br/>
                    <span>Over here to see title</span><br/>
                </Title>
            </div>
        </Layout>
    );
};

export default TitleExample;

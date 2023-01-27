import {TextRichArea} from '@kozakl/components/text-rich-area';
import {useTextRichArea} from '@kozakl/hooks';
import {Layout} from '../../components/layout';
import style from './TextRichArea.module.css';

const Main = ()=> {
    const textRichArea1 = useTextRichArea('Example text'),
          textRichArea2 = useTextRichArea();
    return (
        <Layout title="Text Rich Area - React Components">
            <div className={style.main}>
                <TextRichArea
                    id="textRichArea1"
                    toolbar={{
                        options: [
                            'inline',
                            'blockType',
                            'fontSize',
                            'link'
                        ],
                        blockType: {
                            options: ['Normal', 'H2'],
                        }
                    }}
                    {...textRichArea1}/>
                <TextRichArea
                    id="textRichArea2"
                    {...textRichArea2}/>
            </div>
        </Layout>
    );
};

export default Main;

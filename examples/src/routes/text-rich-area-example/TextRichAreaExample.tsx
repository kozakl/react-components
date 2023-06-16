import {TextRichArea} from '@kozakl/components/text-rich-area';
import {useTextRichArea} from '@kozakl/hooks';
import {Layout} from '../../components/layout';
import style from './TextRichAreaExample.module.css';

const TextRichAreaExample = ()=> {
    const textRichArea1 = useTextRichArea('Example text'),
          textRichArea2 = useTextRichArea();
    return (
        <Layout title="Text Rich Area - React Components">
            <div className={style.textRichAreaExample}>
                <TextRichArea
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
                <TextRichArea {...textRichArea2}/>
            </div>
        </Layout>
    );
};

export default TextRichAreaExample;
